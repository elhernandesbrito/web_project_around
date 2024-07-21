


import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
//import { handleCardClick } from "./index.js";
import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";

// Seletores
const editProfile = document.querySelector(".profile__edit");
const formElement = document.querySelector(".form");
const inputName = formElement.querySelector(".popup__form-name");
const inputExplorar = formElement.querySelector(".popup__form-Explorar");
const profileName = document.querySelector(".profile__name");
const profileExplorer = document.querySelector(".profile__explorer");
const allImages = document.querySelector(".rechardCards");
const addCards = document.querySelector(".profile__addButton");
const popupCardsForm = document.querySelector('.popupCards__form');
const cardPopupTitle = popupCardsForm.querySelector(".popupCards__form-name");
const cardPopupLink = popupCardsForm.querySelector(".popupCards__form-link");

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
})

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
  })
  //profileName.textContent = inputName.value;
  //profileExplorer.textContent = inputExplorar.value;
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
    //  (src, alt) => cardZoom.open({ src, alt }) // Ajuste na chamada se não der certo apaga o debaixo e usa essa linha
    (url, name) => cardZoom.open({ src: url, alt: name }) // Ajuste na chamada

  );
  allImages.prepend(card.generateCard());
}


document.addEventListener('DOMContentLoaded', () => {
    const profileFormValidator = new FormValidator('.popup__form');
    profileFormValidator.enableValidation();
    const cardsFormValidator = new FormValidator('.popupCards__form');
    cardsFormValidator.enableValidation();
})

export {cardZoom};