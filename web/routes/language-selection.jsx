 import React from 'react';
//import React, { useState } from "react"; //react interface to be 
import { useNavigate } from 'react-router';
import '../styles/common/index.css';
import '../styles/pages/language-selection.css';

const LanguageSelection = ({ updateCriteria }) => {
  const navigate = useNavigate();

  // List of languages sorted alphabetically
  const languages = [
    "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", 
    "Basque", "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Catalan",
    "Cebuano", "Chichewa", "Chinese (Simplified)", "Chinese (Traditional)",
    "Corsican", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto",
    "Estonian", "Filipino", "Finnish", "French", "Frisian", "Galician", "Georgian",
    "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew",
    "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish",
    "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda",
    "Korean", "Kurdish", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian",
    "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese",
    "Maori", "Marathi", "Mongolian", "Myanmar (Burmese)", "Nepali", "Norwegian",
    "Odia (Oriya)", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi",
    "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho", "Shona",
    "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese",
    "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Turkish",
    "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh",
    "Xhosa", "Yiddish", "Yoruba", "Zulu"
  ].sort();

  const handleNext = () => {
    navigate('/employment');
  };

  return (
    <div className="language-selection">
      <div className="language-selection__container">
        <h1 className="language-selection__title">Teaching Language</h1>
        <select
          className="language-selection__select"
          onChange={(e) => updateCriteria('language', e.target.value)}
        >
          <option value="">Select</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        <button className="language-selection__button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;
