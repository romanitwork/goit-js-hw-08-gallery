"use strict";

import images from "./gallery-items.js";

const fragment = document.createDocumentFragment();
const list = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector(".lightbox__button");

images.forEach(imagelist => {
  const newLi = document.createElement("li");
  newLi.classList.add("gallery__item");
  newLi.insertAdjacentHTML(
    "beforeend",
    `
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
  `
  );
  fragment.appendChild(newLi);
});
list.appendChild(fragment);

list.addEventListener("click", onCLick);
function onCLick(e) {
  console.log(e);
  if (e.target.classList.contains("gallery__image")) {
    lightbox.classList.add("is-open");
    document.querySelector(".lightbox__image").src = e.target.dataset.source;
    document.addEventListener("keydown", escClose);
    lightbox.addEventListener("click", buttonClose);
  }
}

function buttonClose(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    lightbox.classList.remove("is-open");
    lightbox.removeEventListener("click", buttonClose);
    document.removeEventListener("keydown", escClose);
  }
}

function escClose(e) {
  if (e.keyCode === 27) {
    lightbox.classList.remove("is-open");
    document.removeEventListener("keydown", escClose);
    lightbox.removeEventListener("click", buttonClose);
  }
}
