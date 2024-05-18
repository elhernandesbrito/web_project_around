import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const formElement = document.querySelector(".form");
const popupCards = document.querySelector(".popupCards");
const popupCardsForm = document.querySelector('.popupCards__form');
const cardZoom = document.querySelector(".imageDisplay");
const closeZoon = document.querySelector(".imageDisplay__close");
const imgZoom = cardZoom.querySelector(".imageDisplay__img");
const imgZoonTitle = cardZoom.querySelector(".imageDisplay__title");

export function toggleCardsZoomDisplay(imgElement, cardName) {
  cardZoom.classList.toggle("imageDisplay_change_display");
  imgZoom.src = imgElement;
  imgZoom.alt = cardName;
  imgZoonTitle.textContent = cardName;  
}

const initialCards = [
  {
    name: "Vale de Yosemite",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


for (const initialCard of initialCards) {
  const card = new Card(
    initialCard.name,
    initialCard.url,
    toggleCardsZoomDisplay
  );
  document.querySelector(".rechardCards").append(card.generateCard());
}

closeZoon.addEventListener("click", CardsZoomDisplayToNone);

function CardsZoomDisplayToNone() {
  cardZoom.classList.remove("imageDisplay_change_display");
}


document.addEventListener('DOMContentLoaded', () => {
    const profileFormValidator = new FormValidator('.popup__form');
    profileFormValidator.enableValidation();
    const cardsFormValidator = new FormValidator('.popupCards__form');
    cardsFormValidator.enableValidation();
});

