import { Outlet } from 'react-router-dom';
import './Album.css';
export default function Album() {
  return (
    <div id="album">
      <Outlet></Outlet>
    </div>
  );
}
