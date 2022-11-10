import { useEffect, useRef, useMemo, useState } from 'react';

import VideoJS from 'components/VideoJs/VideoJs';

const WatchTorrent = ({ file, setFile }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [tracks, setTracks] = useState([]);

  const playerRef = useRef(null);

  useEffect(() => {
    const videoFile = file?.files.find((file) => {
      return file.type.includes('video');
    });
    setVideoFile(videoFile);
  }, [file]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {});
    player.ready(() => {
      player.play();
    });

    // player.on('timeupdate', () => {
    //   if (userIsWatching) return;
    //   const time = player.currentTime();
    //   if (time > 0) {
    //     setUserIsWatching(true);
    //   }
    // });

    player.on('dispose', () => {
      player.dispose();
    });
  };
  if (videoFile) {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,

      preload: 'auto',
      fluid: true,
      sources: [
        {
          src: videoFile?.stream,
          type: 'video/mp4',
        },
      ],
    };

    return (
      <>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} tracks={tracks} />;
        <a href={file.streamZip}>Download File</a>
        <button onClick={() => setFile(null)}>Go back to magnets</button>
      </>
    );
  }
  return <></>;
};
export default WatchTorrent;
