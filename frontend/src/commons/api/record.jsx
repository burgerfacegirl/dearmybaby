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
