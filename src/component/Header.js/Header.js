import React from "react";
import "../global.css";

export default function Header() {
  return (
    <div
      className="img-bg "
      style={{
        minHeight: "100vh",
        width: "100%",
        objectFit: "fill",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="heading ">
        <p className="text">Hi, I Mohan Singh Mahecha</p>
        <p> An Developer || coder 💻</p>
        <button className="btn  btn-danger z-index-30	">Cv/Resume</button>
      </div>
    </div>
  );
}
