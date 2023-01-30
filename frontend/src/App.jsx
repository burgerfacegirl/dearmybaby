import '@/App.css';
import Home from '@/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LinkManager from '@/commons/components/LinkManager';
import Plan from '@/pages/plan/Plan';
import Record from '@/pages/record/Record';
import Album from '@/pages/album/Album';
import path from '@/config/path';
import SideBar from './commons/components/SideBar';
import Notice from './commons/components/Notice';
import MyGroups from './commons/components/MyGroups';
import MyTravels from './commons/components/MyTravels';
import ServiceCenter from './commons/components/ServiceCenter';
import TravelBasket from './commons/components/TravelBasket';

export default function App() {
  // const menuNavigate = useNa;
  return (
    <BrowserRouter>
      <div className="App">
        <LinkManager />


        <p className=""> 최상위 컴포넌트 헤더</p>
        <Routes>
          {/* SideBar */}
          <Route path={path.home} element={<Home />} />
          <Route path={path.plan} element={<Plan />} />
          <Route path={path.record} element={<Record />} />
          <Route path={path.album} element={<Album />} />
          <Route path={path.sidebar} element={<SideBar />}/>
          <Route path={path.notice} element={<Notice />}/>
          <Route path={path.mygroups} element={<MyGroups />}/>
          <Route path={path.mytravels} element={<MyTravels />}/>
          <Route path={path.servicecenter} element={<ServiceCenter />}/>
          <Route path={path.travelbasket} element={<TravelBasket />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
