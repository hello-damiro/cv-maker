import React from 'react';
import About from './shared/About';
import Person from './shared/Person';
import Website from './shared/Website';
import Links from './shared/Links';

function CVHeader() {
    return (
        <div>
            <div className="vertical-space"></div>
            <div className="cv-header">
                <div className="left">
                    <Person
                        firstname={'Samuelle'}
                        lastname={'Loucas'}
                        position={'Senior Truck Driver'}
                    />
                    <About
                        about={
                            'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                        }
                    />
                </div>
                <div className="right">
                    <Website website={'www.ed-smith.dev'} />
                    <Links
                        phone={'+56 1234 4567'}
                        gmail={'ed.smith@gmail.com'}
                        location={'New York, UK'}
                        linkedin={'linkedin.com/ed-smith'}
                        github={'github.com/ed-smith'}
                    />
                </div>
            </div>
        </div>
    );
}

export default CVHeader;
