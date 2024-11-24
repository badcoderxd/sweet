// components/Header.js

import React from 'react';
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* You can replace the 'src' with the path to your logo */}
       <Icon icon="ooui:code" width="1.2rem" height="1.2rem"  style={{color: "#46a62b", transform:"translate(-4px,3.5px)"}}/><span style={{fontWeight:"bold"}}>Coding Treat</span> 
      </div>
    </header>
  );
};

export default Header;
