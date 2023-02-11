import { Link } from 'react-router-dom';
import path from '@/config/path';
import { useEffect, useState } from 'react';
// import './SelectPlace.css';

const SelectPlace = (props) => {
  const tripDate = props.planDate
  const [destination, setDestination] = useState('')
  const [trip, setTrip] = useState([...tripDate])

  // useEffect(()=>{
  //   setTrip({[...t]})
  // })

  console.log(destination)



  return (
    <div className="plan-frame" style={{ padding: '3vh', textAlign: 'center' }}>
      <h3>여행하실 지역을 선택해주세요</h3>
      <table>
        <tr>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '가평' }} style={{ textDecoration: 'none' }} >가평 양평</Link>
          </td>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '강릉' }} style={{ textDecoration: 'none' }}>강릉 속초</Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '경주' }} style={{ textDecoration: 'none' }}>경주</Link>
          </td>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '가평' }} style={{ textDecoration: 'none' }}>부산</Link>
          </td>
        </tr><tr>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '부산' }} style={{ textDecoration: 'none' }}>여수</Link>
          </td>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '인천' }} style={{ textDecoration: 'none' }}>인천</Link>
          </td>
        </tr><tr>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '전주' }} style={{ textDecoration: 'none' }}>전주</Link>
          </td>
          <td>
            <Link to={path.planFindCity}
              onClick={(e) => setDestination(e.target.innerHTML)}
              state={{ keyword: '제주' }} style={{ textDecoration: 'none' }}>제주</Link>
          </td>
        </tr>
      </table>

    </div>
  );
};
export default SelectPlace;
