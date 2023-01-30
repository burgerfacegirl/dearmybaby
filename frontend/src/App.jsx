import '@/App.css';
import Home from '@/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkManager from '@/commons/components/LinkManager';
import Plan from '@/pages/plan/Plan';
import Record from '@/pages/record/Record';
import Album from '@/pages/album/Album';

function App() {
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
          <Route path="/:" element={<Home />} />
          {/* sidebar */}
          <Route path="/record" element={<Record />} />
          <Route path="/album" element={<Album />} />
          <Route path="/plan/Plan" element={<Plan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
