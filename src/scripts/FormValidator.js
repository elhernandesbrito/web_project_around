
export default class FormValidator {
    constructor(formSelector) {
        
        this._form = document.querySelector(formSelector);
        this._inputList = Array.from(this._form.querySelectorAll('.name-input'));
        this._submitButton = this._form.querySelector('.saveButton');
        this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', this._handleInput.bind(this));
        });
        this._submitProfileInactive = 'popup__submit-save_inactive';
        this._submitCardsInactive = 'popupCards__submit-save_inactive';
    }
 
    _showInputError(inputElement, errorMessage) {
        const errorElement = inputElement.parentElement.querySelector('.form-input-error');
        inputElement.classList.add('form-input_type_error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('form-input-error_active');
    }

    _hideInputError(inputElement) {
        const errorElement = inputElement.parentElement.querySelector('.form-input-error');
        inputElement.classList.remove('form-input_type_error');
        errorElement.textContent = '';
        errorElement.classList.remove('form-input-error_active');
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
        this._toggleButtonState();
    }

    _toggleButtonState() {
        const isFormValid = this._inputList.every(inputElement => inputElement.validity.valid);
        if(isFormValid) {
            this._submitButton.classList.remove(this._submitProfileInactive);
            this._submitButton.classList.remove(this._submitCardsInactive);
        }else {
            this._submitButton.classList.add(this._submitProfileInactive);
            this._submitButton.classList.add(this._submitCardsInactive);
        }
    }

    _handleInput(event) {
        const inputElement = event.target;
        this._checkInputValidity(inputElement);
        
    }
    enableValidation() {
            this._form.addEventListener('submit', (event) => {
                event.preventDefault(); 
            });
            this._toggleButtonState(); 
            this._inputList.forEach(inputElement => {
                inputElement.addEventListener('input', () => {
                    this._checkInputValidity(inputElement);
                });
            });
        }

    }


    