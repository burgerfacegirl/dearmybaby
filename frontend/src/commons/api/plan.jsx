import { getApiInstance } from './http';
const api = getApiInstance();

const dummyPlans = [
  {
    planId: 1,
    startDate: '2023-02-06',
    endDate: '2023-02-10',
    planDestination: 'Jeju',
    planPeriod: 3,
    familyId: 1,
  },
  {
    planId: 2,
    startDate: '2023-02-06',
    endDate: '2023-02-10',
    planDestination: 'Jeju',
    planPeriod: 3,
    familyId: 1,
  },
];

export async function apiGetPlans(groupId) {
  // const options = {
  //   url: '/${groupID}',
  //   method: 'GET',
  //   params: {
  //     groupID: 1,
  //   },
  // };

  // let response = null;
  // try {
  //   response = await api.get(`/group/${groupId}/plan`);
  // } catch (e) {
  //   console.log(e);
  //   // return null;
  //   throw Error('djdjf');
  // }
  // return response.data;

  return dummyPlans;
}
