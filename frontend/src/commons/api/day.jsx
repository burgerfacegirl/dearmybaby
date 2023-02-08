import { getApiInstance } from './http';
const api = getApiInstance();

// 여행 계획 생성
export async function apiCreateDay(data) {
  data = {
    dayId: 0,
    dayNumber: 1,
    planId: 13,
    places: [
      {
        placeOrder: 0,
        placeName: 'jeju',
        placeLatitude: '22.112',
        placeLongitude: '1',
        placeAddress: 'dddd',
        dayId: 0,
      },
    ],
  };

  if (data != null) {
    const response = await api.post(`/day`, data);
    console.log(response);
    return response;
  }
  throw new Error('apiCreatePlan : familyId must be provided');
}
