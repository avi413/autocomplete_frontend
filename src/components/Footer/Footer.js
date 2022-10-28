import React from 'react';
import './Footer.scss';
import GithubLogo from '../../media/github.png';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='navigation'>
        <a
          className='navigation__link'
          href='https://github.com/avi413/Autocomplete_backend'
        >
          <img src={GithubLogo} className='navigation__link-icon' alt='logo' />
          Backend repository
        </a>
        <a
          className='navigation__link'
          href='https://github.com/avi413/autocomplete_frontend'
        >
          <img src={GithubLogo} className='navigation__link-icon' alt='logo' />
          Frontend repository
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
