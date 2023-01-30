import  {Link} from 'react-router-dom'

const RouteManager = () => {
  return <>
    <Link to={"/"}>Home | </Link>
    <Link to={"/sidebar"}> Side Bar</Link>
  </>
}

export default RouteManager;
