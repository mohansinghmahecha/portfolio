import React from "react";
import "../global.css";
import downloadpdf from "../download/resume.pdf"; // Adjust the path to your PDF file
/* 

https://github.com/mohansinghmahecha/taxi-rental-service-jodhpur



https://x.com/_mohan_singh_



*/
export default function Header() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = downloadpdf;
    link.download = "resume-Developer.pdf";
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
        <div className=" mt-4 d-flex gap-2">
          <button
            className="btn btn-success text-white z-index-30"
            onClick={(e) => {
              window.open("https://github.com/mohansinghmahecha", "_blank");
            }}
          >
            GitHub
          </button>
          <button
            className="btn btn-secondary z-index-30"
            onClick={(e) => {
              window.open(
                "https://www.instagram.com/_mohan_singh_rathore_",
                "_blank"
              );
            }}
          >
            Instagram
          </button>
          <button
            className="btn btn-primary z-index-30"
            onClick={() => {
              window.open("https://www.linkedin.com/in/mohan-singh-mahecha/");
            }}
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
