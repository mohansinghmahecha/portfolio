import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
export default function ContectUs() {
  function click() {
    window.open(
      "https://web.whatsapp.com/send?phone=+918619842221&text=Hiii&app_absent=0"
    );
  }
  return (
    <div
      id="contect"
      className="w-100 mh-100 bg-light m-5 containerbox center "
    >
      <h1>Contect Us AnyTime ..</h1>
      <FaWhatsappSquare
        className="w-75 "
        style={{
          height: "100px",
          color: "green",
          cursor: "pointer",
        }}
        onClick={click()}
      />
      <h4 className="text-blue">WhatsApp</h4>
    </div>
  );
}
