import LinkManager from '@/commons/components/LinkManager';
import { useNavigate } from 'react-router-dom';

const HeadBar = () => {
  const HeadBarStyle = {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
  };
  const SideButton = {};
  const navigate = useNavigate();
  return (
    <div style={HeadBarStyle}>
      <div>
        <button onClick={() => navigate(-1)}>뒤 </button>
        <LinkManager />
      </div>
      <div>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        <button style={SideButton}>=</button>
      </div>
    </div>
  );
};
export default HeadBar;
