import React from 'react';
import SectionGroup from './shared/SectionGroup';

function CVMain() {
    return (
        <div className="cv-main">
            <div className="left">
                <SectionGroup sectionTitle={'Experience'} />
            </div>
            <div className="right">
                <SectionGroup sectionTitle={'Education'} />
            </div>
        </div>
    );
}

export default CVMain;
