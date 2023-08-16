import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

// Створення і рендер розмітки на підставі масиву даних galleryItems
function createGalleryItem({preview, original, description}) {
    const galleryItem = `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    return galleryItem
}
const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup)

// Ініціалізація бібліотеки та додавання options captionsData та captionDelay
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
});

console.log(galleryItems);
