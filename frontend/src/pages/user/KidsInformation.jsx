import { useState } from 'react';
import './KidsInformation.css';
const dummyChildFavor = [
  {
    // 음식, 관광지
    familyID: 1,
    childName: '김도현',
    childAge: 3,
    food: [],
    place: [],
  },
];

export default function KidsInformation() {
  const [food, setFood] = useState(dummyChildFavor[0].food);

  return (
    <div className='question'>
      <h2>당신의 아이에 대해 답해주세요</h2>
      <img src='/assets/sea.png' style={{ height: '130px', width: '130px', borderRadius: '20%', boxShadow: '0px 2px 2px 3' }}></img>
      <div>
        <button style={{margin: '10px'}}
          onClick={() => {
            setFood(food.push('햄버거'));
            console.log(food);
          }}
        >
          좋아한다
        </button>
        <button
          onClick={() => {
            setFood(food.push('햄버거'));
            console.log(food);
          }}
        >
          싫어한다
        </button>
        <div>{food.length}</div>

      </div>
      
    </div>
  );
}
