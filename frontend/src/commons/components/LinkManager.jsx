import { Link } from 'react-router-dom';

const LinkManager = () => {
  return (
    <>
      <Link to={'/'}>Home | </Link>
      <Link to={'/record'}> record |</Link>
      <Link to={'/album'}> album |</Link>

      <Link to={'/plan/Plan'}> plan |</Link>
    </>
  );
};

export default LinkManager;
