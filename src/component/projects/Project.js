import React from "react";

export default function Project() {
  return (
    <div
      className=""
      style={{
        display: "block",
      }}
    >
      <h2 className="p-4">Projects </h2>

      <div
        className=""
        style={{
          display: "flex",
        }}
      >
        {/* card start */}
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/logo_a71333ba9fe4d72fc96d_4cf04d27de.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">Flash Card Project</p>
          </div>
        </div>
        {/* card end */}

        {/* card start */}
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/vectorstock_33585094_3efab21b73.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              cryptocurrency dashbord is a best project for the searching the
              trending coins , analysis . realtime data feeding and many more .
            </p>
          </div>
        </div>
        {/* card end */}

        {/* card start */}
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "10px",
            padding: "40px",
          }}
        >
          <img
            className="card-img-top"
            src="https://almablog-media.s3.ap-south-1.amazonaws.com/Logo_of_You_Tube_2015_2017_svg_ef2bc4f282.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">YouTube Backend Project</p>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
}
