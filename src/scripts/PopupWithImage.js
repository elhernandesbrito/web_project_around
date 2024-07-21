
/*Crie a classe PopupWithImage como uma classe filha de Popup. 
Essa classe precisa alterar o método pai open(). No método open() da classe PopupWithImage, 
você precisa adicionar uma imagem ao pop-up e o atributo src da imagem correspondente junto 
com uma legenda para a imagem.*/

import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, openClass) {
        super(popupSelector, openClass);
        this._imageElement = this._popup.querySelector('.imageDisplay__img');
        this._imageTitle = this._popup.querySelector('.imageDisplay__title'); 
        
    }

    open({ src, alt }) {
        this._imageElement.src = src;
        this._imageElement.alt = alt;
        this._imageTitle.textContent = alt;
        super.open();
    }    
}
