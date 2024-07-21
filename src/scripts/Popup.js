export default class Popup {
    constructor(popupSelector, openClass) {
        this._popup = document.querySelector(popupSelector);
        this._openClass = openClass;
        this._closeButton = this._popup.querySelector('.popup__closeButton') || this._popup.querySelector('.popupCards__closeButton') || this._popup.querySelector('.imageDisplay__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popup.classList.add(this._openClass);
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOverlayClose);
    }

    close() {
        this._popup.classList.remove(this._openClass);
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleOverlayClose);
    }

    setEventListeners() {
        if (this._closeButton) {
            this._closeButton.addEventListener('click', () => {
                this.close();
            });
        }
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(event) {
        if (event.target === this._popup) {
            this.close();
        }
    }
}
