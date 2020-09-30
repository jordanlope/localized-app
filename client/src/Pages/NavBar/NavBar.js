import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/localizedLogo.png'
import './NavBar.css';

class NavBar extends Component {
    render() {
      return (
        <>
          <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav className="Nav-Bar">
            <ul className="Nav-List">
              {/* <li>
                <Link to='/login'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/signup'>
                  Sign up
                </Link>
              </li> */}
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/addpost'>
                  Add Post
                </Link>
              </li>
            </ul>
          </nav>
        </>
      );
    }
}

export default NavBar;