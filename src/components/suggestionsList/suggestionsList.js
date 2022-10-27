import React, { useState } from 'react';
import './SuggestionsList.scss';


function SuggestionsList({ userInput, onClick, className, suggestion }) {
  const [ShowSuggestions, setShowSuggestions] = useState('');
  const [FilteredSuggestions, setFilteredSuggestions] = useState('');
  const [ActiveSuggestion, setActiveSuggestion] = useState('');

  return (
    <ul className='suggestions'>
      <li className='suggestions__item' key={suggestion} onClick={onClick}>
        <div className='card'>
          <img class="card__img" src='https://randomuser.me/api/portraits/med/men/2.jpg'  alt='card-img' />
          <div class="card__container">
            <h4 class="card__title">
              <b>John Doe</b>
            </h4>
            <p class="card__subtitle">Architect & Engineer</p>
          </div>
        </div>
      </li>
      <li className='suggestions__item' key={suggestion} onClick={onClick}>
        <div className='card'>
          <img class="card__img" src='https://randomuser.me/api/portraits/med/men/2.jpg'  alt='card-img' />
          <div class="card__container">
            <h4 class="card__title">
              <b>John Doe</b>
            </h4>
            <p class="card__subtitle">Architect & Engineer</p>
          </div>
        </div>
      </li>
      <li className='suggestions__item' key={suggestion} onClick={onClick}>
        <div className='card'>
          <img class="card__img" src='https://randomuser.me/api/portraits/med/men/2.jpg'  alt='card-img' />
          <div class="card__container">
            <h4 class="card__title">
              <b>John Doe</b>
            </h4>
            <p class="card__subtitle">Architect & Engineer</p>
          </div>
        </div>
      </li>
      <li className='suggestions__item' key={suggestion} onClick={onClick}>
        <div className='card'>
          <img class="card__img" src='https://randomuser.me/api/portraits/med/men/2.jpg'  alt='card-img' />
          <div class="card__container">
            <h4 class="card__title">
              <b>John Doe</b>
            </h4>
            <p class="card__subtitle">Architect & Engineer</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default SuggestionsList;
