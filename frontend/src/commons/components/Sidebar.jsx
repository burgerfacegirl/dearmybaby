import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebarParent" style={{ width: '40%' }}>
      <button
        onClick={() => {
          navigate('/mygroups');
        }}
      >
        내 그룹
      </button>
      <button
        onClick={() => {
          navigate('/travelbasket');
        }}
      >
        장소 바구니
      </button>
      <button
        onClick={() => {
          navigate('/mytravels');
        }}
      >
        내 여행
      </button>
      <button
        onClick={() => {
          navigate('/servicecenter');
        }}
      >
        고객 센터
      </button>
      <button
        onClick={() => {
          navigate('/notice');
        }}
      >
        공지사항
      </button>
    </div>
  );
}
