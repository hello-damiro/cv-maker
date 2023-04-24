import React from 'react';
// import PropTypes from 'prop-types'

function HeaderLogo() {
    return (
        <div className="logo">
            <h2 className="odin">
                <a href="https://www.theodinproject.com/">Odin</a>
            </h2>
            <div className="odin-logo"></div>
            <h2 className="title">
                <a href="/cv-maker/">CV Maker</a>
            </h2>
        </div>
    );
}

HeaderLogo.propTypes = {};

export default HeaderLogo;
