import React from 'react';
import Paper from '../components/shared/Paper';

function AboutPage() {
    return (
        <Paper>
            <div className="vertical-space" />
            <div className="abouts">
                <h1 className="abouts-h1">CV Maker V.1</h1>
                <p>The Odin Project basic ReactJS App</p>
                <a href="/">
                    <button className="abouts-btn">Back to CV Make App</button>
                </a>
            </div>
            <div className="vertical-space" />
        </Paper>
    );
}

export default AboutPage;
