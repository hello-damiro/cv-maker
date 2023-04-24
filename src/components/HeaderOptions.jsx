import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function HeaderOptions() {
    const toPDF = () => {
        const paper = document.querySelector('.paper');
        html2canvas(paper).then((canvas) => {
            const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            pdf.addImage(canvas.toDataURL('image/png'), 0, 0, canvas.width, canvas.height);
            pdf.save('odin-cv-maker.pdf');
        });
    };

    return (
        <div className="options">
            {/* <div className="paper-sizes">A4</div> */}
            <div onClick={toPDF} className="download">
                Download PDF
            </div>
            <div className="about">
                <a href="/about">?</a>
            </div>
        </div>
    );
}

export default HeaderOptions;
