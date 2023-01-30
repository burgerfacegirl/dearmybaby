import '@/App.css';
import Home from '@/pages/home/Home.jsx';
import Sidebar from './commons/components/Sidebar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import RouteManager from './commons/components/RouteManager';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouteManager />
        <p className="text-3xl font-bold underline"> 최상위 컴포넌트 헤더</p>
        <Routes>
          <Route path='/' element = {<Home />}/>
          {/* sidebar */}
          <Route path='/sidebar' element={<Sidebar />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
