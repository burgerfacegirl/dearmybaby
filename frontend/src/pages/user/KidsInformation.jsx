import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

const dummyChildFavor = [
  {
    // 음식, 관광지
    familyID: 1,
    childName: '김도현',
    childAge: 3,
    food: [],
    place: [],
    festival: [],
  },
];
const qNum = [...new Array(2)].map((_, i) => i + 1);
export default function KidsInformation() {
  const [food, setFood] = useState([]);
  const [place, setPlace] = useState([]);
  const navigate = useNavigate();
  let quizAnswer = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [pointer, setPointer] = useState(0);
  const [answer, setAnswer] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // 다음 문제로 가기
  function toNext() {
    quizAnswer[pointer] = false;
    quizAnswer[pointer + 1] = true;
    // console.log(quizAnswer);
    setAnswer(quizAnswer);
    setPointer(pointer + 1);
    // console.log('pointer', pointer, 'quizANswer', quizAnswer);
  }
  // 뒤로가기
  const goBack = () => {
    quizAnswer[pointer] = false;
    quizAnswer[pointer - 1] = true;
    setAnswer(quizAnswer);
    setPointer(pointer - 1);
    console.log(pointer);
  };
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEIwupfrAKsMRJP3yTVIdF-fq2e3N0D5YZA&usqp=CAU
  return (
    <div className="question">
      <button style={{ position: 'absolute' }} onClick={() => console.log(place, answer)}>
        Panic Button
      </button>
      <div className={answer[0] ? 'show' : 'noshow'} style={{ position: 'absolute', height: '100vh', width: '100vw' }}>
        <div style={{ marginBlock: '27%', padding: '15%' }}>
          <h2 style={{ fontSize: '2.4rem' }}> 바다 </h2>
        </div>

        <div className="answer-div" style={{ display: 'flex', width: '70%', justifyContent: 'space-between' }}>
          <button
            className="kidinfo-button"
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              toNext();
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button className="kidinfo-button" onClick={toNext}>
            싫어한다
          </button>
        </div>
        <div className="go-back">
          <button
            style={{ backgroundColor: 'white', color: 'blue', border: 'blue' }}
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로
          </button>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/originals/a1/2a/60/a12a603f00c65d286b936a323711fc5d.gif"
        style={{ height: '100%', width: '100%' }}
        alt="questionError"
      ></img>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      {/* ========================= */}
    </div>
  );
}
