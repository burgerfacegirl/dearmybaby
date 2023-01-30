import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const PlanForm = () => {
  const [date, setDate] = useState(new Date());
  const findCity = useNavigate();
  function searchCity() {
    findCity('/plan/findcity');
  }

  return (
    <div>
      <div>
        <form action="#">
          <h2>그룹 선택</h2>
          <button>그룹1</button>
          <button>그룹2</button>
        </form>
      </div>
      <div>
        <h2>여행하실 날짜를 선택해주세요</h2>
        <Calendar onChange={setDate} value={date} />
        <div>{moment(date).format('YYYY년 MM월 DD일')}</div>
      </div>
      {/* <Calendar onChange={changeDate} value={date} /> */}
      <div>
        <h2>여행하실 지역을 선택해주세요</h2>
        <form action="#" className="regionButtons">
          <button>부산</button>
          <button>제주</button>
          <button>인천</button>
          <button>대구</button>
          <button>울산</button>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;
