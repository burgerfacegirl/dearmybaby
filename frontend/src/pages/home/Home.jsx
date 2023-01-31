import { useNavigate } from 'react-router-dom';
import './Home.css';
import Place from './Place';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="userplan">
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

      <h3>어린이와 겨울에 가기 좋은 여행지</h3>
      <Place />

      <h3>N세 어린이를 위한 추천 여행지</h3>
      <Place />
    </div>
  );
}
