import React from 'react';
import { useState } from 'react';

function Section({ title, institution, dates, details }) {
    const [editMode, setEditMode] = useState(false);
    const [inputTitle, setInputTitle] = useState(title);
    const [inputInstitution, setInputInstitution] = useState(institution);
    const [inputDates, setInputDates] = useState(dates);
    const [inputDetails, setInputDetails] = useState(details);
    const handleTitleChange = (e) => setInputTitle(e.currentTarget.value);
    const handleInstitutionChange = (e) => setInputInstitution(e.currentTarget.value);
    const handleDatesChange = (e) => setInputDates(e.currentTarget.value);
    const handleDetailsChange = (e) => setInputDetails(e.currentTarget.value);
    const handleEditBtn = () => setEditMode(true);
    const handleCheckBtn = () => setEditMode(false);
    const handleCloseBtn = () => console.log('handleCloseBtn: ');

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
                    onChange={handleTitleChange}
                    className="input-title"
                    placeholder="Title"
                    value={inputTitle}
                />
                <div className="single-line">
                    <input
                        onChange={handleInstitutionChange}
                        className="input-institution"
                        placeholder="Institution"
                        value={inputInstitution}
                    />
                    <input
                        onChange={handleDatesChange}
                        className="input-dates"
                        placeholder="Years"
                        value={inputDates}
                    />
                </div>
                <textarea
                    onChange={handleDetailsChange}
                    className="input-details"
                    rows="3"
                    placeholder="Details here ..."
                    value={inputDetails}
                />
            </div>
            <div className="btns">
                {editMode ? null : (
                    <button onClick={() => handleEditBtn()} className="btn-edit" type="button" />
                )}
                {!editMode ? null : (
                    <button
                        onClick={() => handleCheckBtn()}
                        className={`btn-check ${!editMode ? 'hidden' : ''}`}
                        type="button"
                    />
                )}
                <button onClick={() => handleCloseBtn()} className="btn-close" type="button" />
            </div>
        </div>
    );
}

export default Section;
