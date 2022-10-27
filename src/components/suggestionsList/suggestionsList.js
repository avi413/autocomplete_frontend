import './SuggestionsList.scss';
import React, { useState } from 'react';

function SuggestionsList({ userInput, onClick, className, suggestion,employeesList }) {
  const [ShowSuggestions, setShowSuggestions] = useState('');
  const [FilteredSuggestions, setFilteredSuggestions] = useState('');
  const [ActiveSuggestion, setActiveSuggestion] = useState('');



  return (
    <ul className='suggestions'>
        <li className='suggestions__item' key={suggestion} onClick={onClick}>
        <div className='card'>
          <img className="card__img" src='https://randomuser.me/api/portraits/med/men/2.jpg'  alt='card-img' />
          <div className="card__container">
            <h4 className="card__title">
              <b>John Doe</b>
            </h4>
            <p className="card__subtitle">Architect & Engineer</p>
          </div>
        </div>
      </li>
      
      
    
    </ul>
  );
}

export default SuggestionsList;
