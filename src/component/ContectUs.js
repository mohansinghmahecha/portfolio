import React, { useState } from "react";
import { FaWhatsappSquare } from "react-icons/fa";

export default function ContactUs() {
  function handleClick() {
    window.open(
      "https://api.whatsapp.com/send?phone=+918619842221&text=Hi&app_absent=0",
      "_blank"
    );
  }
  const [constect, setContect] = useState("Contect Me");

  return (
    <div
      id="contact"
      className="w-100 bg-light  "
      style={{
        width: "50%",
        overflow: "hidden",
      }}
    >
      <h1>Contact Us AnyTime ..</h1>
      <div
        className="block p-32"
        style={{
          padding: "20px",
        }}
      >
        <form>
          <div className="form-row m-1">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group col-md-6 m-1">
              <label for="inputPassword4">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div className="form-group m-1 col-md-6">
            <label for="inputAddress">Message</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Hii , How May I help You"
              required
            />
          </div>
          {/*   <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div> */}
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Accept
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setContect("Thanks For Reaching Us")}
          >
            {constect}
          </button>
        </form>
      </div>
      <div
        className="containerbox center"
        style={{
          justifyContent: "start",
        }}
      >
        <FaWhatsappSquare
          classNameName="w-75"
          style={{
            height: "150px",
            width: "100px",
            color: "green",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        <h4 classNameName="text-blue">WhatsApp</h4>
      </div>
    </div>
  );
}
