import './SuggestionsList.scss';

function SuggestionsList({ onClick, employeesList, show, className, term }) {
  let listType = className === 'suggestions__list' ? 'list' : 'result';
  return (
    show && (
      <div className={`${className}`}>
        <ul className={`suggestions ${listType}`}>
          {employeesList.length > 0 &&
            employeesList.map((data) => (
              <li
                className='suggestions__item'
                key={data._id}
                onClick={onClick}
              >
                <div className='card'>
                  <img
                    className='card__img'
                    src={data.ImageUrl}
                    alt='card-img'
                  />
                  <div className='card__container'>
                    <h4 className='card__title'>
                      <b>
                        <Highlighted text={data.Name} highlight={term} />
                      </b>
                    </h4>
                    <p className='card__subtitle'>
                      {' '}
                      <Highlighted text={data.WorkTitle} highlight={term} />
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
  );
}

const Highlighted = ({ text = '', highlight = '' }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};

export default SuggestionsList;
