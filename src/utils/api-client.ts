import axios from 'axios';

import { config } from '@config';

export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    'x-api-key': '18109415-e13f-4ab9-b9fc-d3f5776087be',
  },
});
