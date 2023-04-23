import React from 'react';
import { useState } from 'react';
import EditButtons from './EditButtons';

function Section({ index, title, institution, dates, details, deleteThis }) {
    const [editMode, setEditMode] = useState(false);
    const handleStatus = (status) => setEditMode(status);

    const [inputTitle, setInputTitle] = useState(title);
    const [inputInstitution, setInputInstitution] = useState(institution);
    const [inputDates, setInputDates] = useState(dates);
    const [inputDetails, setInputDetails] = useState(details);
    const handleTitleChange = (e) => setInputTitle(e.currentTarget.value);
    const handleInstitutionChange = (e) => setInputInstitution(e.currentTarget.value);
    const handleDatesChange = (e) => setInputDates(e.currentTarget.value);
    const handleDetailsChange = (e) => setInputDetails(e.currentTarget.value);

    return (
        <div className="section">
            <div className="content">
                <h3 className="title">{inputTitle}</h3>
                <div className="single-line">
                    <h4 className="institution">{inputInstitution} /</h4>
                    <h4 className="dates">{inputDates}</h4>
                </div>
                <p className="details">{inputDetails}</p>
            </div>
            <div className={`edit-inputs ${editMode ? null : 'hidden'}`}>
                <input
                    type="text"
                    onChange={handleTitleChange}
                    className="input-title"
                    placeholder="Title"
                    value={inputTitle}
                />
                <div className="single-line">
                    <input
                        type="text"
                        onChange={handleInstitutionChange}
                        className="input-institution"
                        placeholder="Institution"
                        value={inputInstitution}
                    />
                    <input
                        type="text"
                        onChange={handleDatesChange}
                        className="input-dates"
                        placeholder="Years"
                        value={inputDates}
                    />
                </div>
                <textarea
                    onChange={handleDetailsChange}
                    className="input-details"
                    // rows="3"
                    placeholder="Details here ..."
                    value={inputDetails}
                />
            </div>
            <EditButtons
                index={index}
                modeStatus={(status) => handleStatus(status)}
                deleteIndex={deleteThis}
            />
        </div>
    );
}

export default Section;
