import React from 'react';
import './App.css';
// Import the Dropdown component from the "./Dropdown" file.
import Dropdown from "./components/dropdown";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BereaCollege from './components/Pages/berea-college';


function App() {
  const options = [    
    { value: "berea-college", label: "Berea College" },
    // { value: "yale", label: "Yale" },
    // { value: "harvard", label: "Harvard" },
    // { value: "duke", label: "Duke" },
    // { value: "duke", label: "Kentucky" },
    // { value: "duke", label: "Accra" },
    // { value: "duke", label: "San Diego" },
    // { value: "duke", label: "Dallas" },
    
      ];

      const handleDropdownChange = (selectedOption) => {
        if (selectedOption) {
          window.location.href = selectedOption.value;
        }
      };

  return (
    <Router>
    <div className="app-container">
      <div className='app-background'></div>
      <h1 className="app-title">Reserve a Room</h1>
    
      <p className="app-description">
        Colleges / Universities
      </p>
      <div className="app-dropdown">
      {/* Render the Dropdown component with specific props */}
      <Dropdown
        isSearchable // Allow searching for options
        placeHolder="Select College.." // Displayed when no option is selected
        options={options} // Pass the defined options to the Dropdown
        onChange={handleDropdownChange} //Call handleDropdownChange when an option is selected
      />
      </div>
      <Routes>
          <Route path='/berea-college' element={<BereaCollege/>} />
        </Routes>
    </div>
  </Router>
  );
}



export default App;
