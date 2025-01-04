'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryItemMarkup } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { PER_PAGE } from './js/pixabay-api.js';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.loader');

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.error({
      message: 'Input field can not be empty',
      color: 'red',
      position: 'topRight',
      timeout: 2000,
      close: true,
    });
    return;
  }
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
          timeout: 2000,
          close: true,
        });
      }

      galleryEl.innerHTML = createGalleryItemMarkup(imagesData.hits);
      const lightbox = new SimpleLightbox('.js-gallery a', {
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData: 'alt',
      });
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
