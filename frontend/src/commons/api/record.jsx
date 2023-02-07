import { getApiInstance } from './http';

// 날짜별 여행 기록 전체 조회
const dummyRecords = [
  {
    recordId: 1,
    dayId: 1,
    recordFile: 'string',
    latitude: 'string',
    longitude: 'string',
    recordType: 0,
    fileUrl: 'string',
    recordDate: '2023-02-06T10:44:59.097Z',
  },
];

const api = getApiInstance();
export async function apiGetRecords() {
  let response = null;
  try {
    response = await api.post(`https://i8a206.p.ssafy.io/api/record`, {
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        multipartFile: 'string',
        recordDto: {
          dayId: 0,
          recordFile: 'string',
          recordText: 'string',
          latitude: 'string',
          longitude: 'string',
          recordType: 0,
        },
      }),
    });
  } catch (e) {
    console.log(e);
    // return null;
    throw Error('djdjf');
  }

  console.log(response);
  return response;
}
