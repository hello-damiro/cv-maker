import React from 'react';
import { useState } from 'react';
import Section from './Section';

function SectionGroup({ sectionTitle }) {
    let [editMode, setEditMode] = useState(false);
    const handleBtn = () => setEditMode((editMode = !editMode));
    const handleCloseBtn = () => console.log('CLOSE');

    const [inputSectionTitle, setInputSectionTitle] = useState(sectionTitle);
    const handleSectionTitleChange = (e) => setInputSectionTitle(e.currentTarget.value);

    const [index, setIndex] = useState(0);
    const [sections, setSections] = useState([]);

    const handlePlusBtn = () => {
        console.log('ADD');
        setSections([...sections, renderTemplateSection()]);
    };

    const handleDeleteSection = (index) => {
        console.log('DEL', index);
        setSections(sections.filter((section, i) => index !== i));
    };

    const renderTemplateSection = () => {
        const title = 'Awesome title';
        setIndex(index + 1);
        return (
            <Section
                key={index}
                index={index}
                title={index + ' - ' + title}
                institution={'Alphabet Inc'}
                dates={'2021 - Present'}
                details={
                    'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent inceptos himenaeos.'
                }
                deleteThis={(id) => handleDeleteSection(id)}
            />
        );
    };

    return (
        <div>
            <div className="section-title">
                <div className="content">{inputSectionTitle}</div>
                <div className={`edit-inputs ${!editMode ? 'hidden' : ''}`}>
                    <input
                        type="text"
                        onChange={handleSectionTitleChange}
                        className="input-section-title"
                        placeholder="Section Group title here"
                        value={inputSectionTitle}
                    />
                </div>
                <div className="btns">
                    {!editMode ? (
                        <button
                            onClick={() => handlePlusBtn()}
                            className="btn-plus"
                            type="button"
                        />
                    ) : null}
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
            </div>
            <div className="sections">{sections}</div>
        </div>
    );
}

export default SectionGroup;
