import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-main2">
          <h1 style={{ fontFamily: "Playfair Display, serif" }}>
            Here are Different CV Templates{" "}
          </h1>
          <div className="images">
              <Link to="/Temp1" style={{textDecoration:"none"}}>
              <h3>EDIT THIS ONE</h3>
                  <div className="img1-in"></div> 
              </Link >
              <Link to="/Temp2"  style={{textDecoration:"none"}}>
              <h3 >EDIT THIS ONE</h3>
                  <div className="img2-in"></div>
              </Link>
              <Link to="/Temp3" style={{textDecoration:"none"}}>
              <h3>EDIT THIS ONE</h3>
                  <div className="img3-in"></div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
