import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

// Icon component for the dropdown toggle
const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      {/* SVG path for the icon */}
    </svg>
  );
};

// CloseIcon component for removing selected tags
const CloseIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      {/* SVG path for the close icon */}
    </svg>
  );
};

// Dropdown component
const Dropdown = ({
  placeHolder,
  options,
  isSearchable,
  onChange
}) => {
  // State variables
  const [showMenu, setShowMenu] = useState(false); // Controls dropdown visibility
  const [selectedValue, setSelectedValue] = useState(null); // Selected value
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const searchRef = useRef(); // Reference to the search input element
  const inputRef = useRef(); // Reference to the dropdown input element

  // useEffect to handle various side effects
  useEffect(() => {
    setSearchValue(""); // Reset search input value
    if (showMenu && searchRef.current) {
      searchRef.current.focus(); // Focus on search input when the menu is shown
    }
  }, [showMenu]);

  useEffect(() => {
    // Event listener to close the dropdown when clicking outside
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler); // Cleanup when component unmounts
    };
  }, []);

  // Toggle the dropdown menu on input click
  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  // Render the selected value or placeholder
  const getDisplay = () => {
    if (!selectedValue) {
      return placeHolder;
    }
    
    return selectedValue.label;
  };

  // Remove an option from the selected values
  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  // Handle tag removal when clicking the close icon
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  // Handle item click (select an option)
  const onItemClick = (option) => {
    let newValue;

    newValue = option;
    
    setSelectedValue(newValue);
    onChange(newValue);
  };

  // Check if an option is selected
  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  // Handle search input change
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // Filter options based on the search input
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  // Render the dropdown component
  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {isSearchable && (
            <div className="search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef} />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
