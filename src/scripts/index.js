import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import { cardZoom } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {
    

    /* const cardZoom = new PopupWithImage('.imageDisplay', 'imageDisplay_change_display');
     cardZoom.setEventListeners();*/

    const profileFormValidator = new FormValidator('.popup__form');
    profileFormValidator.enableValidation();

    const cardsFormValidator = new FormValidator('.popupCards__form');
    cardsFormValidator.enableValidation();

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
            name: "Parque Nacional da Vanoise",
            url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
        },
        {
            name: "Lago di Braies",
            url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
        },
    ];

    const cardContainer = document.querySelector(".rechardCards");
  

    initialCards.forEach((initialCard) => {
        const card = new Card(
            initialCard.name,
            initialCard.url,
            (url, name ) => cardZoom.open({ src: url, alt: name })
        );
        cardContainer.append(card.generateCard());
    });
  
});

