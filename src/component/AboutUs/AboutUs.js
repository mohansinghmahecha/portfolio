import React from "react";
import imgLeft from "../assert/about-us-demo.jpg";

export default function AboutUs() {
  return (
    <div id="about-section " className="containerbox">
      <h1>About Us</h1>
      <p>Best Developer i am</p>
      <div className="grid center ml-2 trans">
        <img src={imgLeft} alt="" className="img-width"/>
        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum veniam ducimus, odit magnam qui voluptas, quisquam ipsam impedit quibusdam nam quos id at, suscipit officiis officia eius blanditiis numquam debitis!

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rerum provident sit iure voluptas sed debitis voluptatem laudantium beatae a? Cumque voluptatibus ducimus quisquam ipsam veritatis dolorem quaerat odio natus.


          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur deserunt necessitatibus iste. Ducimus, eveniet? Modi ullam debitis incidunt velit! Quaerat, qui laborum! Obcaecati praesentium culpa sunt nihil dolorum pariatur beatae?
        </p>
      </div>
    </div>
  );
}
