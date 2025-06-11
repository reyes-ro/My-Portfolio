import './AboutPDF.css'

export function AboutPDF() {
  return (
    <iframe
    className="PDF_IFrame"
      src="./PDF.pdf"

      title="PDF Viewer"
    />
  );
}