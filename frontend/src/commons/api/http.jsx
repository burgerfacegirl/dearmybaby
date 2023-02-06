import axios from 'axios';

export function getApiInstance() {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return instance;
}
