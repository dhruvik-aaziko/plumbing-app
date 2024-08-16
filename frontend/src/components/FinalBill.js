// src/components/FinalBill.js
import React from 'react';
import jsPDF from 'jspdf';

const FinalBill = ({ items, houseHolderName, address, contractorName }) => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(`Householder: ${houseHolderName}`, 10, 10);
        doc.text(`Address: ${address}`, 10, 20);
        doc.text(`Contractor: ${contractorName}`, 10, 30);

        let yOffset = 40;
        items.forEach(item => {
            doc.text(`${item.type} ${item.name} (${item.size}): ${item.quantity}`, 10, yOffset);
            yOffset += 10;
        });

        doc.save('bill.pdf');
    };

    return (
        <button onClick={generatePDF}>Download Final Bill as PDF</button>
    );
};

export default FinalBill;
