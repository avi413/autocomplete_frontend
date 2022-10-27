import './App.scss';
import React, { useState, useEffect, useRef } from 'react';
import ParticlesBackground from '../particles/ParticlesBackground';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import SuggestionsList from '../suggestionsList/suggestionsList';
import { getEmployees } from '../../utils/EmployeeApi';

function App() {
  const inputEl = useRef(null);
  const [title, setTitle] = useState('LOOKING FOR AN EMPLOYEE?');
  const [subTitle, setSubTitle] = useState('Click on the search bar to learn our suggestions');
  const [employeesList, setemployeesList] = useState({});
  const [suggestions, setSuggestions] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    getEmployees()
      .then((data) => {
        setemployeesList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onChangeHandler = (text) => {
    setShowResults(false);
    setShowSuggestions(true);
    setTitle('LOOKING FOR AN EMPLOYEE?');
    setSubTitle('Click on the search bar to learn our suggestions');
    let matches = [];
    if (text.length > 1) {
      matches =
        employeesList.length > 0 &&
        employeesList.filter((item) => {
          return (
            item.Name.toLowerCase().includes(text.toLowerCase()) ||
            item.WorkTitle.toLowerCase().includes(text.toLowerCase())
          );
        });
    }

    setSuggestions(matches);
  };

  const onHandleSubmit =(e) => {
    e.preventDefault();
    if(suggestions.length > 0) {
      setShowSuggestions(false);
      setShowResults(true);
      setTitle('SEARCH RESULTS');
      setSubTitle('');

    }
  }

  return (
    <div className='App'>
      <ParticlesBackground />
      <div className='App_main'>
        <Header />
        <div className='main'>
          <p className='main__title'>{title}</p>
          <p className='main__subtitle'>{subTitle}</p>
          <SearchForm>
            <div className='form-elements'>
              <div className='search-form__continer'>
                <input
                  ref={inputEl}
                  className='search-form__input'
                  placeholder='Search...'
                  onChange={(e) => onChangeHandler(e.target.value)}
                />
                <SuggestionsList className='suggestions__list' employeesList={suggestions} show={showSuggestions}/>
              </div>
              <Button
                title='Search'
                className='button_type_blue search-form__button'
                onClick={onHandleSubmit}
              />
            </div>
          </SearchForm>
         
        </div>
        <SuggestionsList className='suggestions__results' employeesList={suggestions} show={showResults}/>
      </div>
    </div>
  );
}

export default App;
