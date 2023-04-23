import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function EditButtons({ modeStatus }) {
    let [editMode, setEditMode] = useState(false);
    const handleBtn = () => {
        setEditMode((editMode = !editMode));
        modeStatus(editMode);
    };
    const handleCloseBtn = () => console.log('CLOSE');
    return (
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
            <button onClick={() => handleCloseBtn()} className="btn-close" type="button" />
        </div>
    );
}

EditButtons.defaultProps = {
    editMode: false,
};

EditButtons.propTypes = {
    editMode: PropTypes.bool.isRequired,
};

export default EditButtons;
