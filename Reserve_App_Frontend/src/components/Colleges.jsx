import React from 'react';
// import "./Colleges.css";
import {Link} from "react-router-dom"; 

const Colleges = () =>{

    return (
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/berea-college'>Berea College</Link>
        </nav>
    );
};

export default Colleges;