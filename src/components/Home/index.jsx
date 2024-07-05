import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>CareerQuest: Your Adventure to Dream Jobs Begins Here!</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Explore Jobs</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
