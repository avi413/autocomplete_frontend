import './Button.scss';
import Search from '../../media/search.png';
function Button(props) {
  const { className, onClick } = props;
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <img src={Search} className='button__icon' alt='search icon' />
    </button>
  );
}

export default Button;
