import { Link } from 'react-router-dom';
import path from '@/config/path';

export default function LinkManager() {
  return (
    <>
      <Link to={path.home}>Home | </Link>
      <Link to={path.record}> record |</Link>
      <Link to={path.album}> album |</Link>
      <Link to={path.plan}> plan |</Link>
    </>
  );
}
