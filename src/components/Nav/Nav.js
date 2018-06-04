import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
        <a className="topnav a.active" href="/table">Input Table</a>

          
        </li>
        <li>
        <Link to="/home">
            User Home
          </Link>
        </li>
        <li>
          
        </li>
      
      </ul>
    </div>
  </div>
);

export default Nav;
