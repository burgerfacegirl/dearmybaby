import { useParams } from 'react-router-dom';
import PlanMap from './PlanMap';

export default function FindCity() {
  // url 경로에서 계획의 id를 얻는다
  const { planId } = useParams();

  return (
    <div>
      <PlanMap />
    </div>
  );
}
