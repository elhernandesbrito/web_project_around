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

const AllImages = document.querySelector('.rechardCards');

const addCards = document.querySelector('.profile__addButton-cards');

const popupCards = document.querySelector('.popupCards');
const popupCards__closeButton = popupCards.querySelector('.popupCards__closeButton');
const popupCardsForm = popupCards.querySelector('.popupCards__form');
const cardPopupTitle = popupCardsForm.querySelector('.popupCards__form-name');
const cardPopupLink = popupCardsForm.querySelector('.popupCards__form-Link');
const popupCards__save = popupCardsForm.querySelector('.popupCards__submit-save');
const cardZoom = document.querySelector('.cards__zoom-Display');
const CloseZoon = document.querySelector('.cards__zoom-close');
const ImgZoom = cardZoom.querySelector('.cards__zoom-img');

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
    const CardItem = cardTemplate.querySelector('.cards__card').cloneNode(true)
    const cardImage = CardItem.querySelector('.cards__card-img');
    const cardLixeira = CardItem.querySelector('.cards__card-lixeira')
    const cardInteration = CardItem.querySelector('.cards__card_interation')
    const cardName = CardItem.querySelector('.cards__card-name');
    const like = CardItem.querySelector('.cards__cardLike')

    CardItem.querySelector('.cards__card-img').setAttribute('src', card.url);
    CardItem.querySelector('.cards__card-img').setAttribute('alt', card.name);
    CardItem.querySelector('.cards__card-name').textContent = card.name;

    cardLixeira.addEventListener('click', (event) => {
      event.target.parentElement.remove()
    })
    
    like.addEventListener('click', function(event) {
      event.target.classList.toggle('cards__cardLike_active');
    })
  
    cardImage.addEventListener('click', toggleCardsZoomDisplay)
    CloseZoon.addEventListener('click',CardsZoomDisplayToNone )

    function toggleCardsZoomDisplay() {
      cardZoom.classList.toggle('cards__zoom-Display_change_display');

        let imgElement = document.createElement("img");
        imgElement.src = cardImage.src;
        ImgZoom.src = imgElement.src;
    }

    function CardsZoomDisplayToNone () {
      cardZoom.classList.remove('cards__zoom-Display_change_display')
    }

   return CardItem
  }

  for (const initialCard of initialCards) {
    const card = createCard(initialCard)
    AllImages.append(card)
  }

  addCards.addEventListener('click', toggleCardsDisplay)
  popupCards__closeButton.addEventListener('click', changeCardsToNone)
  popupCards__save.addEventListener('click', insertCards)

  function toggleCardsDisplay() {
    popupCards.classList.toggle('popupCards_change_display')
  }

  function changeCardsToNone() {
    popupCards.classList.remove('popupCards_change_display')
  }

  function addNewCard() {
    if(cardPopupTitle.value == '' || cardPopupLink.value == '' ) {
      alert('Preencha corretamente')
      return
    }

    const card = createCard({
      name: cardPopupTitle.value,
      url: cardPopupLink.value,
      
    })
    AllImages.prepend(card)
}

    function insertCards(event){
    event.preventDefault();
    addNewCard()
    cardPopupTitle.value = '';
    cardPopupLink.value = '';
    changeCardsToNone();
  }


  


   












