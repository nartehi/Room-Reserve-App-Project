import React, { useState } from 'react';

const Colleges = ({ collegesData }) => {
  // State to keep track of the selected college
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Function to handle selecting a college
  const handleSelectCollege = (college) => {
    setSelectedCollege(college);
  };

  return (
    <div>
      <h2>List of Colleges</h2>
      <ul>
        {collegesData.map((college) => (
          <li
            key={college.id}
            // Handle click event to select the college
            onClick={() => handleSelectCollege(college)}
            // Apply CSS class to highlight selected college
            className={selectedCollege === college ? 'selected' : ''}
          >
            {college.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colleges;
