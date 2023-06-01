import React from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import './nav.scss'
import logo from '../images/sigma.png'
import { signoutUser } from "./actions/actions";
import { useDispatch } from "react-redux";

const Navigation = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dingOut = signoutUser(navigate)
    return (
      <nav className="Navigation">
          <div className="nav-content">
            <div className="icon">
              <NavLink to="/posts"><img src={logo} alt="icon" /></NavLink>
            </div>
            <ul className="links">
              <li><NavLink to="/posts" className="link">Posts</NavLink></li>
              <li><NavLink to="/Newpost" className="link">Craete Post</NavLink></li>
              <button onClick={()=>{dingOut(dispatch)}}>sign out</button>
            </ul>
          </div>
    </nav>
  );
  };
  


export default Navigation;
