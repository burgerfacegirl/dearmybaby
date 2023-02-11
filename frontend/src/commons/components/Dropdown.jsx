import { useState, useEffect } from 'react';
import { apiGetMemberFamilyList } from '../api/member';
import { useMember, useMemberAuth, useMemberReload } from '../MemberContext';

function Dropdown(props) {
  const [familyList, setFamilyList] = useState([]);
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();

  // 최초에 한번 회원정보를 최신화한다
  useEffect(() => {memberReload()}, []);
  // useEffect(() => { 
  //   auth((token) => apiGetMemberFamilyList(member.memberId , token).then((res) => {
  //     res.data.map((family) => {familyList.push(family.familyName) 
  //     setFamilyList([...familyList])})
  //   }))}, []
  // );

  useEffect(() => {
    if (member.familyIdList) {
      console.log(member.familyIdList)
      member.familyIdList.map((family) => {
      console.log(family)
      // familyList.push({'familyName': family.familyName, 'familyId': family.familyId})
      // setFamilyList([...familyList])}
    })
  }}, []);

  return (
    <div>
      <li
        onClick={() => {
          props.setSelectFamily(true);
        }}
      >
        가족
      </li>
      {familyList}

    </div>

  );
}

export default Dropdown;
