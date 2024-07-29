
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, openClass, handleFormSubmit) {
        super(popupSelector, openClass);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('form');
        this._inputList = Array.from(this._form.querySelectorAll('input'));
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
