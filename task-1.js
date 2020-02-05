"use strict";

import images from "./gallery-items.js";

const fragment = document.createDocumentFragment();
const list = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector(".lightbox__button");

images.forEach(imagelist => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
    <a
      class="gallery__link"
      href='#'
    >
      <img
        class="gallery__image"
        src='${imagelist.preview}'
        data-source='${imagelist.original}'
        alt='${imagelist.description}'
      />
    </a>
  </li>`
  );
});
list.appendChild(fragment);

list.addEventListener("click", onCLick);
function onCLick(e) {
  lightbox.classList.add("is-open");
  lightbox.querySelector(".lightbox__image").src = e.target.dataset.source;
}

button.addEventListener("click", buttonClose);
function buttonClose(e) {
  lightbox.classList.remove("is-open");
}
