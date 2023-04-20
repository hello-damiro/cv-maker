import React from 'react';

function HeaderOptions(props) {
    return (
        <div className="options">
            <div className="paper-sizes">A4</div>
            <div className="download">Download PDF</div>
            <div className="about">?</div>
        </div>
    );
}

HeaderOptions.propTypes = {};

export default HeaderOptions;
