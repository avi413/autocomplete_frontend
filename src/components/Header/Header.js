import React from 'react';
import './Header.scss';
import Logo from '../../media/deloitte.svg';

export default function Header() {
  return (
    <div className='header'>
      <img src={Logo} className='header__logo' alt='logo' />
    </div>
  );
}
