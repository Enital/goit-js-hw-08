import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

function createGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" title=""/>
        </a>
        </li>`;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");
const addGalleryItem = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", addGalleryItem);

let lightbox = new SimpleLightbox(".gallery .gallery__link", {    
    captionsData: 'alt',
    captionDelay: 250,
    close: false,
    enableKeyboard: true,
});

//=========================================================================================================================================
// const galleryEl = document.querySelector('.gallery');
// function createGalleryItem(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//         <a class="gallery__link" href="${preview}"><img class="gallery__image" src="${original}" alt="${description}" title=""/></a>
//         </li>`;
//     })
//     .join('');
// }
// const addGalleryItem = createGalleryItem(galleryItems);
// galleryEl.insertAdjacentHTML('beforeend', addGalleryItem);

// //=========================================================================================================================================
// var lightbox = new SimpleLightbox('.gallery .gallery__link', {
//   captionPosition: 'bottom',
//   captionsData: 'alt',
//   captionDelay: 250,
//   close: false,
//   enableKeyboard: true,
// });