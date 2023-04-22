import React from 'react';
import { useState } from 'react';
import EditButtons from './EditButtons';

function Person({ firstname, lastname, position }) {
    const [editMode, setEditMode] = useState(false);
    const handleStatus = (stats) => setEditMode(stats);

    const [inputFirstname, setInputFirstname] = useState(firstname);
    const [inputLastname, setInputLastname] = useState(lastname);
    const [inputPosition, setInputPosition] = useState(position);
    const handleFirstnameChange = (e) => setInputFirstname(e.currentTarget.value);
    const handleLastnameChange = (e) => setInputLastname(e.currentTarget.value);
    const handlePositionChange = (e) => setInputPosition(e.currentTarget.value);

    return (
        <div className="person">
            <div className="content">
                <h1 className="name">{inputFirstname}</h1>
                <h1 className="name">{inputLastname}</h1>
                <h2 className="position">{inputPosition}</h2>
            </div>
            <div className={`edit-inputs ${editMode ? null : 'hidden'}`}>
                <input
                    onChange={handleFirstnameChange}
                    className="input-firstname"
                    placeholder="Firstname"
                    value={inputFirstname}
                />
                <input
                    onChange={handleLastnameChange}
                    className="input-lastname"
                    placeholder="Lastname"
                    value={inputLastname}
                />
                <input
                    onChange={handlePositionChange}
                    className="input-position"
                    placeholder="Position"
                    value={inputPosition}
                />
            </div>
            <EditButtons modeStatus={(status) => handleStatus(status)} />
        </div>
    );
}

export default Person;
