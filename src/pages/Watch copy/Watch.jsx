import { useEffect, useState } from 'react';

import WatchTorrent from './components/WatchTorrent';

import { getTorrents } from '../../apis/constants';

import { getTorrentStream } from 'apis/torrents';
import { useParams } from 'react-router-dom';
import { tmdbIdApi } from 'apis/tmdbApi.js';

import 'video.js/dist/video-js.css';

import * as S from './Watch.styles.js';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle.component';

const Watch = () => {
  const [name, setName] = useState('');
  const [selectedTorrent, setSelectedTorrent] = useState([]);
  const [torrents, setTorrents] = useState(null);
  const [file, setFile] = useState(null);

  const [userIsWatching, setUserIsWatching] = useState(false);
  const [downloadInformation, setDownloadInformation] = useState(null);

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

  useEffect(() => {
    if (!selectedTorrent) return;
    const data = async () => {
      console.log('im here');
      const data = await getTorrentStream(selectedTorrent.magnet);
      const videoFile = data.files.find((file) => {
        return file.type.includes('video');
      });
      setFile(data);
    };
    data();
  }, [selectedTorrent]);

  // useEffect(() => {
  //   if (!userIsWatching) return;

  //   const interval = setInterval(async () => {
  //     const { data: torrent } = await getTorrentDetails();

  //     const t = torrent.find((t) => {
  //       return t.files.find((file) => {
  //         return file.name === file.name;
  //       });
  //     });

  //     //extract the file name from the torrent
  //     const downloadInfo = { downloadSpeed: t.downloadSpeed, downloaded: t.downloaded };
  //     setDownloadInformation(downloadInfo);
  //     //
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [userIsWatching]);

  // useEffect(() => {
  //   if (!file) return;

  //   return () => {
  //     setFile(null);
  //   };
  // }, [file]);

  const handleTorrent = async (torrent) => {
    setSelectedTorrent(torrent);
  };

  const renderMagnets = () => {
    if (torrents) {
      return torrents.map((torrent, i) => {
        const quality = torrent.title.match(/\d+(?=p)/g);

        return (
          <>
            <S.Magnet onClick={() => handleTorrent(torrent)}>Link {i + 1}</S.Magnet>
            <h5>peers: {torrent.peers}</h5>
            <h5>seeds: {torrent.seeds}</h5>
            <h5>size: {torrent.size}</h5>
            <h5>quality: {quality}</h5>
          </>
        );
      });
    }
  };

  const title = `Watch ${name} online`;

  if (file) return <WatchTorrent setFile={setFile} file={file} />;

  return (
    <S.Container>
      <CategoryTitle title={title} />
      {renderMagnets()}

      {downloadInformation && (
        <div>
          <h1>download speed: {downloadInformation.downloadSpeed}</h1>
          {/* <div>downloaded: {downloadInformation.downloaded}</div> */}
        </div>
      )}
    </S.Container>
  );
};
export default Watch;
