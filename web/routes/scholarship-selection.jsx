import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/scholarship-selection.css';

const ScholarshipSelection = ({ updateCriteria }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/language');
  };

  return (
    <div className="scholarship-selection">
      <div className="scholarship-selection__container">
        <h1 className="scholarship-selection__title">Scholarships Availability</h1>
        <select
          className="scholarship-selection__select"
          onChange={(e) => updateCriteria('scholarships', e.target.value)}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <button
          className="scholarship-selection__button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ScholarshipSelection;
