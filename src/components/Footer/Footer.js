import React from 'react';
import './Footer.scss';
import GithubLogo from '../../media/github.png';

function Footer() {
  return (
    <footer>
      <nav class='navigation'>
        <a
          class='navigation__link'
          href='https://github.com/avi413/Autocomplete_backend'
        >
          <img src={GithubLogo} className='navigation__link-icon' alt='logo' />
          Backend repository
        </a>
        <a
          class='navigation__link'
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
