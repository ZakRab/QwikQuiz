import jsPDF from "jspdf";

/**
 * Generate a PDF with the given text
 * @param {*} text - The text to be put in the PDF
 */
export function generatePDF(text) {
  const doc = new jsPDF();
  doc.setFontSize(10);
  doc.text(text, 1, 10);
  doc.save("test.pdf");
}
