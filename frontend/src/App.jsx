import '@/App.css';
import Home from '@/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkManager from '@/commons/components/LinkManager';
import Plan from '@/pages/plan/Plan';
import Record from '@/pages/record/Record';
import Album from '@/pages/album/Album';
import path from '@/config/path';

export default function App() {
  // const menuNavigate = useNa;
  return (
    <BrowserRouter>
      <div className="App">
        <LinkManager />

        <ul className="" style={{ display: 'none' }}>
          {/* <li onClick={}> 내 프로필</li> */}
          <li> 내그룹</li>
          <li> 장소 바구니</li>
          <li> 내 여행</li>
          <li> 공지사항</li>
          <li> 고객 센터</li>
        </ul>

        <p className="text-3xl font-bold underline"> 최상위 컴포넌트 헤더</p>
        <Routes>
          <Route path={path.home} element={<Home />} />
          {/* sidebar */}
          <Route path={path.plan} element={<Plan />} />
          <Route path={path.record} element={<Record />} />
          <Route path={path.album} element={<Album />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
