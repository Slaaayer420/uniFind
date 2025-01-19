import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/program-selection.css';

const ProgramSelection = ({ updateCriteria }) => {
  const navigate = useNavigate();

  // Program list, sorted alphabetically
  const programs = [
    "Accounting",
    "Actuarial Science",
    "Advertising",
    "Aeronautical Engineering",
    "Agribusiness",
    "Agriculture",
    "Anesthesiology",
    "Animation",
    "Anthropology",
    "Architecture",
    "Arts",
    "Astronomy",
    "Astrophysics",
    "Bioinformatics",
    "Biology",
    "Biomedical Engineering",
    "Botany",
    "Business Administration",
    "Cardiology",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Clinical Psychology",
    "Cognitive Science",
    "Computer Science",
    "Creative Writing",
    "Criminology",
    "Cultural Studies",
    "Cybersecurity",
    "Culinary Arts",
    "Data Science",
    "Dermatology",
    "Development Studies",
    "Ecology",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Engineering",
    "Energy Systems",
    "Entrepreneurship",
    "Environmental Science",
    "Epidemiology",
    "Ethics",
    "Event Management",
    "Fashion Design",
    "Film Studies",
    "Finance",
    "Fine Arts",
    "Forensic Science",
    "Forestry",
    "Game Design",
    "Genetics",
    "Geography",
    "Geology",
    "Geriatrics",
    "Global Studies",
    "Graphic Design",
    "Health Informatics",
    "History",
    "Horticulture",
    "Hospitality Management",
    "Human-Computer Interaction",
    "Human Resources Management",
    "Information Technology",
    "Industrial Design",
    "Industrial Engineering",
    "Interior Design",
    "International Relations",
    "Journalism",
    "Law",
    "Library Science",
    "Linguistics",
    "Literature",
    "Marketing",
    "Marine Biology",
    "Material Science",
    "Mathematics",
    "Mechanical Engineering",
    "Media Studies",
    "Medicine",
    "Mechatronics",
    "Mining Engineering",
    "Music",
    "Neuroscience",
    "Nursing",
    "Nursing Science",
    "Nutritional Science",
    "Oceanography",
    "Operations Research",
    "Optometry",
    "Packaging Science",
    "Petroleum Engineering",
    "Pharmacy",
    "Philosophy",
    "Physical Education",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Administration",
    "Public Health",
    "Quantum Computing",
    "Radiology",
    "Religious Studies",
    "Renewable Energy",
    "Robotics",
    "Social Work",
    "Sociology",
    "Sports Science",
    "Statistics",
    "Strategic Management",
    "Supply Chain Management",
    "Sustainable Development",
    "Textile Engineering",
    "Theatre Arts",
    "Tourism Management",
    "Urban Planning",
    "Veterinary Science",
    "Web Development",
    "Wildlife Conservation",
    "Zoology"
  ].sort(); // Sorts the program list alphabetically

  const handleNext = () => {
    navigate('/location'); // Navigate to the next step
  };

  return (
    <div className="page-container program-selection">
      <h1 className="page-title program-selection__title">Select Your Program</h1>
      <select className="form-select program-selection__select" onChange={(e) => updateCriteria('program', e.target.value)}>
        <option value="">Select</option>
        {programs.map((program, index) => (
          <option key={index} value={program}>{program}</option>
        ))}
      </select>
      <button className="form-button program-selection__button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default ProgramSelection;
