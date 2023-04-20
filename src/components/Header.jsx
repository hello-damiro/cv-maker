import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderOptions from './HeaderOptions';

function Header(props) {
    return (
        <div className="header">
            <HeaderLogo />
            <HeaderOptions />
        </div>
    );
}

Header.propTypes = {};

export default Header;
