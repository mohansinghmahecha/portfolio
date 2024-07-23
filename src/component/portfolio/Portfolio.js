import React from "react";

export default function Portfolio() {
  return (
    <div
      className="containerbox center bg-hover "
      id="portfolio-section"
      style={{ display: "flex", flexDirection: "row", gap: "20px" }}
    >
      {/* START */}
      <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
         
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
      <div className="bg-info"
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

       {/* START */}
       <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        FireBase
      </div>
      {/* END */}

       {/* START */}
       <div className="bg-danger text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        Git
      </div>
      {/* END */}
       {/* START */}
       <div className="bg-success text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        Js
      </div>
      {/* END */}

       {/* START */}
       <div className="bg-dark text-white"
        style={{
          display: "flex",
          width: "170px",
          height: "170px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        Boostrap
      </div>
      {/* END */}

      
    </div>
  );
}
