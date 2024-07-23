import React from "react";

export default function Portfolio() {
  return (
    <div
      className="containerbox center bg-hover"
      id="portfolio-section"
      style={{ display: "flex", flexDirection: "row" ,gap:"20px"  }}
    >
      {/* START */}
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        React
      </div>
      {/* END */}

      {/* START */}
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "brown",
        }}
      >
        NextJs
      </div>
      {/* END */}

      {/* START */}
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "yellow",
        }}
      >
        CSS
      </div>
      {/* END */}

      {/* START */}
      <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        HTML
      </div>
      {/* END */}

       {/* START */}
       <div
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
      >
        Node 
      </div>
      {/* END */}
    </div>
  );
}
