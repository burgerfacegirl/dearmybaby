import { useNavigate } from 'react-router-dom';

const SelectGroup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form action="#">
        <h2>함께 여행하실 그룹을 선택해주세요</h2>
        <button onClick={() => {navigate(`select-date`)}}>그룹1</button>
        <button onClick={() => {navigate(`select-date`)}}>그룹2</button>
        <button onClick={() => {navigate(`select-date`)}}>그룹2</button>
      </form>
    </div>
  );
};
export default SelectGroup;
