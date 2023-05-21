import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
          <header>
                <div>title</div>
                <menu>
                      <Link className='' to='/'>Home</Link>
                      <Link className='' to='/products'>
                            products
                      </Link>
                      <Link className='' to='/AddNewReview'>
                            Add A Review
                      </Link>
                      <Link className='' to='/Add'>
                            Add A Review
                      </Link>
                </menu>
          </header>
    );
};

export default Header;