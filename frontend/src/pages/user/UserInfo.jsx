import { useMember, useMemberReload } from '@/commons/MemberContext';

/** API 설명용 */
import { useState } from 'react';
import { useMemberAuth } from '@/commons/MemberContext';
import { apiGetMember } from '@/commons/api/member';

export default function UserInfo() {
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();

  /** API 설명용 */
  const [testMember, setTestMember] = useState(null);

  return (
    <div>
      <h1>회원정보</h1>
      <button onClick={memberReload}>memberReload1</button>
      {!!member && (
        <div>
          <ul>
            <li>{member.memberName}</li>
            <li>{member.memberEmail}</li>
            <li>{member.memberId}</li>
            <li>{member.memberImg}</li>
          </ul>
          {/* <p>{JSON.stringify(member)}</p> */}
        </div>
      )}
      <hr></hr>
      <button onClick={() => auth((token) => apiGetMember(token)).then(({ data }) => setTestMember(data))}>
        memberReload2
      </button>
      {!!testMember && (
        <div>
          <ul>
            <li>{testMember.memberName}</li>
            <li>{testMember.memberEmail}</li>
            <li>{testMember.memberId}</li>
            <li>{testMember.memberImg}</li>
          </ul>
          {/* <p>{JSON.stringify(testMember)}</p> */}
        </div>
      )}
    </div>
  );
}
