import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/employment-selection.css';

const EmploymentSelection = ({ updateCriteria }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/student-jobs');
  };

  return (
    <div className="employment-selection">
      <div className="employment-selection__container">
        <h1 className="employment-selection__title">Employment Rates</h1>
        <input
          className="employment-selection__input"
          type="number"
          placeholder="Enter minimum employment rate (%)"
          onChange={(e) => updateCriteria('employmentRate', e.target.value)}
        />
        <button
          className="employment-selection__button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmploymentSelection;
