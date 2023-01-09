import { useEffect, useState } from 'react';
import axios from 'axios';
import subtitlesApi from 'apis/subtitlesApi';

import { getTorrents } from '../../apis/constants';

import { useParams } from 'react-router-dom';
import { tmdbIdApi } from 'apis/tmdbApi.js';

import 'video.js/dist/video-js.css';

import * as S from './Watch.styles.js';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle.component';

const Watch = () => {
  const [name, setName] = useState('');
  const [torrents, setTorrents] = useState(null);
  const [file, setFile] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const tmdbData = await tmdbIdApi(id);
      setName(tmdbData.title);
      const { data: torrents } = await getTorrents(tmdbData.title);
      setTorrents(torrents);
    };
    id && data();
  }, [id]);

  const renderMagnets = () => {
    if (torrents) {
      return torrents.map((torrent, i) => {
        console.log(torrent);
        const quality = torrent.title.match(/\d+(?=p)/g);

        return (
          <div>
            <S.Magnet href={torrent.magnet} download>
              Link {i + 1}
            </S.Magnet>
            <S.MagnetDetails>
              <h5>peers: {torrent.peers}</h5>
              <h5>seeds: {torrent.seeds}</h5>
              <h5>size: {torrent.size}</h5>
              <h5>quality: {quality}</h5>
            </S.MagnetDetails>
          </div>
        );
      });
    }
  };

  const title = `Watch ${name} online`;

  if (file) return <WatchTorrent setFile={setFile} file={file} />;

  return (
    <S.Container>
      <CategoryTitle title={title} />
      <S.MagnetContainer>{renderMagnets()}</S.MagnetContainer>
    </S.Container>
  );
};
export default Watch;
