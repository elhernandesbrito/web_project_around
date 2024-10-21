import Popup from "./Popup";
import { renderLoading } from "../pages/index.js";

export default class PopupWithConfirmation extends Popup {

constructor(PopupSelector, openClass) {
    super(PopupSelector, openClass);
    this._confirmButton = this._popup.querySelector('.popupWithConfirmation__submit-save');
}                                                       
setSubmitAction(action) {
    this._confirmCallback = action;
}

setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener('click', (evt) => {
        evt.preventDefault();

        renderLoading(true, this._confirmButton, 'SIM');
        this._confirmCallback()
        .finally(() => {
            renderLoading(false, this._confirmButton, 'SIM');
        });
    });
}
}