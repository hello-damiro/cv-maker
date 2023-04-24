import React from 'react';
import { useState } from 'react';
import Section from './Section';

function SectionGroup({ sectionTitle }) {
    const [editMode, setEditMode] = useState(false);
    const handleTitleEditBtn = () => setEditMode(!editMode);
    const handleTitleCloseBtn = () => console.log('x');

    const [inputSectionTitle, setInputSectionTitle] = useState(sectionTitle);
    const handleSectionTitleChange = (e) => setInputSectionTitle(e.currentTarget.value);

    const [index, setIndex] = useState(0);
    const [sections, setSections] = useState([]);

    const handleTitlePlusBtn = () => {
        setSections((prevSections) => [
            ...prevSections,
            { id: index, item: renderTemplateSection(index) },
        ]);
        setIndex((prevIndex) => prevIndex + 1);
    };

    const deleteThis = (id) => {
        setSections((prevSections) => prevSections.filter((section) => section.id !== id));
    };

    const renderTemplateSection = (id) => {
        const title = 'Awesome title';
        return (
            <Section
                key={id}
                index={id}
                title={id + ' - ' + title}
                institution={'Alphabet Inc'}
                dates={'2021 - Present'}
                details={
                    'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per  consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent inceptos himenaeos.'
                }
                deleteThis={() => deleteThis(id)}
            />
        );
    };

    return (
        <>
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
                    {!editMode && (
                        <button
                            onClick={() => handleTitlePlusBtn()}
                            className="btn-plus"
                            type="button"
                        />
                    )}
                    {!editMode && (
                        <button
                            onClick={() => handleTitleEditBtn()}
                            className="btn-edit"
                            type="button"
                        />
                    )}
                    {editMode && (
                        <button
                            onClick={() => handleTitleEditBtn()}
                            className={`btn-check ${!editMode ? 'hidden' : ''}`}
                            type="button"
                        />
                    )}
                    <button
                        onClick={() => handleTitleCloseBtn()}
                        className="btn-close"
                        type="button"
                    />
                </div>
            </div>
            <div>{sections.map((section) => section.item)}</div>
        </>
    );
}

export default SectionGroup;
