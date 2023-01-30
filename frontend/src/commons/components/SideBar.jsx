import { useNavigate } from 'react-router-dom';
import path from '@/config/path.jsx';

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sidebarParent" style={{ width: '40%' }}>
      <button
        onClick={() => {
          navigate(path.myGroups);
        }}
      >
        내 그룹
      </button>
      <button
        onClick={() => {
          navigate(path.travelBasket);
        }}
      >
        장소 바구니
      </button>
      <button
        onClick={() => {
          navigate(path.myTravels);
        }}
      >
        내 여행
      </button>
      <button
        onClick={() => {
          navigate(path.serviceCenter);
        }}
      >
        고객 센터
      </button>
      <button
        onClick={() => {
          navigate(path.notice);
        }}
      >
        공지사항
      </button>
    </div>
  );
}
