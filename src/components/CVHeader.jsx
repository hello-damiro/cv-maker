import React from 'react';

function CVHeader() {
    return (
        <div>
            <div className="vertical-space"></div>
            <div className="sections cv-header">
                <div className="left">
                    <div className="person">
                        <h1 className="name">Edward</h1>
                        <h1 className="name">Smith</h1>
                        <h2 className="position">FULL STACK FRONT END DEV</h2>
                    </div>
                    <div className="about">
                        <p>
                            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <h3 className="website">www.ed-smith.dev</h3>
                    <ul className="links">
                        <li className="phone">+56 1234 4567</li>
                        <li className="gmail">ed.smith@gmail.com</li>
                        <li className="location">New York, UK</li>
                        <li className="linkedin">linkedin.com/ed-smith</li>
                        <li className="github">github.com/ed-smith</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CVHeader;
