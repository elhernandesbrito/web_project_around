const editProfile = document.querySelector('.profile__edit');
const profile = document.querySelector('.profile');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__closeButton');

const formElement = document.querySelector('.form');

const savePopup = document.querySelector('.popup__submit-save');

const inputName = formElement.querySelector('.popup__form-name');
const inputExplorar = formElement.querySelector('.popup__form-Explorar');
const profileName = document.querySelector('.profile__name');
const profileExplorer = document.querySelector('.profile__explorer');
const header = document.querySelector('.header');
const allImages = document.querySelector('.rechardCards');
const addCards = document.querySelector('.profile__addButton');


const popupCards = document.querySelector('.popupCards');
const popupCards__closeButton = popupCards.querySelector('.popupCards__closeButton');
const popupCardsForm = popupCards.querySelector('.popupCards__form');
const cardPopupTitle = popupCardsForm.querySelector('.popupCards__form-name');
const cardPopupLink = popupCardsForm.querySelector('.popupCards__form-link');
const popupCardSave = popupCardsForm.querySelector('.popupCards__submit-save');
const cardZoom = document.querySelector('.imageDisplay');
const closeZoon = document.querySelector('.imageDisplay__close');
const imgZoom = cardZoom.querySelector('.imageDisplay__img');

editProfile.addEventListener('click', toggleFormDisplay)
closeButton.addEventListener('click', changeDisplayToNone )
formElement.addEventListener('submit', handleProfileFormSubmit)


  function EscapeKey(event) {
    if (event.key === 'Escape') {
      changeDisplayToNone()
      changeCardsToNone()
    }
  }

  function toggleFormDisplay() {
    popup.classList.toggle('popup_change_display');
    savePopup.classList.add('popup__submit-save_inactive')
    document.addEventListener('keypress', EscapeKey)   
    popup.addEventListener('click', function(e) {
      if(e.target === popup){
        popup.classList.remove('popup_change_display')
      }
    })
  }

  function changeDisplayToNone() {
    popup.classList.remove('popup_change_display')
    document.removeEventListener('keypress', EscapeKey)
    }

  function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent =  inputName.value;
    profileExplorer.textContent = inputExplorar.value;
    changeDisplayToNone();

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
    }
  ]

    function createCard(card) {
      const cardTemplate = document.querySelector('#cards').content
      const cardItem = cardTemplate.querySelector('.cards__card').cloneNode(true)
      const cardImage = cardItem.querySelector('.cards__card-img');
      const cardLixeira = cardItem.querySelector('.cards__card-lixeira')
      const like = cardItem.querySelector('.cards__cardLike')

      cardItem.querySelector('.cards__card-img').setAttribute('src', card.url);
      cardItem.querySelector('.cards__card-img').setAttribute('alt', card.name);
      cardItem.querySelector('.cards__card-name').textContent = card.name;

      like.addEventListener('click', function(event) {
        event.target.classList.toggle('cards__cardLike_active');
      })
    
      cardImage.addEventListener('click', toggleCardsZoomDisplay)
      closeZoon.addEventListener('click',CardsZoomDisplayToNone )

      function toggleCardsZoomDisplay() {
        cardZoom.classList.toggle('imageDisplay_change_display');
          let imgElement = document.createElement("img");
          imgElement.src = cardImage.src;
          imgZoom.src = imgElement.src;
      }

      function CardsZoomDisplayToNone () {
        cardZoom.classList.remove('imageDisplay_change_display')
      }

      cardLixeira.addEventListener('click', (event) => {
        event.target.parentElement.remove()
      })

      return cardItem
    }

    for (const initialCard of initialCards) {
      const card = createCard(initialCard)
      allImages.append(card)
    }

    addCards.addEventListener('click', toggleCardsDisplay)
    popupCards__closeButton.addEventListener('click', changeCardsToNone)
    popupCardsForm.addEventListener("submit", insertCards)

    function toggleCardsDisplay() {
      popupCards.classList.toggle('popupCards_change_display')
      popupCardSave.classList.add('popupCards__submit-save_inactive')

      document.addEventListener('keypress', EscapeKey)
      popupCards.addEventListener('click', function(e) {
        if(e.target === popupCards){
          popupCards.classList.remove('popupCards_change_display')
        }
      })
    }

    function changeCardsToNone() {
      popupCards.classList.remove('popupCards_change_display')
      document.removeEventListener('keypress', EscapeKey)

    }

    function addNewCard() {
    

      const card = createCard({
        name: cardPopupTitle.value,
        url: cardPopupLink.value,
      })
      allImages.prepend(card)
  }

      function insertCards(event){
      event.preventDefault();
      addNewCard()
      cardPopupTitle.value = '';
      cardPopupLink.value = '';
      changeCardsToNone();
    }