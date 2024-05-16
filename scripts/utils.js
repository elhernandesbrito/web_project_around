
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { toggleCardsZoomDisplay } from "./index.js";

const editProfile = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__closeButton");
const formElement = document.querySelector(".form");
const savePopup = document.querySelector(".popup__submit-save");
const inputName = formElement.querySelector(".popup__form-name");
const inputExplorar = formElement.querySelector(".popup__form-Explorar");
const profileName = document.querySelector(".profile__name");
const profileExplorer = document.querySelector(".profile__explorer");
const allImages = document.querySelector(".rechardCards");
const addCards = document.querySelector(".profile__addButton");
const popupCards = document.querySelector(".popupCards");
const popupCards__closeButton = popupCards.querySelector(".popupCards__closeButton");
const popupCardsForm = document.querySelector('.popupCards__form');
const cardPopupTitle = popupCardsForm.querySelector(".popupCards__form-name");
const cardPopupLink = popupCardsForm.querySelector(".popupCards__form-link");
const popupCardSave = popupCardsForm.querySelector(".popupCards__submit-save");
const cardZoom = document.querySelector(".imageDisplay");
const imgZoom = cardZoom.querySelector(".imageDisplay__img");

editProfile.addEventListener('click', openDisplayProfile)

function EscapeKey(event) {
  if (event.key === 'Escape') {
    closeProfileDisplay()
    closeCardsDisplay()
  }
}

function openDisplayProfile() {
 popup.classList.toggle('popup_change_display');
 savePopup.classList.add('popup__submit-save_inactive')
 inputName.value = '';
 inputExplorar.value = '';
 inputName.classList.remove('form-input_type_error');
 inputExplorar.classList.remove('form-input_type_error');
 const errorElements = document.querySelectorAll('.form-input-error');
  errorElements.forEach(errorElement => {
   errorElement.textContent = '';
    errorElement.classList.remove('form-input-error_active');
  });
  document.addEventListener('keypress', EscapeKey)   
  popup.addEventListener('click', function(e) {
    if(e.target === popup){
      popup.classList.remove('popup_change_display')
    }
  })
}

closeButton.addEventListener('click', closeProfileDisplay)

function closeProfileDisplay() {
  popup.classList.remove('popup_change_display')
  document.removeEventListener('keypress', EscapeKey)
}

addCards.addEventListener("click", openCardsDisplay);

function openCardsDisplay() {
  popupCards.classList.toggle("popupCards_change_display");
  popupCardSave.classList.add("popupCards__submit-save_inactive");
  cardPopupTitle.value = '';
  cardPopupLink.value = '';
  cardPopupTitle.classList.remove('form-input_type_error');
  cardPopupLink.classList.remove('form-input_type_error');
  const errorElements = document.querySelectorAll('.form-input-error');
  errorElements.forEach(errorElement => {
  errorElement.textContent = '';
  errorElement.classList.remove('form-input-error_active')
});
  document.addEventListener('keypress', EscapeKey)
  popupCards.addEventListener("click", function (e) {
    if (e.target === popupCards) {
      popupCards.classList.remove("popupCards_change_display");
    }
  });
}

popupCards__closeButton.addEventListener('click', closeCardsDisplay);

 function closeCardsDisplay() {
      popupCards.classList.remove('popupCards_change_display')
      document.removeEventListener('keypress', EscapeKey)

  }

  formElement.addEventListener('submit', submitFormProfile)

  
  function submitFormProfile(event) {
    event.preventDefault();
    profileName.textContent =  inputName.value;
    profileExplorer.textContent = inputExplorar.value;
    closeProfileDisplay();
  }
  
  popupCardsForm.addEventListener("submit", insertCards)

  function addNewCard() {
      const card = new Card(
      cardPopupTitle.value,
      cardPopupLink.value,
      toggleCardsZoomDisplay
    )
    allImages.prepend(card.generateCard())
}

  function insertCards(event){
    event.preventDefault();
    addNewCard()
    cardPopupTitle.value = '';
    cardPopupLink.value = '';
    closeCardsDisplay();
  }


document.addEventListener('DOMContentLoaded', () => {
    const profileFormValidator = new FormValidator('.popup__form');
    profileFormValidator.enableValidation();
    const cardsFormValidator = new FormValidator('.popupCards__form');
    cardsFormValidator.enableValidation();
});

