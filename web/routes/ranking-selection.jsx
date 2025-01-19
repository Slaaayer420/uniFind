import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/ranking-selection.css';

const RankingSelection = ({ updateCriteria }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/tuition');
  };

  return (
    <div className="page-container ranking-selection">
      <h1 className="page-title ranking-selection__title">Ranking Preference</h1>
      <form
        className="ranking-selection__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <input
          type="number"
          min="1"
          placeholder="Top X Universities"
          onChange={(e) => updateCriteria('ranking', e.target.value)}
          className="form-input ranking-selection__input"
        />
        <button type="submit" className="form-button ranking-selection__button">
          Next
        </button>
      </form>
    </div>
  );
};

export default RankingSelection;
