import React from "react";
import { Link } from "react-scroll";
export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand"></a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                
                <Link to="home">Home</Link>
              </li>

             
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    activeclassName="active"
                    to="portfolio-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    classNameName="nav-link active"
                  >
                    Skills
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    activeclassName="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    classNameName="nav-link active"
                  >
                    About
                  </Link>
                </a>
              </li>

          

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="contect" >Contact</Link>
                </a>
              </li>

              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
