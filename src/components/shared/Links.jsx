import React from 'react';
import { useState } from 'react';
import EditButtons from './EditButtons';

function Links({ phone, gmail, location, linkedin, github }) {
    const [editMode, setEditMode] = useState(false);
    const handleStatus = (status) => setEditMode(status);

    const [inputPhone, setInputPhone] = useState(phone);
    const [inputGmail, setInputGmail] = useState(gmail);
    const [inputLocation, setInputLocation] = useState(location);
    const [inputLinkedin, setInputLinkedin] = useState(linkedin);
    const [inputGithub, setInputGithub] = useState(github);
    const handlePhoneChange = (e) => setInputPhone(e.currentTarget.value);
    const handleGmailChange = (e) => setInputGmail(e.currentTarget.value);
    const handleLocationChange = (e) => setInputLocation(e.currentTarget.value);
    const handleLinkedinChange = (e) => setInputLinkedin(e.currentTarget.value);
    const handleGithubChange = (e) => setInputGithub(e.currentTarget.value);

    const radioClicked = () => {
        console.log('radio clicked');
    };

    return (
        <div className="links">
            <ul className="content">
                <li className="phone">{inputPhone}</li>
                <li className="gmail">{inputGmail}</li>
                <li className="location">{inputLocation}</li>
                <li className="linkedin">{inputLinkedin}</li>
                <li className="github">{inputGithub}</li>
            </ul>
            <div className={`edit-inputs ${editMode ? null : 'hidden'}`}>
                <div className="link-group">
                    <input onChange={radioClicked()} type="radio" value="off" />
                    <input
                        type="text"
                        onChange={handlePhoneChange}
                        className="input-phone"
                        placeholder="+ 123 456 7890"
                        value={inputPhone}
                    />
                </div>
                <div className="link-group">
                    <input onChange={radioClicked()} type="radio" value="off" />
                    <input
                        type="text"
                        onChange={handleGmailChange}
                        className="input-gmail"
                        placeholder="you@gmail.com"
                        value={inputGmail}
                    />
                </div>
                <div className="link-group">
                    <input onChange={radioClicked()} type="radio" value="off" />
                    <input
                        type="text"
                        onChange={handleLocationChange}
                        className="input-location"
                        placeholder="Some City, USA"
                        value={inputLocation}
                    />
                </div>
                <div className="link-group">
                    <input onChange={radioClicked()} type="radio" value="off" />
                    <input
                        type="text"
                        onChange={handleLinkedinChange}
                        className="input-linkedin"
                        placeholder="linkedin/@some-handle"
                        value={inputLinkedin}
                    />
                </div>
                <div className="link-group">
                    <input onChange={radioClicked()} type="radio" value="off" />
                    <input
                        type="text"
                        onChange={handleGithubChange}
                        className="input-github"
                        placeholder="github.com/@some-handle"
                        value={inputGithub}
                    />
                </div>
            </div>
            <EditButtons modeStatus={(status) => handleStatus(status)} />
        </div>
    );
}

export default Links;
