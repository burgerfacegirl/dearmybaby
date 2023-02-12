import { Link, useNavigate } from 'react-router-dom';
import path from '@/config/path';
import { useEffect, useState } from 'react';
// import './SelectPlace.css';

const SelectPlace = (props) => {
  const navigate = useNavigate();

  // 첫 검색어 중심 좌표 데이터

  const tripDate = props.planDate
  const [destination, setDestination] = useState('')
  const [trip, setTrip] = useState([...tripDate])
  const [initLoc, setInitLoc] = useState([{
    keyword: '',
    lat: 38,
    lng: 128
  }
  ])
  // e.target.innerHTML
  const setPlanInfo = (e, test) => {
    console.log(e, test);
    setDestination(e)
    setInitLoc(test)
  }

  const createPlan = () => {

  }

  return (
    <div className="plan__cityframe" style={{ padding: '3vh', textAlign: 'center' }}>
      <h3>여행하실 지역을 선택해주세요</h3>
      <table className='city__table'>
        <tr>
          <td>
            <button
              onClick={(e) => setPlanInfo(e.target.innerHTML, { keyword: '가평', lat: 37.794925, lng: 127.43003 })}
              style={{ textDecoration: 'none' }}>
              가평 양평
            </button>
          </td>
          <td

            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '강릉', lat: 37.82170338925371, lng: 128.81883505712997 }} style={{ textDecoration: 'none' }}>
            강릉 속초
          </td>
        </tr>
        <tr>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '경주', lat: 35.84406257, lng: 129.3122708 }} style={{ textDecoration: 'none' }}>
            경주
          </td>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '부산', lat: 35.16452868, lng: 129.1265930 }} style={{ textDecoration: 'none' }}>
            부산
          </td>
        </tr><tr>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '여수', lat: 37.566689049201976, lng: 126.9786296593204 }} style={{ textDecoration: 'none' }}>
            여수
          </td>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '인천', lat: 37.49330981561231, lng: 126.6857071575943 }} style={{ textDecoration: 'none' }}>
            인천
          </td>
        </tr><tr>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '전주', lat: 35.83400122960501, lng: 127.11543703651175 }} style={{ textDecoration: 'none' }}>
            전주
          </td>
          <td
            onClick={(e) => setDestination(e.target.innerHTML)}
            state={{ keyword: '제주', lat: 33.35648516254793, lng: 126.46454584465897 }} style={{ textDecoration: 'none' }}>
            제주
          </td>
        </tr>
      </table>
      <button>
        <Link
          to={path.planFindCity}
          onClick={() => {
            console.log('???????????', initLoc);
            navigate('/plan/find-city');
            createPlan(); //family-id, plan-id,
          }}
          state={{ keyword: initLoc.keyword, lat: initLoc.lat, lng: initLoc.lng }}
        >
          계획 생성
        </Link>
      </button>
    </div>
  );
};
export default SelectPlace;
