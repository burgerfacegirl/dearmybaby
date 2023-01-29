import  {Link} from 'react-router-dom'
const Header = () => {
  return <>
    <Link to={"/"}>Home | </Link>
    <Link to={"/sidebar"}> Side Bar</Link>
  </>
}

export default Header