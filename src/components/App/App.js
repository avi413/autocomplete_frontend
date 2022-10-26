import './App.scss';
import React, { useRef } from 'react';
import ParticlesBackground from '../particles/ParticlesBackground';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';

function App() {
  const inputEl = useRef(null);
  const handleClick = (event) => {};
  return (
    <div className='App'>
      <ParticlesBackground />
      <div className='App_main'>
        <Header />
        <div className='main'>
          <p className='main__title'>LOOKING FOR AN EMPLOYEE?</p>
          <p className='main__subtitle'>Click on the search bar to learn our suggestions</p>
          <SearchForm handleClick={handleClick}>
            <div className='form-elements'>
              <input
                ref={inputEl}
                className='search-form__input'
                placeholder='Enter topic'
              />
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