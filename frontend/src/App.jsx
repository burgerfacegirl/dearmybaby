import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import Home from '@/pages/home/Home';
import Plan from '@/pages/plan/Plan';
import Record from '@/pages/record/Record';
import Album from '@/pages/album/Album';
import path from '@/config/path';
import HeadBar from '@/commons/components/HeadBar';
import SideBar from '@/commons/components/SideBar';
// 동적 라우팅
const Notice = lazy(() => import('./commons/components/Notice'));
const MyGroups = lazy(() => import('./commons/components/MyGroups'));
const MyTravels = lazy(() => import('./commons/components/MyGroups'));
const ServiceCenter = lazy(() => import('./commons/components/ServiceCenter'));

import TravelBasket from './commons/components/TravelBasket';
import FindCity from './pages/plan/FindCity';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{}}>
        <HeadBar />
        <Routes>
          {/* SideBar */}
          <Route path={path.home} element={<Home />} />
          <Route path={path.plan} element={<Plan />} />
          <Route path={path.planFindCity} element={<FindCity />} />
          <Route path={path.record} element={<Record />} />
          <Route path={path.album} element={<Album />} />
          <Route path={path.sidebar} element={<SideBar />} />
          {/* 동적 라우팅  */}
          <Route path={path.notice} element={<Notice />} />
          <Route path={path.myGroups} element={<MyGroups />} />
          <Route path={path.myTravels} element={<MyTravels />} />
          <Route path={path.serviceCenter} element={<ServiceCenter />} />
          <Route path={path.travelBasket} element={<TravelBasket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
