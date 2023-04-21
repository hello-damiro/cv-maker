import React from 'react';
import { useState } from 'react';

function Section({ title, institution, dates, details }) {
    const [editMode, setEditMode] = useState(false);
    const [inputTitle, setInputTitle] = useState(title);
    const handleTitleChange = (e) => {
        console.log(e.currentTarget.value);
        setInputTitle(e.currentTarget.value);
    };

    const handleEditBtn = () => setEditMode(true);
    const handleCheckBtn = () => setEditMode(false);
    const handleCloseBtn = () => console.log('handleCloseBtn: ');
    return (
        <div className="section">
            <div className="content">
                <h3 className="title">{inputTitle}</h3>
                <div className="single-line">
                    <h4 className="institution">{institution} /</h4>
                    <h4 className="dates">{dates}</h4>
                </div>
                <p className="details">{details}</p>
            </div>
            <div className={`edit-inputs ${editMode ? null : 'hidden'}`}>
                <input
                    onChange={handleTitleChange}
                    className="input-title"
                    placeholder="Title"
                    value={inputTitle}
                />
                <div className="single-line">
                    <input className="input-institution" placeholder="Institution" />
                    <input className="input-dates" placeholder="Years" />
                </div>
                <textarea className="input-details" rows="3" placeholder="Details here ..." />
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
