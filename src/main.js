import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchSearch } from './js/pixabay-api';
import { initalRender, renderGallery } from './js/render-functions';
initalRender();
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const list = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
console.log(form);

form.addEventListener('submit', event => {
  loader.classList.add('is-loading');
  console.log(loader);
  event.preventDefault();
  list.innerHTML = '';
  const imageName = input.value;
  input.value = '';
  fetchSearch(imageName).then(obj => {
    console.log(obj);
    if (obj.length === 0) {
      iziToast.show({
        title: 'Error',
        message: 'Unfortunately no pictures found by your request :(',
        backgroundColor: 'red',
        theme: 'dark',
        color: 'red',
        position: 'topRight',
      });
      loader.classList.remove('is-loading');
      return;
    }
    const gallery = renderGallery(obj);
    setTimeout(() => {
      list.append(...gallery);
      loader.classList.remove('is-loading');
      const lightbox = new SimpleLightbox('.gallery-link', {
        captionDelay: 250,
        captionsData: 'alt',
      });
      lightbox.refresh();
    }, 1000);
  });
});

list.addEventListener('click', event => {
  event.preventDefault();
});
