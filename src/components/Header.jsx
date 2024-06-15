import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo-rackext-svgrepo-com.svg'} alt="Logo" />
      </div>
      <nav className="nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#faqs">FAQs</a>
        <a href="#support">Support</a>
      </nav>
      <div className="user-menu">
        <button className="user-menu-button">Profile</button>
      </div>
    </header>
  );
};

export default Header;
