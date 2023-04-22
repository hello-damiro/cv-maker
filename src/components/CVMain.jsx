import React from 'react';
import Section from './Section';

function CVMain() {
    return (
        <div className="main sections">
            <div className="left">
                <div className="section-title">Experience</div>
                <Section
                    title={'Senior Frond-end Developer'}
                    institution={'Alphabet Inc'}
                    dates={'2021 - Present'}
                    details={
                        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent inceptos himenaeos.'
                    }
                />
                <Section
                    title={'Senior Frond-end Developer'}
                    institution={'Alphabet Inc'}
                    dates={'2021 - Present'}
                    details={
                        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                    }
                />
                <div className="section-title">Education</div>
                <Section
                    title={'Senior Frond-end Developer'}
                    institution={'Alphabet Inc'}
                    dates={'2021 - Present'}
                    details={
                        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                    }
                />
                <Section
                    title={'Senior Frond-end Developer'}
                    institution={'Alphabet Inc'}
                    dates={'2021 - Present'}
                    details={
                        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                    }
                />
            </div>
            <div className="right">
                <div className="section-title">Education</div>
                <Section
                    title={'Senior Frond-end Developer'}
                    institution={'Alphabet Inc'}
                    dates={'2021 - Present'}
                    details={
                        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                    }
                />
            </div>
        </div>
    );
}

export default CVMain;
