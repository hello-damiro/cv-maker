import React, { useState } from 'react';
import SectionGroup from './shared/SectionGroup';
import cvData from '../data/CVData';

function CVMain() {
    const [data] = useState(cvData);
    return (
        <div className="cv-main">
            <div className="left">
                <SectionGroup cvdata={data} sectionTitle={'projects'} />
                <SectionGroup cvdata={data} sectionTitle={'experience'} />
            </div>
            <div className="right">
                <SectionGroup cvdata={data} sectionTitle={'education'} />
                <SectionGroup cvdata={data} sectionTitle={'expertise'} />
            </div>
        </div>
    );
}

export default CVMain;
