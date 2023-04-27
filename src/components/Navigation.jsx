import React from "react";
import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/about" className="link">About</NavLink></li>
          <li><NavLink to="/test/id1" className='link'>test id1</NavLink></li>
          <li><NavLink to="/test/id2" className= "link">test id2</NavLink></li>
        </ul>
      </nav>
    );
  };
  


export default Navigation;