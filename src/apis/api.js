import axios from 'axios';

let url;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  url = 'http://localhost:5000/';
}

if (process.env.NODE_ENV === 'production') {
  url = 'https://www.my-cheap-ass-server.link/';
}

const api = axios.create({
  baseURL: url,
});
//create an interceptor that will send the token to the server
api.interceptors.request.use(
  async (config) => {
    // const { origin } = new URL(config.url);
    // console.log({ origin });
    // const allowedOrigins = [url];
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    console.log({ err });
    return Promise.reject(err);
  }
);
export default api;
