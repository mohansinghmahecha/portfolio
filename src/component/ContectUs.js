import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

export default function ContactUs() {
  function handleClick() {
    window.open(
      "https://api.whatsapp.com/send?phone=+918619842221&text=Hi&app_absent=0",
      "_blank"
    );
  }

  return (
    <div
      id="contact"
      className="w-100 bg-light  containerbox center"
      style={{
        width: "50%",
        overflow: "hidden"
      }}
    >
      <h1>Contact Us AnyTime ..</h1>
      <FaWhatsappSquare
        className="w-75"
        style={{
          height: "100px",
          color: "green",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
      <h4 className="text-blue">WhatsApp</h4>
    </div>
  );
}
