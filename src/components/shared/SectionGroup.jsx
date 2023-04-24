import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Section from './Section';

function SectionGroup({ cvdata, sectionTitle }) {
    const [editMode, setEditMode] = useState(false);
    const handleTitleEditBtn = () => setEditMode(!editMode);
    // const handleTitleCloseBtn = () => console.log('x');

    const [inputSectionTitle, setInputSectionTitle] = useState(sectionTitle);
    const handleSectionTitleChange = (e) => setInputSectionTitle(e.currentTarget.value);

    const [sections, setSections] = useState([]);

    const addSection = () => {
        const id = uuid();
        const newSection = { id: id, item: renderTemplateSection(id) };
        setSections((prevSections) => [newSection, ...prevSections]);
    };

    const deleteThis = (id) => {
        setSections((prevSections) => prevSections.filter((section) => section.id !== id));
    };

    const renderTemplateSection = (id) => {
        return (
            <Section
                key={id}
                index={id}
                title={`Title`}
                institution={'Institution'}
                dates={'Year - year'}
                details={
                    'Some description, preferably in paragraph form. Ideally you should describe what you do in 3-4 lines. Some accomplishments, daily tasks and generally some functional information that you did during this time on this institution.'
                }
                deleteThis={() => deleteThis(id)}
            />
        );
    };

    useEffect(() => {
        const dataTitle = cvdata[sectionTitle].title;
        setInputSectionTitle(dataTitle);
        const data = cvdata[sectionTitle].sections;
        const newSections = data.map((datum) => {
            const id = uuid();
            return {
                id: id,
                item: (
                    <Section
                        key={id}
                        index={id}
                        title={datum.title}
                        institution={datum.institution}
                        dates={datum.dates}
                        details={datum.details}
                        deleteThis={() => deleteThis(id)}
                    />
                ),
            };
        });
        setSections(newSections);
    }, []);

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
                        <button onClick={() => addSection()} className="btn-plus" type="button" />
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
                    {/* <button
                        onClick={() => handleTitleCloseBtn()}
                        className="btn-close"
                        type="button"
                    /> */}
                </div>
            </div>
            <div>{sections.map((section) => section.item)}</div>
        </>
    );
}

export default SectionGroup;
