import { useState, useEffect } from 'react';
import { apiGetBabyList } from '../api/baby';
import { apiGetMemberFamilyList } from '../api/member';
import { useMember, useMemberAuth, useMemberReload } from '../MemberContext';

function Dropdown(props) {
  const {setSelectFamily, setFamilyName} = props;
  const [familyList, setFamilyList] = useState([]);
  const member = useMember();
  const memberReload = useMemberReload();
  const auth = useMemberAuth();

  // 최초에 한번 회원정보를 최신화한다
  useEffect(() => {
    memberReload();
  }, []);

  const setLocalStorageFamily = (familyId, familyName) => {
    window.localStorage.setItem('familyId', familyId);
    window.localStorage.setItem('familyName', familyName);
  };


  return (
    <div>
      {member
        ? member.familyIdList.map((family) => {
            return (
              <button
                onClick={() => {
                  setLocalStorageFamily(family.familyId, family.familyName);
                  // props.setSelectFamily(family.familyId);
                  setSelectFamily(family.familyId);
                  setFamilyName(family.familyName);
                  apiGetBabyList(family.familyId).then(() => {
                    (res) => {
                      props.setBabyName(res.data[0].babyName);
                    };
                  });
                }}
              >
                {family.familyName}
              </button>
            );
          })
        : null}
    </div>
  );
}

export default Dropdown;
