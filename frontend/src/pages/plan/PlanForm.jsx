import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment/moment';

const PlanForm = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <form action="#">
        <h2>그룹 선택</h2>
        <button>그룹1</button>
        <button>그룹2</button>
      </form>
      <div>
        <Calendar onChange={setDate} value={date} />
        <div>{moment(date).format('YYYY년 MM월 DD일')}</div>
      </div>
    </div>
  );
};

export default PlanForm;
