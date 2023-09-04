import React from 'react';
import './App.css';
import colleges from './Components/colleges.jsx';

function App() {
  const listcolleges = ['Berea College', 'UK', 'EKU', 'WKU', 'UofL', 'Morehead State', 'Murray State', 'Northern Kentucky', 'Western Kentucky', 'Eastern Kentucky', 'Transylvania', 'Centre College', 'Bellarmine', 'Georgetown College', 'Thomas More', 'Spalding', 'Asbury', 'Campbellsville', 'Union College', 'Kentucky State', 'Alice Lloyd', 'Brescia', 'Kentucky Wesleyan', 'Midway', 'Pikeville', 'St. Catharine', 'Lindsey Wilson', 'Kentucky Christian', 'Simmons College', 'Spencerian College', 'Sullivan University', 'Daymar College', 'Galen College of Nursing', 'ATA College', 'Brown Mackie College', 'Strayer University', 'Sullivan College of Technology and Design', 'National College', 'Southcentral Kentucky Community and Technical College', 'Henderson Community College', 'Jefferson Community and Technical College', 'Madisonville Community College', 'Owensboro Community and Technical College', 'Somerset Community College', 'West Kentucky Community and Technical College'];
  return (
    <div className="App">
      <h1>Colleges List</h1>
      <colleges colleges={listcolleges} />
    
    <div className="app-container">
      <div className='app-background'></div>
      <h1 className="app-title">Reserve a Space</h1>
      <h2 className="app-subtitle">🌟 Welcome to the Reserve Room App! 🌟</h2>
      <p className="app-description">
        Explore and select available study rooms at your college.
      </p>
    </div>
    </div>
  );
}

export default App;


