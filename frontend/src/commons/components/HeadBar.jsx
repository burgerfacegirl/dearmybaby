import LinkManager from '@/commons/components/LinkManager';
import { useNavigate } from 'react-router-dom';

const HeadBar = () => {
  const HeadBarStyle = {
    textAlign: 'center',
  }

  const navigate = useNavigate();

  return <div>
    <div style={HeadBarStyle}>
      <button onClick={() => navigate(-1)}>뒤 </button>
      <LinkManager />
    </div>
  </div>
}
export default HeadBar;
