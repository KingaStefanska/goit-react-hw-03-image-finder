import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  const { webformatURL, tags, largeImageURL } = images;
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
export default ImageGalleryItem;
