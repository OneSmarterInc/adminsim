import jsPDF from 'jspdf';

const addChatToPDF = (doc, chatHistory) => {
    let yOffset = 20; // starting vertical position
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();

    for (let i = 0; i < chatHistory.length; i++) {
        const chatEntry = chatHistory[i];
        const chatType = chatEntry.type === "user" ? "Question: " : "Answer: ";
        const chatText = chatType + chatEntry.message;

        const lines = doc.splitTextToSize(chatText, pageWidth - 20);
        const textHeight = (doc.internal.getFontSize() + 2) * lines.length;

        // Check if adding the current chat entry exceeds the page height.
        // If so, add a new page before adding the question
        if (yOffset + textHeight > pageHeight - 20) {
            doc.addPage();
            yOffset = 20; // reset the vertical position for the new page
        }

        // Add the current chat entry (Question or Answer)
        doc.text(lines, 10, yOffset);
        yOffset += textHeight;
    }
};

const generatePDF = (chatHistory) => {
    const doc = new jsPDF();

    addChatToPDF(doc, chatHistory);

    doc.save(`Chat history report.pdf`);
};

export default generatePDF;
