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

export {
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
};