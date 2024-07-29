
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
