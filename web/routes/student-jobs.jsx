import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/student-jobs.css';

const StudentJobs = ({ updateCriteria }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/results');
  };

  return (
    <div className="student-jobs">
      <div className="student-jobs__container">
        <h1 className="student-jobs__title">Part-Time Student Jobs</h1>
        <select
          className="student-jobs__select"
          onChange={(e) => updateCriteria('studentJobs', e.target.value)}
        >
          <option value="">Select</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <button className="student-jobs__button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentJobs;
