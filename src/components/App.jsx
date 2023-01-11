import getImages from '../API/Api';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import React from 'react';
import { Component } from 'react';
import css from './App.module.css';

const INITIAL_STATE = {
  images: [],
  page: 1,
  perPage: 1,
  isLoading: false,
  query: '',
  totalHits: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  makeRequest = e => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value;
    this.setState({ images: [], query: searchValue, page: 1 });
    e.target.reset();
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      try {
        const { query, page } = this.state;
        const fetchData = await getImages(query, page);
        if (!fetchData.total) {
          alert("Sorry, there's no such images");
        }

        this.setState(({ images }) => ({
          images: [...images, ...fetchData.hits],
          totalHits: fetchData.total,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  LoadMoreImages = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  showModalImage = id => {
    const image = this.state.images.find(image => image.id === id);
    this.setState({
      showModal: {
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      },
    });
  };

  closeModalImage = () => {
    this.setState({ showModal: null });
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.makeRequest);
  }

  render() {
    const { images, isLoading, totalHits, showModal } = this.state;

    return (
      <div className={css.App}>
        <SearchBar makeRequest={this.makeRequest} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} imageOnClick={this.showModalImage} />
        )}

        {totalHits > images.length && (
          <Button moreImage={this.LoadMoreImages} />
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            modalImage={showModal.largeImageURL}
            tags={showModal.tags}
            closeModal={this.closeModalImage}
          />
        )}
      </div>
    );
  }
}

export default App;
