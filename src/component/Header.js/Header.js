import React from "react";
import "../global.css";
import downloadpdf from "../download/resume.pdf"; // Adjust the path to your PDF file

export default function Header() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = downloadpdf;
    link.download = 'resume-Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="img-bg"
      style={{
        minHeight: "100vh",
        width: "100%",
        objectFit: "fill",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="heading">
        <p className="text">Hi, I'm Mohan Singh Mahecha</p>
        <p>An Developer || coder 💻</p>
        <button className="btn btn-danger z-index-30" onClick={downloadResume}>
          Cv/Resume
        </button>
      </div>
    </div>
  );
}
