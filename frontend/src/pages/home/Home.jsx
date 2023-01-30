import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="userplan" >
        <h3>계획 짜기</h3>

        <ul className="" style={{ display: 'none' }}>
          {/* <li onClick={}> 내 프로필</li> */}
          <li> 내그룹</li>
          <li> 장소 바구니</li>
          <li> 내 여행</li>
          <li> 공지사항</li>
          <li> 고객 센터</li>
        </ul>
        <button
          onClick={() => {
            navigate('/plan');
          }}
        >
          여행 계획 추가하기
        </button>
      </div>
      <div className="recommandCard">
        <p> 아이 관심사 기반 여행 도시 추천</p>
        <div >
          {/* <a href="#"> 이 도시 관련 여행지 | </a>
          <a href="#"> 이 도시 관련 여행지 | </a>
          <a href="#"> 이 도시 관련 여행지 | </a> */}
        </div>
      </div>
      <div className="recomandCityCard">
        <p className="read-the-docs">아이가 좋아하는 여행 추천지 리스트 들어가는곳</p>
      </div>
    </div>
  );
}
