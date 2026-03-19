import React from 'react';

const Navbar = () => {
  return (
    <nav className="fintech-navbar">
      <div className="logo">Fintech<span>.</span></div>
      <ul className="nav-menu">
        <li>Platform</li>
        <li>Company</li>
        <li>Industries</li>
        <li>Resources</li>
      </ul>
      <div className="nav-buttons">
        <button className="btn-signin">SIGN IN</button>
        <button className="btn-signup">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;