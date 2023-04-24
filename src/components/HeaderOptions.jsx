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

    // const toPDF = () => {
    //     const paper = document.querySelector('.paper');
    //     html2canvas(paper, { dpi: 300 }).then((canvas) => {
    //         const imgData = canvas.toDataURL('image/jpeg', 1.0);
    //         const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
    //         const pageWidth = pdf.internal.pageSize.getWidth();
    //         const pageHeight = pdf.internal.pageSize.getHeight();
    //         const leftMargin = (pageWidth - canvas.width) / 2;
    //         const bottomMargin = (pageHeight - canvas.height) / 2;
    //         pdf.addImage(imgData, 'JPEG', leftMargin, bottomMargin, canvas.width, canvas.height);
    //         pdf.save('odin-cv-maker.pdf');
    //     });
    // };

    return (
        <div className="options">
            {/* <div className="paper-sizes">A4</div> */}
            <div onClick={toPDF} className="download">
                Download PDF
            </div>
            <a href="/about">
                <div className="about">?</div>
            </a>
        </div>
    );
}

export default HeaderOptions;
