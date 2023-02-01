import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Place from './Place';
import Record from '../record';

export default function Home() {
  const [isStarted, setStarted] = useState(false);
  const [isToday, checkDate] = useState(false);
  const navigate = useNavigate();
  const travelDates = JSON.parse(localStorage.getItem('travelDates'));

  console.log(localStorage.getItem('isToday'));
  // D-day고 여행 시작 버튼 눌렀으면 redirect 시킴
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('isToday')) ? navigate(`/record`) : <></>;
  // }, []);

  // D-day - 두 날짜가 같은 날짜인지 확인하는 함수
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  useEffect(() => {
    if (travelDates != null && isSameDate(new Date(), new Date(travelDates[0].startDate))) {
      checkDate(true);
    }
  }, []);

  // console.log(isSameDate(new Date(), new Date(travelDates[0].startDate)));
  return (
    <div>
      <div className="userplan">
        <h3>계획 짜기</h3>
        <button
          onClick={() => {
            navigate('/plan');
          }}
        >
          여행 계획 추가하기
        </button>
      </div>
      <hr />

      <h3>어린이와 겨울에 가기 좋은 여행지</h3>
      <Place />

      <h3>N세 어린이를 위한 추천 여행지</h3>
      <Place />

      {isToday ? (
        <button
          onClick={() => {
            setStarted(true);
            localStorage.setItem('isToday', JSON.stringify(isStarted));
          }}
        >
          여행 시작
        </button>
      ) : (
        <Record />
      )}
    </div>
  );
}
