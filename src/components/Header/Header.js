import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
          <header>
                <div>title</div>
                <nav>
                      <Link to='/'>Home</Link>
                      <Link to='/Products'>Products</Link>
                      <Link to='/about'>About</Link>
                </nav>
          </header>
    );
};

export default Header;