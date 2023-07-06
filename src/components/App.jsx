import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../style/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from './Sidebar';
import Report from '../page/Report';
import Navigation from './Navigation';
import Content from '../page/Content';
import Profile from '../page/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Sidebar >
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/content" element={<Content/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
