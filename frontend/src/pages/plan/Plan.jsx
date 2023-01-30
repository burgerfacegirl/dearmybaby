import PlanForm from './PlanForm';
import { Routes, Route, useNavigate } from 'react-router-dom';
export default function Plan() {
  const findCity = useNavigate();
  function searchCity() {
    findCity('/plan/FindCity');
  }
  return (
    <div>
      <PlanForm />

    </div>
  );
}
