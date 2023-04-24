import React from 'react';
import Paper from './shared/Paper';
import CVHeader from './CVHeader';
import CVMain from './CVMain';

function CV() {
    return (
        <Paper>
            <div className="vertical-space"></div>
            <CVHeader />
            <CVMain />
            <div className="vertical-space"></div>
        </Paper>
    );
}

CV.propTypes = {};

export default CV;
