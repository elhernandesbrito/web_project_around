
import './index.css';
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import Section from '../scripts/Section.js';
import Api from '../scripts/Api.js';
import {
    editProfile,
    inputName,
    inputExplorar,
    addCards,
    cardPopupTitle,
    cardPopupLink
} from '../scripts/utils.js';

const api = new Api ({
    baseUrl:'https://around.nomoreparties.co/v1/web-ptbr-cohort-13/users/me',
    headers: {
        authorization: '09ac6562-9d55-490a-8075-542d7a17a753',
        'Content-Type': 'application/json'  
    }
})
//let initialCards=[];

api.getInitialCards()
.then(cards => {
    initialCards= cards;
    console.log(initialCards);

})
.catch(err => {
    console.error(err);
});




// Instância da classe UserInfo
const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    profileSelector: '.profile__explorer'
});

const profilePopup = new PopupWithForm('.popup', 'popup_change_display', (formData) => {
    userInfo.setUserInfo({
        name: formData.name,
        profile: formData.explorar
    });
    profilePopup.close();
});
profilePopup.setEventListeners();

const cardsPopup = new PopupWithForm('.popupCards', 'popupCards_change_display', (formData) => {
   const cardElement = createCard(formData.name, formData.link);
  cardSection.addItem(cardElement);
  cardsPopup.close();
});
cardsPopup.setEventListeners();

const cardZoom = new PopupWithImage('.imageDisplay', 'imageDisplay_change_display');
cardZoom.setEventListeners();

const profileFormValidator = new FormValidator('.popup__form');
profileFormValidator.enableValidation();

const cardsFormValidator = new FormValidator('.popupCards__form');
cardsFormValidator.enableValidation();


function createCard(name, link) {
    const card = new Card(
        name,
        link,
        (url, name) => cardZoom.open({ src: url, alt: name })
    );
    return card.generateCard();
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
        name: "Parque Nacional da Vanoise",
        url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
];

const cardContainer = document.querySelector(".rechardCards");

const cardSection = new Section({
    items: initialCards,
    renderer: (initialCard) => {
        const cardElement = createCard(initialCard.name, initialCard.url);
        cardContainer.append(cardElement);
    }
}, '.rechardCards');

cardSection.render();


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
    popupCardSave.setAttribute('disabled', 'disabled');
    cardPopupTitle.classList.remove('form-input_type_error');
    cardPopupLink.classList.remove('form-input_type_error');
    const errorElements = document.querySelectorAll('.form-input-error');
    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
        errorElement.classList.remove('form-input-error_active');
    });
}

editProfile.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    inputName.value = userData.name;
    inputExplorar.value = userData.profile;
    profilePopup.open();
    resetProfileForm();
});

addCards.addEventListener("click", () => {
    cardsPopup.open();
    resetCardsForm();
});
