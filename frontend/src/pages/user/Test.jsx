import { useState } from 'react';
import { apiGetFamily } from '@/commons/api/family';

export default function Test() {
  const [familyInfo, setFamilyInfo] = useState();
  const [familyInvitationCode, setFamilyInvitationCode] = useState(0);
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          apiGetFamily(2).then(({ data }) => {
            setFamilyInfo(data);
            setFamilyInvitationCode(data.invitation);
          });
        }}
      >
        Panic Button
      </button>
      {!!familyInfo && JSON.stringify(familyInfo)}
      {!!familyInfo && familyInvitationCode}
    </div>
  );
}
