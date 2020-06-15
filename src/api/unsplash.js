import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ySJsv8UlFFmeeWN_l37GO8rx8pEdAfUn1tXaUV-JLBU'
     }
  });
