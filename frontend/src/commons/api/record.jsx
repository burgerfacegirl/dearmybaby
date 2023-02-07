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


export async function apiGetRecords() {
  return {
    multipartFile: 'string',
    recordDto: {
      dayId: 0,
      recordFile: 'string',
      recordText: 'string',
      latitude: 'string',
      longitude: 'string',
      recordType: 0,
    },
  };
}
