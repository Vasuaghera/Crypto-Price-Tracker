import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()}, Crypto Price Taker - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
