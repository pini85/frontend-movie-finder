import axios from 'axios';

const apiDomain = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.my-cheap-ass-server.online';
  }
  return 'http://localhost:5001';
};

export const getTorrentStream = async (magnet) => {
  const url = apiDomain();
  //change ? in magnet to #

  const link = encodeURIComponent(magnet.trim());

  const { data } = await axios.post(`${url}/api/torrents?torrent=${link}`);

  return data;
};
export const getTorrentDetails = async () => {
  const url = apiDomain();
  const data = await axios.get(`${url}/api/torrents`);

  return data;
};
