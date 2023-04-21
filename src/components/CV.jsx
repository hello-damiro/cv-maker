import React from 'react';
import Paper from './shared/Paper';
import CVHeader from './CVHeader';
import CVMain from './CVMain';

function CV(props) {
    return (
        <Paper>
            <CVHeader />
            <CVMain />
        </Paper>
    );
}

CV.propTypes = {};

export default CV;
