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

    let [hiddenPhone, setHiddenPhone] = useState(true);
    let [hiddenGmail, setHiddenGmail] = useState(true);
    let [hiddenLocation, setHiddenLocation] = useState(true);
    let [hiddenLinkedin, setHiddenLinkedin] = useState(true);
    let [hiddenGithub, setHiddenGithub] = useState(true);

    const handleHiddenPhone = (e) => setHiddenPhone(!hiddenPhone);
    const handleHiddenGmail = (e) => setHiddenGmail(!hiddenGmail);
    const handleHiddenLocation = (e) => setHiddenLocation(!hiddenLocation);
    const handleHiddenLinkedin = (e) => setHiddenLinkedin(!hiddenLinkedin);
    const handleHiddenGithub = (e) => setHiddenGithub(!hiddenGithub);

    return (
        <div className="links">
            <ul className="content">
                {hiddenPhone ? <li className="phone">{inputPhone}</li> : null}
                {hiddenGmail ? <li className="gmail">{inputGmail}</li> : null}
                {hiddenLocation ? <li className="location">{inputLocation}</li> : null}
                {hiddenLinkedin ? <li className="linkedin">{inputLinkedin}</li> : null}
                {hiddenGithub ? <li className="github">{inputGithub}</li> : null}
            </ul>
            <div className={`edit-inputs ${editMode ? null : 'hidden'}`}>
                <div className="link-group">
                    <input
                        onChange={handleHiddenPhone}
                        type="checkbox"
                        value="hide"
                        checked={hiddenPhone}
                    />
                    <input
                        type="text"
                        onChange={handlePhoneChange}
                        className="input-phone"
                        placeholder="+ 123 456 7890"
                        value={inputPhone}
                    />
                </div>
                <div className="link-group">
                    <input
                        onChange={handleHiddenGmail}
                        type="checkbox"
                        value="hide"
                        checked={hiddenGmail}
                    />
                    <input
                        type="text"
                        onChange={handleGmailChange}
                        className="input-gmail"
                        placeholder="you@gmail.com"
                        value={inputGmail}
                    />
                </div>
                <div className="link-group">
                    <input
                        onChange={handleHiddenLocation}
                        type="checkbox"
                        value="hide"
                        checked={hiddenLocation}
                    />
                    <input
                        type="text"
                        onChange={handleLocationChange}
                        className="input-location"
                        placeholder="Some City, USA"
                        value={inputLocation}
                    />
                </div>
                <div className="link-group">
                    <input
                        onChange={handleHiddenLinkedin}
                        type="checkbox"
                        value="hide"
                        checked={hiddenLinkedin}
                    />
                    <input
                        type="text"
                        onChange={handleLinkedinChange}
                        className="input-linkedin"
                        placeholder="linkedin/@some-handle"
                        value={inputLinkedin}
                    />
                </div>
                <div className="link-group">
                    <input
                        onChange={handleHiddenGithub}
                        type="checkbox"
                        value="hide"
                        checked={hiddenGithub}
                    />
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
