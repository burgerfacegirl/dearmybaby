import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState } from 'react';

const SelectDate = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  function saveTravelDates(e) {
    e.preventDefault();
    // console.log('Start Date:', state[0].startDate);
    // console.log('End Date : ', state[0].endDate);
    localStorage.setItem('travelDates', JSON.stringify(state));
  }

  function checkTravelDates(e) {
    e.preventDefault();
    // console.log(new Date());
    // if (new Date() === localStorage.getItem('travelDates')) {
    //   console.log(localStorage.getItem('travelDates'));
    // }
  }

  return (
    <div>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <form onSubmit={saveTravelDates}>
        <button>날짜 저장하기</button>
      </form>
      <div>test : {state[0].startDate.toString()}</div>
      <div>test : {JSON.stringify(state)}</div>

      <form onSubmit={checkTravelDates}>
        <button>날짜 체크하기</button>
      </form>
    </div>
  );
};
export default SelectDate;
