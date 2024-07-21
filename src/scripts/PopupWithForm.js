// PopupWithForm.js

/*
Crie PopupWithForm como uma classe filha de Popup. A classe PopupWithForm deve atender aos seguintes requisitos:

    Possuir a função de retorno de chamada do envio do formulário como parâmetro do construtor, 
    assim como o seletor do pop-up.
    Armazenar um método privado chamado _getInputValues() que coleta dados de todos os campos de entrada.
    Modificar o método pai setEventListeners(). O método setEventListeners() da classe PopupWithForm precisa 
    adicionar o manipulador de eventos Submit ao formulário e o ouvinte de eventos click para o ícone de fechamento.
    Modificar o método pai close() para redefinir o formulário assim que o pop-up for fechado.

Criar uma instância da classe PopupWithForm para cada pop-up.
*/

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, openClass, handleFormSubmit) {
        super(popupSelector, openClass);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('form');
        this._inputList = Array.from(this._form.querySelectorAll('input'));
    }

    // Método privado para coletar todos os valores dos campos de entrada
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    // Modificar o método setEventListeners
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    // Modificar o método close para redefinir o formulário
    close() {
        super.close();
        this._form.reset();
    }
}
