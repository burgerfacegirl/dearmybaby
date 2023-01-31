import { Link } from 'react-router-dom';
import path from '@/config/path';

const LinkManager = () => {
  return (
    <>
      <Link to={path.home}>Home | </Link>
      <Link to={path.plan}> plan |</Link>
      <Link to={path.record}> record |</Link>
      <Link to={path.album}> album |</Link>
    </>
  );
};

export default LinkManager;
