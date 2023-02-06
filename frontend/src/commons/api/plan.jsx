import { getApiInstance } from './http';
const api = getApiInstance();

const dummyPlans = [
  {
    planId: 1,
    planName: '제주여행1',
    startDate: '2023-02-06',
    endDate: '2023-02-10',
    planDestination: 'Jeju',
    planPeriod: 3,
    familyId: 1,
  },
  {
    planId: 2,
    planName: '제주여행2',
    startDate: '2023-02-06',
    endDate: '2023-02-10',
    planDestination: 'Jeju',
    planPeriod: 3,
    familyId: 1,
  },
  {
    planId: 2,
    planName: '제주여행3',
    startDate: '2023-02-06',
    endDate: '2023-02-10',
    planDestination: 'Jeju',
    planPeriod: 3,
    familyId: 1,
  },
];

export async function apiGetPlans() {
  // const options = {
  //   url: '/${groupID}',
  //   method: 'GET',
  //   params: {
  //     groupID: 1,
  //   },
  // };

  let response = null;
  try {
    response = await api.get(`/plan/0`);
  } catch (e) {
    console.log(e);
    // return null;
    throw Error('djdjf');
  }

  console.log(response);
  return response;
}
