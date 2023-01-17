import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = key => {
    if (key.code === 'Escape') {
      this.props.closeModal();
    }
  };

  backdropOnClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalImage, tags } = this.props;
    return (
      <div className={css.Overlay} onClick={this.backdropOnClick}>
        <div className={css.Modal}>
          <img src={modalImage} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  backdropOnClick: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
