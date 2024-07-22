import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import Popup from './Popup.js';
import UserInfo from './UserInfo.js';
import {
    editProfile,
    formElement,
    inputName,
    inputExplorar,
    profileName,
    profileExplorer,
    allImages,
    addCards,
    popupCardsForm,
    cardPopupTitle,
    cardPopupLink
} from './utils.js';

// Instâncias de Popup
const profilePopup = new Popup('.popup', 'popup_change_display');
profilePopup.setEventListeners();

const cardsPopup = new Popup('.popupCards', 'popupCards_change_display');
cardsPopup.setEventListeners();

const cardZoom = new PopupWithImage('.imageDisplay', 'imageDisplay_change_display');
cardZoom.setEventListeners();

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    profileSelector: '.profile__explorer'
});

// Validação dos formulários
const profileFormValidator = new FormValidator('.popup__form');
profileFormValidator.enableValidation();

const cardsFormValidator = new FormValidator('.popupCards__form');
cardsFormValidator.enableValidation();

// Inicialização dos cartões
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
        (url, name) => cardZoom.open({ src: url, alt: name })
    );
    cardContainer.append(card.generateCard());
});

// Funções e EventListeners
editProfile.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputExplorar.value = userData.profile;
    profilePopup.open();
    resetProfileForm();
});

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    userInfo.setUserInfo({
        name: inputName.value,
        profile: inputExplorar.value
    });
    profilePopup.close();
});

addCards.addEventListener("click", () => {
    cardsPopup.open();
    resetCardsForm();
});

popupCardsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewCard();
    cardPopupTitle.value = '';
    cardPopupLink.value = '';
    cardsPopup.close();
});

function resetProfileForm() {
    const savePopup = document.querySelector(".popup__submit-save");
    inputName.value = '';
    inputExplorar.value = '';
    savePopup.classList.add('popup__submit-save_inactive');
    inputName.classList.remove('form-input_type_error');
    inputExplorar.classList.remove('form-input_type_error');
    const errorElements = document.querySelectorAll('.form-input-error');
    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
        errorElement.classList.remove('form-input-error_active');
    });
}

function resetCardsForm() {
    cardPopupTitle.value = '';
    cardPopupLink.value = '';
    const popupCardSave = document.querySelector(".popupCards__submit-save");
    popupCardSave.classList.add("popupCards__submit-save_inactive");
    cardPopupTitle.classList.remove('form-input_type_error');
    cardPopupLink.classList.remove('form-input_type_error');
    const errorElements = document.querySelectorAll('.form-input-error');
    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
        errorElement.classList.remove('form-input-error_active');
    });
}

function addNewCard() {
    const card = new Card(
        cardPopupTitle.value,
        cardPopupLink.value,
        (url, name) => cardZoom.open({ src: url, alt: name })
    );
    allImages.prepend(card.generateCard());
}
