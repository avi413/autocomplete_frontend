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
  const [employeesList, setemployeesList] = useState({})
  const handleClick = (event) => {};

  useEffect(() => {
    getEmployees()
    .then(data => {
      setemployeesList(data);
    })
    .catch((e) => {
      console.log(e);
    })
 
  }, [])
  console.log(employeesList);
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
          <SearchForm handleClick={handleClick}>
            <div className='form-elements'>
              <div className='search-form__continer'>
                <input
                  ref={inputEl}
                  className='search-form__input'
                  placeholder='Enter topic'
                />
                <SuggestionsList employeesList={employeesList} />
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
