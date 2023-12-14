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

const AllImages = document.querySelector('.rechardCards');
const cardTemplate = document.querySelector('.cards');
const CardItem = cardTemplate.querySelector('.cards__card');
const cardName = document.querySelector('.cards__card-name');
const cardImage = document.querySelector('.cards__card-img');

const addCards = document.querySelector('.profile__addButton-vetor');





const cardLixeira = document.querySelectorAll('.cards__card-lixeira')
const cardInteration = document.querySelectorAll('.cards__card_interation')

const like = document.querySelectorAll('.cards__card-like');
const popupCards = document.querySelector('.popupCards');
const popupCardsForm = document.querySelector('.popupCards__form');
const popupCards__closeButton = document.querySelector('.popupCards__closeButton');
const popupCards__save = document.querySelector('.popupCards__submit-save');
const cardPopupTitle = document.querySelector('.popupCards__form-name');
const cardPopupLink = document.querySelector('.popupCards__form-Link');


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

function createCard(card) {
  const cardTemplate = document.querySelector('.cards').content
  const CardItem = cardTemplate.querySelector('.cards__card').cloneNode(true)
  CardItem.querySelector('.cards__card-name').textContent = card.name
  CardItem.querySelector('.cards__card-img').setAttribute('src', card.link)
  CardItem.querySelector('.cards__card-img').setAttribute('alt', card.name)
  
  return CardItem
}

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
   
    
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
 
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
   
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
   }
]

for (const initialCard of initialCards) {
  const card = createCard(initialCard)
  AllImages.append(card)
  
}
function addNewCard() {
  const cardPopupTitle = document.querySelector('.popupCards__form-name');
  const cardPopupLink = document.querySelector('.popupCards__form-Link');

  if(cardPopupTitle.value == '' || cardPopupLink.link == '' ) {
    alert('Preencha corretamente')
    return
  }
    const card = createCard({
      name: cardPopupTitle.value,
      link: cardPopupLink.link,
      
    })
    AllImages.after(card)

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

function insertCards(event){
  event.preventDefault();
  addNewCard()
  changeCardsToNone();
}
















