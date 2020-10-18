import axios from 'axios';

const giphy = axios.create({
  baseURL: 'https://api.giphy.com',
  params: {
    api_key: process.env.API_KEY
  }
});

export default giphy;