import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

// Створення і рендер розмітки на підставі масиву даних galleryItems
function createGalleryItem({preview, original, description}) {
    const galleryItem = `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
        </li>`;
    return galleryItem
}
const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend',galleryItemsMarkup)

// Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryList.addEventListener('click', onClickItem)

function onClickItem(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        const imageSource = evt.target.dataset.source;
        const instance = basicLightbox.create(
            `<img src="${imageSource}" width="800" height="600" alt="image"/>`);
        
        instance.show();
        currentInstance = instance;
        window.addEventListener('keydown', onEscapePress);
    }
};

// Закриття модального вікна після натискання клавіші Escape та знімаємо прослуховувача.

let currentInstance = null;

function onEscapePress(evt) {
    if (evt.code === 'Escape' && currentInstance) {
        currentInstance.close();
        currentInstance = null;
        window.removeEventListener('keydown', onEscapePress);
    }
};
console.log(galleryItems);

