import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";
import Job from "./../../Assets/jobs.json";
import Filter from "../Filter";

const experience = [
  { min: 0, max: 1 },
  { min: 2, max: 3 },
  { min: 4, max: 5 },
  { min: 5, max: 10 },
];

const Jobs = () => {
  const JobData = JSON.parse(localStorage.getItem("item")) || [];
  const [filteredJobs, setFilteredJobs] = useState([...JobData, ...Job]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleJobFilter = (event) => {
    const value = event.target.innerText;
    event.preventDefault();
    setFilteredJobs(Job.filter((job) => job.role === value));
  };

  const searchEvent = (event) => {
    const data = event.target.value;
    setSearchTerm(data);
    if (searchTerm !== "" && data.length > 2) {
      const filterData = Job.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(data.toLowerCase())
      );
      setFilteredJobs(filterData);
    } else {
      setFilteredJobs(Job);
    }
  };

  const handleExperienceFilter = (checkedState) => {
    let filters = [];
    checkedState.forEach((item, index) => {
      if (item) {
        const filterS = Job.filter(
          (job) =>
            job.experience >= experience[index].min &&
            job.experience <= experience[index].max
        );
        filters = [...filters, ...filterS];
      }
    });
    setFilteredJobs(filters);
  };

  return (
    <>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Our Jobs</h2>
          </div>
        </div>
        <div className="job-section">
          <div className="job-page">
            {filteredJobs.map(({ logo, company, position, location, role }) => (
              <div className="job-list" key={company + position}>
                <div className="job-card">
                  <img
                    src={logo.length > 20 ? logo : require(`../../Assets/images/${logo}`)}
                    alt="logo"
                    className="job-profile"
                  />
                  <div className="job-detail">
                    <h4>{company}</h4>
                    <h3>{position}</h3>
                    <div className="category">
                      <p>{location}</p>
                      <p>{role}</p>
                    </div>
                  </div>
                  <div className="job-button">
                    <div className="job-posting">
                      <Link to="/apply-jobs">Apply Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Filter
            setFilteredJobs={setFilteredJobs}
            handleJobFilter={handleJobFilter}
            handleExperienceFilter={handleExperienceFilter}
            searchEvent={searchEvent}
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
