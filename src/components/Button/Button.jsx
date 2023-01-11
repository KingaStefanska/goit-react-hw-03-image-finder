import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ moreImage }) => {
  return (
    <button type="button" className={css.Button} onClick={() => moreImage()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  moreImage: PropTypes.func.isRequired,
};

export default Button;
