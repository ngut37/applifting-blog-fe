import axios from 'axios';

import { config } from '@config';

export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    'x-api-key': 'a991b444-9d10-49d0-945d-5e86078b5d9c',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNjUwNzQzMTI4LCJleHAiOjE2NTA3NDY3Mjh9.uUqU1tJPXG6wgjNXkGeexTf1aIc-jYm2X3vrFxfkf0Y',
  },
});
