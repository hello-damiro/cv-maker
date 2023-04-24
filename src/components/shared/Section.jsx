import React from 'react';
import { useState } from 'react';

function Section({ index, title, institution, dates, details, deleteThis }) {
    let [editMode, setEditMode] = useState(false);
    const handleBtn = () => setEditMode((editMode = !editMode));

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
                    placeholder="Details here ..."
                    value={inputDetails}
                />
            </div>
            <div className="btns">
                {!editMode ? (
                    <button onClick={() => handleBtn()} className="btn-edit" type="button" />
                ) : null}
                {editMode ? (
                    <button
                        onClick={() => handleBtn()}
                        className={`btn-check ${!editMode ? 'hidden' : ''}`}
                        type="button"
                    />
                ) : null}
                <button onClick={() => deleteThis(index)} className="btn-close" type="button" />
            </div>
        </div>
    );
}

export default Section;
