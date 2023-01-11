import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, imageOnClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <li key={image.id}>
          <img
            className={css.image}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => imageOnClick(image.id)}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
