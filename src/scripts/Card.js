
export default class Card {
    constructor({ name, link, likes, _id, owner, createdAt }, handleCardClick, handleDeleteClick, userId, api) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = _id;
        this._owner = owner;
        this._createdAt = createdAt;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._userId = userId;
        this._api = api
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
        this._toggleLike()
    });

    const deleteButton = this._cardItem.querySelector('.cards__card-lixeira');
    if(deleteButton) {
        deleteButton.addEventListener("click", () => {
            this._handleDeleteClick(this._id, this._cardItem); //passa o id e o elemento do cartão
        });
    }

    this._cardItem.querySelector('.cards__card-img').addEventListener('click', () => {
        this._handleCardClick( this._link, this._name);
    });
}

    _toggleLike(){
        const likeButton = this._cardItem.querySelector('.cards__cardLike');
        const likeCounterElement = this._cardItem.querySelector('.cards__like-counter');

        if (likeButton.classList.contains('cards__cardLike_active')){
            this._api.unlikeCard(this._id)
            .then((updatedCard) => {
            
                likeCounterElement.textContent = updatedCard.likes.length;
                likeButton.classList.remove('cards__cardLike_active');
            })
            .catch((err) => console.error(`Erro ao remover curtida: ${err}`));
        }else {
           
            this._api.likeCard(this._id)
            .then((updatedCard) => {
              
                likeCounterElement.textContent = updatedCard.likes.length;
                likeButton.classList.add('cards__cardLike_active');
            })
            .catch((err) => console.error(`Erro ao adicionar curtida: ${err}`));
        }
    }

generateCard() {
    this._cardItem = this._getTemplate();
    this._cardItem.querySelector('.cards__card-img').setAttribute('src', this._link);
    this._cardItem.querySelector('.cards__card-img').setAttribute('alt', this._name);
    this._cardItem.querySelector('.cards__card-name').textContent = this._name;

     this._cardItem.querySelector('.cards__like-counter').textContent = this._likes.length;
     this._cardItem.setAttribute('data-id', this._id); // Armazenando o _id no elemento
     this._cardItem.querySelector('.cards__card-owner').textContent = this._owner.name; // Nome do dono
     this._cardItem.querySelector('.cards__card-created').textContent = new Date(this._createdAt).toLocaleDateString(); // Data de criação

    if(this._owner._id !== this._userId) {
        this._cardItem.querySelector('.cards__card-lixeira').style.display = 'none';//remove o icone da lixeira
    }
 
    if(this._likes.some(like => like._id === this._userId)){
        this._cardItem.querySelector('.cards__cardLike').classList.add('cards__cardLike_active');
    }

    this._setEventListeners()
    return this._cardItem; 
      
}
}

