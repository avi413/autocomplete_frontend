import './SuggestionsList.scss';

function SuggestionsList({ onClick, employeesList, show,className }) {

  
  return (
    show && <ul className={`suggestions ${className}`}>
      {employeesList.length > 0 &&
        employeesList.map((data) => (
          <li className='suggestions__item' key={data._id} onClick={onClick}>
            <div className='card'>
              <img className='card__img' src={data.ImageUrl} alt='card-img' />
              <div className='card__container'>
                <h4 className='card__title'>
                  <b>{data.Name}</b>
                </h4>
                <p className='card__subtitle'>{data.WorkTitle}</p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default SuggestionsList;
