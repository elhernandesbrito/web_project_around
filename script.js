const editarPerfil = document.querySelector('.profile__edit');
const profile = document.querySelector('.profile');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__closeButton');
const submitSave = document.querySelector('.popup__submit-save');
const popupForm = document.querySelector('.popup__form');
const inputName = popupForm.querySelector('.popup__form-name');
const inputExplorar = popupForm.querySelector('.popup__form-Explorar');
const profileName = document.querySelector('.profile__name');
const profileExplorer = document.querySelector('.profile__explorer');
const header = document.querySelector('.header');
const elements = document.querySelector('.elements');
const copyright = document.querySelector('.copyright');
const cards = document.querySelector('.cards');
const card = cards.querySelector('.cards__card');
const like = document.querySelectorAll('.cards__card-like');
const addCards = document.querySelector('.profile__addButton-vetor');
const popupCards = document.querySelector('.popupCards');
const popupCardsForm = document.querySelector('.popupCards__form');
const popupCards__closeButton = document.querySelector('.popupCards__closeButton');
const popupCards__save = document.querySelector('.popupCards__submit-save');



editarPerfil.addEventListener('click', toggleFormDisplay)
closeButton.addEventListener('click', changeDisplayToNone )
submitSave.addEventListener('click', handleProfileFormSubmit)

function toggleFormDisplay() {
   popup.classList.toggle('popup_change_display')
}

function changeDisplayToNone() {
   popup.classList.remove('popup_change_display')
}

function handleProfileFormSubmit(event) {
   event.preventDefault();
   profileName.textContent =  inputName.value;
   profileExplorer.textContent = inputExplorar.value;
   inputName.value = '';
   inputExplorar.value = '';
   changeDisplayToNone();
}

addCards.addEventListener('click', toggleCardsDisplay)
popupCards__closeButton.addEventListener('click', changeCardsToNone)
/*popupCards__save.addEventListener('click', handleProfileCardsSubmit)*/

function toggleCardsDisplay() {
   popupCards.classList.toggle('popupCards_change_display')
}

function changeCardsToNone() {
   popupCards.classList.remove('popupCards_change_display')
}









