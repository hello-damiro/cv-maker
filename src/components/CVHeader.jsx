import React, { useState } from 'react';
import About from './shared/About';
import Person from './shared/Person';
import Website from './shared/Website';
import Links from './shared/Links';
import cvData from '../data/CVData';

function CVHeader() {
    const [data] = useState(cvData);
    return (
        <div>
            <div className="cv-header">
                <div className="left">
                    <Person
                        firstname={data.firstname}
                        lastname={data.lastname}
                        position={data.position}
                    />
                    <About about={data.about} />
                </div>
                <div className="right">
                    <Website website={data.website} />
                    <Links
                        phone={data.contacts.phone}
                        gmail={data.contacts.email}
                        location={data.contacts.location}
                        linkedin={data.contacts.linkedin}
                        github={data.contacts.github}
                    />
                </div>
            </div>
        </div>
    );
}

export default CVHeader;
