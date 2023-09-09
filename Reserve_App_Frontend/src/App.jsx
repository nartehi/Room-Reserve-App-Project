import React from 'react';
import './App.css';
// Import the Dropdown component from the "./Dropdown" file.
import Dropdown from "./components/dropdown";

function App() {
  const options = [    
    { value: "berea college", label: "Berea College" },
    { value: "yale", label: "Yale" },
    { value: "harvard", label: "Harvard" },
    { value: "duke", label: "Duke" },
      ];

  return (
    <div className="app-container">
      <div className='app-background'></div>
      <h1 className="app-title">Reserve a Study Space</h1>
      <h2 className="app-subtitle">🌟 Welcome to the Reserve Room App! 🌟</h2>
      <p className="app-description">
        Explore and select available study rooms at your college.
      </p>
      <div className="app-dropdown">
      {/* Render the Dropdown component with specific props */}
      <Dropdown
        isSearchable // Allow searching for options
        placeHolder="Select College.." // Displayed when no option is selected
        options={options} // Pass the defined options to the Dropdown
        onChange={(value) => console.log(value)} // Handle the change event and log the selected value(s)
      />
      </div>
    </div>
  );
}



export default App;
