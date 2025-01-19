import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/tuition-selection.css';

const TuitionSelection = ({ updateCriteria }) => {
  const [tuition, setTuition] = useState(''); // Local state for tuition
  const navigate = useNavigate();

  const handleNext = () => {
    if (!tuition) {
      alert('Please enter a valid tuition fee.'); // Validation message
      return;
    }

    if (typeof updateCriteria === 'function') {
      updateCriteria('tuition', tuition); // Update the global state
    }

    navigate('/scholarships');
  };

  return (
    <div className="tuition-selection">
      <div className="tuition-selection__container">
        <h1 className="tuition-selection__title">Tuition Fees</h1>
        <div className="tuition-selection__form">
          <input
            type="number"
            placeholder="Enter maximum budget ($)"
            value={tuition}
            onChange={(e) => setTuition(e.target.value)} // Update the local state
            min="0"
            className="tuition-selection__input"
          />
          <button
            onClick={handleNext}
            className="tuition-selection__button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TuitionSelection;
