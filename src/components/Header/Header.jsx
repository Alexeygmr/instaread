import React from 'react';
import {ReactComponent as Logo} from '../../icons/instaread_logo_grey.svg'

const Header = () => {
  return (
    <header className="header container">
      <div className="header__logo-box">
        <a href={'/'}>
          <Logo/>
        </a>

      </div>


      <div className="header__navigation-box">
        <nav>
          <a className='link header__navigation-link' href='/discover'>
            Discover
          </a>
          <a className='link header__navigation-link' href='/search'>
            Search
          </a>
          <a className='link header__navigation-link' href='/try'>
            Try Instaread
          </a>
          <a className='link header__navigation-link' href='/login'>
            <span className={'login-item'}>
                 Login
            </span>


               &#x25BE;

          </a>
        </nav>

      </div>


    </header>
  );
};

export default Header;
