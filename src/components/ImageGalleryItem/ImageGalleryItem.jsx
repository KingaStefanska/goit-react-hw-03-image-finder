import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;
