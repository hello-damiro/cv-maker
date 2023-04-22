import React from 'react';
import { useState } from 'react';
import EditButtons from './EditButtons';

function About({ about }) {
    const [editMode, setEditMode] = useState(false);
    const handleStatus = (status) => setEditMode(status);

    const [inputAbout, setInputAbout] = useState(about);
    const handleAboutChange = (e) => setInputAbout(e.currentTarget.value);

    return (
        <div className="about">
            <div className="content">
                <p>{inputAbout}</p>
            </div>
            <div className={`edit-inputs ${!editMode ? 'hidden' : ''}`}>
                <textarea
                    onChange={handleAboutChange}
                    className="input-about"
                    placeholder="Introduction here ..."
                    value={inputAbout}
                />
            </div>
            <EditButtons modeStatus={(status) => handleStatus(status)} />
        </div>
    );
}

export default About;
