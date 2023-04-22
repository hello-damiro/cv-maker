import React from 'react';
import { useState } from 'react';
import EditButtons from './EditButtons';

function Website({ website }) {
    const [editMode, setEditMode] = useState(false);
    const handleStatus = (status) => setEditMode(status);

    const [inputWebsite, setInputWebsite] = useState(website);
    const handleWebsiteChange = (e) => setInputWebsite(e.currentTarget.value);

    return (
        <div className="website">
            <div className="content">
                <h3>{inputWebsite}</h3>
            </div>
            <div className={`edit-inputs ${!editMode ? 'hidden' : ''}`}>
                <input
                    type="text"
                    onChange={handleWebsiteChange}
                    className="input-website"
                    placeholder="www.website.com"
                    value={inputWebsite}
                />
            </div>
            <EditButtons modeStatus={(status) => handleStatus(status)} />
        </div>
    );
}

export default Website;
