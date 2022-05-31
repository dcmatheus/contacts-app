import axios from 'axios';

export default axios.create({
  baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br',
  headers: {
    'content-type': 'application/json',
  },
});
