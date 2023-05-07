import React from "react";
import {NavLink} from 'react-router-dom'
import './nav.scss'
import logo from ' ../images/sigma.png'

const Navigation = (props) => {
    return (
      <nav className="Navigation">
          <div className="nav-content">
            <div className="icon">
              <NavLink to="/posts"><img src={logo} alt="icon" /></NavLink>
            </div>
            <ul className="links">
              <li><NavLink to="/posts" className="link">Posts</NavLink></li>
              <li><NavLink to="/Newpost" className="link">Craete Post</NavLink></li>
            </ul>
          </div>
    </nav>
  );
  };
  


export default Navigation;
