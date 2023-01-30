import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import


const PlanForm = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Link to={"/plan/make"}></Link>
            <form action="#">
                <h2>그룹 선택</h2>
                <button>그룹1</button>
                <button>그룹2</button>
            </form>
            <Calendar onChange={setDate} value={date} />
        </div>
    )
};

export default PlanForm;
