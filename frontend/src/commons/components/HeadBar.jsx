import LinkManager from '@/commons/components/LinkManager';
import path from '@/config/path';
import { useNavigate, Link } from 'react-router-dom';

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
        <Link to={path.sidebar}><button style={SideButton}>=</button></Link>
      </div>
    </div>
  );
};
export default HeadBar;
