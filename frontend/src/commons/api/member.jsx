import { getApiInstance } from './http';
const api = getApiInstance();

export async function apiCreateMember(member, imgFile) {
  if (member != null && imgFile != null) {
    const formData = new FormData();
    formData.append(
      'memberDto',
      new Blob([JSON.stringify(member)], {
        type: 'application/json',
      }),
    );
    formData.append('multipartFile', imgFile);

    const response = api.post(`/member`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  }
  throw new Error('apiCreateMember : member, imgFile must be provided');
}

export async function apiGetMemberToken() {
  // TODO
  return 'dummy-access-token';
}

export async function apiGetMember(memberId, accessToken) {
  if (memberId != null && accessToken != null) {
    // TODO : use accessToken
    const response = api.get(`/member/detail/${memberId}`);
    return response;
  }
  throw new Error('apiGetMember : memberId, accessToken must be provided');
}

export async function apiCheckMember(memberId) {
  if (memberId != null) {
    const response = api.get(`/member/check/${memberId}`);
    return response;
  }
  throw new Error('apiCheckMember : memberId must be provided');
}

export async function apiUpdateMember(member, accessToken) {
  if (member != null && accessToken != null) {
    // TODO : use accessToken
    const response = api.put(`/member`, member);
    return response;
  }
  throw new Error('apiUpdateMember : memberId must be provided');
}

export async function apiDeleteMember(memberId, accessToken) {
  if (memberId != null && accessToken != null) {
    // TODO : use accessToken
    const response = api.delete(`/member/${memberId}`);
    return response;
  }
  throw new Error('apiDeleteMember : memberId, accessToken must be provided');
}
