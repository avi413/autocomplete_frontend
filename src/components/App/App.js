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
  const [employeesList, setemployeesList] = useState({});
  const [Suggestions, setSuggestions] = useState({});

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

  return (
    <div className='App'>
      <ParticlesBackground />
      <div className='App_main'>
        <Header />
        <div className='main'>
          <p className='main__title'>LOOKING FOR AN EMPLOYEE?</p>
          <p className='main__subtitle'>
            Click on the search bar to learn our suggestions
          </p>
          <SearchForm>
            <div className='form-elements'>
              <div className='search-form__continer'>
                <input
                  ref={inputEl}
                  className='search-form__input'
                  placeholder='Search...'
                  onChange={(e) => onChangeHandler(e.target.value)}
                />
                <SuggestionsList employeesList={Suggestions} />
              </div>
              <Button
                title='Search'
                className='button_type_blue search-form__button'
              />
            </div>
          </SearchForm>
        </div>
      </div>
    </div>
  );
}

export default App;
