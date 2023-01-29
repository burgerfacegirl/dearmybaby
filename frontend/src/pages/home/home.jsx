import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="userplan">
        <h3>계획 짜기</h3>

        <button> 여행 계획 추가하기 </button>
      </div>
      <div className="reccommandCard">
        <p> 아이 관심사 기반 여행 도시 추천</p>
        <div className="reccomandCityCard">
          <a href=""> 이 도시 관련 여행지 | </a>
          <a href=""> 이 도시 관련 여행지 | </a>
          <a href=""> 이 도시 관련 여행지 | </a>
        </div>
      </div>
      <div>
      <p className="read-the-docs">아이가 좋아하는 여행 추천지 리스트 들어가는곳</p>

      </div>
    </div>
  );
}

export default Home;
