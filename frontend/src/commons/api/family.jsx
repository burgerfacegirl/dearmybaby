import { getApiInstance } from './http';
import axios from 'axios';

const api = getApiInstance();

export async function apiCreateFamily() {
  await axios({
    method: 'POST',
    url: 'https://i8a206.p.ssafy.io/api/family/new',
    data: {
      familyName: 'family2',
      memberId: 'ssafy',
    },
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
}

