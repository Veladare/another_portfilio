import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
          <Link to = "/videos"><button className="btn">Video</button> </Link> 
          <Link to = "/pictures"><button className="btn">Pictures</button> </Link> 
          <Link to = "/"><button className="btn">Home</button> </Link> 
      </div>
    );
  };

export default Header;