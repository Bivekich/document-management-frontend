import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Approval from './views/Approval/Approval';
import Downloads from './views/Downloads/Downloads';
import Login from './views/Login/Login';
import MainMenu from './views/MainMenu/MainMenu';
import Statistics from './views/Statistics/Statistics';
import ProposeUpload from './views/ProposeUpload/ProposeUpload';
import DownloadFiles from './views/DownloadFiles/DownloadFiles';
import Orders from './views/Orders/Orders';
import Payments from './views/Payments/Payments';
import OfferDownload from './views/OfferDownload/OfferDownload';
import Registration from './views/Registration/Registration';
import UserProfile from './views/UserProfile/UserProfile';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/stats" element={<Statistics />} />
      <Route path="/propose-upload" element={<ProposeUpload />} />
      <Route path="/download-files" element={<DownloadFiles />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/" element={<MainMenu />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/approval" element={<Approval />} />
      <Route path="/login" element={<Login />} />
      <Route path="/offer-download" element={<OfferDownload />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  </Router>
);

export default AppRouter;
