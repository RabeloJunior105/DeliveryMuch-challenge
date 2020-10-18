import axios from 'axios';

const recipepuppy = axios.create({
  baseURL: 'http://www.recipepuppy.com/api/',
});

export default recipepuppy;