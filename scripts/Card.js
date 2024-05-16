
    export default class Card {
        constructor(name, url, toggleCardsZoomDisplay) {
            this._name = name;
            this._url = url;
            this._toggleCardsZoomDisplay = toggleCardsZoomDisplay;
       }

    _getTemplate() {
        const cardTemplate = document
        .querySelector('#cards')
        .content
        .querySelector('.cards__card')
        .cloneNode(true)
        return cardTemplate;
    }


    _setEventListeners() {
        this._cardItem.querySelector('.cards__cardLike').addEventListener("click", (event) =>{
            event.target.classList.toggle('cards__cardLike_active');
        });

        this._cardItem.querySelector('.cards__card-lixeira').addEventListener("click", (event) => {
            event.target.parentElement.remove()
        });

        this._cardItem.querySelector('.cards__card-img').addEventListener('click', (event) => {
            this._toggleCardsZoomDisplay(event.target.src)
        });
    }


    generateCard() {
        this._cardItem = this._getTemplate();
        this._cardItem.querySelector('.cards__card-img').setAttribute('src', this._url);
        this._cardItem.querySelector('.cards__card-img').setAttribute('alt', this._name);
        this._cardItem.querySelector('.cards__card-name').textContent = this._name;
        
        this._setEventListeners()
        return this._cardItem; 
          
    }
}

