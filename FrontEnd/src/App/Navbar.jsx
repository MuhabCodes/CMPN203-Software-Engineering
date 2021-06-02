import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarFooter.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
// import NavBarDropDown from './NavbarDropDown';

// component for the whole navigation bar
function NavBar() {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };
  const account = () => {
    history.push('/account');
  };
  return (
    <Navbar collapseOnSelect sticky="top" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand href="/">
        <img
          alt=""
          src="flickr.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        flickr
      </Navbar.Brand>

      <div className="icons">
        <a href="#home">
          <i className="fas fa-cloud-upload-alt" />
          {' '}
        </a>
        <a href="/Notification">
          <i className="fas fa-bell" />
          {' '}
        </a>
      </div>
      <Button className="button1" onClick={logout}>Logout</Button>
      <Button className="button1" onClick={account}>Account</Button>
    </Navbar>
  );
}

export default NavBar;
