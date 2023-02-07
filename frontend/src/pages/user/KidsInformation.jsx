import { ClassNames } from '@emotion/react';
import { useEffect, useState } from 'react';
import './KidsInformation.css';
import { useNavigate } from 'react-router-dom';


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

export default function KidsInformation() {
  const [food, setFood] = useState([]);
  const [place, setPlace] = useState([]);
  const [festival, setFestival] = useState([]);

  const [quizPointer, setQuizPointer] = useState(0)
  let quizAnswer = [true, false, false, false, false, false, false, false, false, false]
  const [answer, setAnswer] = useState(quizAnswer)

  // 다음 문제로 가기
  function toNext() {
    setAnswer([...quizAnswer,
    quizAnswer[quizPointer] = false,
    quizAnswer[quizPointer + 1] = true,]
    )
    console.log('???????', quizPointer, answer)
    setQuizPointer(quizPointer + 1)
  }
  // 뒤로가기
  const goBack = () => {
    console.log('???????', quizPointer, answer)

    setAnswer(
      answer[quizPointer] = false,
      answer[quizPointer - 1] = true,
    )
    setQuizPointer(quizPointer - 1)

  }
  useEffect(() => {
    console.log('effect', answer)
    console.log('effect pointer', quizPointer)
    console.log('effect saved data', place)

  }, [answer])
  return (
    <div className='question'>
      {/* className={answer[0] ? 'show' : 'noshow'} */}
      <div >
        <h2>당신의 아이에 대해 답해주세요</h2>
        <img src='/assets/sea.png' style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}></img>
        <div>
          <button style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('sea')) {
                setPlace([...place, 'sea']);
              }
              // 다음 질문으로 가는 함수
              toNext()
            }}
          >
            좋아한다
          </button>
          {/* // 다음 질문로 넘어가는 함수 */}
          <button onClick={toNext}>
            싫어한다
          </button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>
        </div>
      </div>
      <div className={answer[1] ? 'show' : 'noshow'} >
        <h2>두번째 질문</h2>
        <img src='/assets/sea.png' style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}></img>
        <div>
          <button style={{ margin: '10px' }}
            onClick={() => {
              if (!place.includes('mountain')) {
                setPlace(place.push('mountain'));
              }
            }}
          >
            좋아한다
          </button>
          <button
          // 다음 질문로 넘어가는 함수
          >
            싫어한다
          </button>
          <div>
            <button onClick={goBack}>뒤로</button>
          </div>

        </div>
      </div>
    </div>
  );
}
