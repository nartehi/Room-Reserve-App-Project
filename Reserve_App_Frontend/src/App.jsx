import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/home';
import {
  BereaCollege,
  YaleCollege,
  HarvardCollege,
  DukeCollege,
  KentuckyCollege,
  AccraCollege,
  SanDiegoCollege,
  DallasCollege,
} from './components/Pages/Colleges'; // Import the college components

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berea-college" element={<BereaCollege />} />
        <Route path="/yale" element={<YaleCollege />} />
        <Route path="/harvard" element={<HarvardCollege />} />
        <Route path="/duke" element={<DukeCollege />} />
        <Route path="/kentucky" element={<KentuckyCollege />} />
        <Route path="/accra" element={<AccraCollege />} />
        <Route path="/san-diego" element={<SanDiegoCollege />} />
        <Route path="/dallas" element={<DallasCollege />} />
      </Routes>
    </>
  );
};

export default App;
