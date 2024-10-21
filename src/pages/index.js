    import './index.css';
    import Card from '../scripts/Card.js';
    import FormValidator from '../scripts/FormValidator.js';
    import PopupWithImage from '../scripts/PopupWithImage.js';
    import PopupWithForm from '../scripts/PopupWithForm.js';
    import UserInfo from '../scripts/UserInfo.js';
    import Section from '../scripts/Section.js';
    import Api from '../scripts/Api.js';
    import PopupWithConfirmation from '../scripts/PopupWithConfirmation.js';
    import {
        editProfile,
        inputName,
        inputExplorar,
        addCards,
        cardPopupTitle,
        cardPopupLink,
        avatarUpdateForm
    } from '../scripts/utils.js';

    const api = new Api({
        baseUrl: 'https://around.nomoreparties.co/v1/web-ptbr-cohort-13',
        headers: {
            authorization: '97e95232-0267-49b3-97cb-91d7637baff3',
            'Content-Type': 'application/json'
        }
    });

    let userId; 

    export function renderLoading(isLoading, buttonElement, initialText = 'Salvar') {
        if (isLoading) {
            buttonElement.textContent = 'Salvando...';
        } else {
            buttonElement.textContent = initialText;
        }
    }

    const userInfo = new UserInfo({
        nameSelector: '.profile__name',
        profileSelector: '.profile__explorer',
        avatarSelector: '.profile__avatar'
    });

    api.getUserInfo()
        .then(userData => {
            userId = userData._id; 
            userInfo.setUserInfo({
                name: userData.name,
                profile: userData.about,
                avatar: userData.avatar
            });
            document.querySelector('.profile__avatar').src = userData.avatar;
        })
        .catch(err => {
            console.error(err);
        });

    let initialCards = [];
    const cardSection = new Section({
        items: initialCards,
        renderer: (initialCard) => {
            const cardElement = createCard(initialCard);
            cardContainer.append(cardElement);
        }
    }, '.rechardCards');

    api.getInitialCards()
        .then(cards => {
            const cardSection = new Section({
                items: cards,
                renderer: (cardData) => {
                    const cardElement = createCard(cardData);
                    cardContainer.append(cardElement);
                }
            }, '.rechardCards');
            cardSection.render();
        })
        .catch(err => {
            console.error(err);
        });

    const profilePopup = new PopupWithForm('.popup', 'popup_change_display', (formData) => {
        const submitButton = document.querySelector('.popup__submit-save');
        renderLoading(true, submitButton);

        api.updateUserInfo({
            name: formData.name,
            about: formData.explorar
        })
        .then(updatedData => {
            userInfo.setUserInfo({
                name: updatedData.name,
                profile: updatedData.about,
                avatar: updatedData.avatar
            });
            profilePopup.close();
        })
        .catch(err => {
            console.error(`Erro ao atualizar o perfil: ${err}`);
        })
        .finally(() => {
            renderLoading(false, submitButton);
        });
    });
    profilePopup.setEventListeners();

    const cardsPopup = new PopupWithForm('.popupCards', 'popupCards_change_display', (formData) => {
        const submitButton = document.querySelector('.popupCards__submit-save');
        renderLoading(true, submitButton);

        api.addNewCard({
        name: formData.name,
        link: formData.link
        })
        .then(newCardData => {
            const cardElement = createCard(newCardData);
            cardSection.addItem(cardElement);
            cardsPopup.close();
        })
        .catch(err => {
            console.error(`Erro ao adicionar o cartão: ${err}`);
        })
        .finally(() => {
            renderLoading(false, submitButton);
        });
    });
    cardsPopup.setEventListeners();

    const cardZoom = new PopupWithImage('.imageDisplay', 'imageDisplay_change_display');
    cardZoom.setEventListeners();

    function handleDeleteClick(cardId, cardElement) {
        deleteConfirmationPopup.open(); // Abrir o popup de confirmação

        deleteConfirmationPopup.setSubmitAction(() => {
            return api.deleteCard(cardId) // Chama a API para deletar o cartão
                .then(() => {
                    cardElement.remove(); // Remove o cartão do DOM
                    deleteConfirmationPopup.close(); // Fecha o popup de confirmação
                })
                .catch(err => console.error(`Erro ao excluir o cartão: ${err}`));
        });
    }

    const deleteConfirmationPopup = new PopupWithConfirmation('.popupWithConfirmation', 'popupWithConfirmation_change_display');
    deleteConfirmationPopup.setEventListeners();

    function createCard(cardData) {
        const card = new Card(
            cardData,
            (url, name) => cardZoom.open({ src: url, alt: name }),
            handleDeleteClick,
            userId,
            api
        );
        return card.generateCard();
    }

    const cardContainer = document.querySelector(".rechardCards");

    function resetProfileForm() {
        const savePopup = document.querySelector(".popup__submit-save");
        inputName.value = '';
        inputExplorar.value = '';
        savePopup.classList.add('popup__submit-save_inactive');
        inputName.classList.remove('form-input_type_error');
        inputExplorar.classList.remove('form-input_type_error');
        const errorElements = document.querySelectorAll('.form-input-error');
        errorElements.forEach(errorElement => {
            errorElement.textContent = '';
            errorElement.classList.remove('form-input-error_active');
        });
    }

    function resetCardsForm() {
        cardPopupTitle.value = '';
        cardPopupLink.value = '';
        const popupCardSave = document.querySelector(".popupCards__submit-save");
        popupCardSave.classList.add("popupCards__submit-save_inactive");
        popupCardSave.setAttribute('disabled', 'disabled');
        cardPopupTitle.classList.remove('form-input_type_error');
        cardPopupLink.classList.remove('form-input_type_error');
        const errorElements = document.querySelectorAll('.form-input-error');
        errorElements.forEach(errorElement => {
            errorElement.textContent = '';
            errorElement.classList.remove('form-input-error_active');
        });
    }

    editProfile.addEventListener('click', () => {
        const userData = userInfo.getUserInfo();
        inputName.value = userData.name;
        inputExplorar.value = userData.profile;
        profilePopup.open();
        resetProfileForm();
    });

    addCards.addEventListener("click", () => {
        cardsPopup.open();
        resetCardsForm();
    });

    const avatarUpdatePopup = new PopupWithForm('.popupAvatarUpdate', 'popupAvatarUpdate_change_display', (formData) => {
        const submitButton = document.querySelector('.popupAvatarUpdate__submit-save');
        renderLoading(true, submitButton);

        api.updateAvatar({
            avatar: formData.link
        })
        .then(updatedData => {
            userInfo.setUserInfo({
                avatar: updatedData.avatar
            });
            document.querySelector('.profile__avatar').src = updatedData.avatar;
            avatarUpdatePopup.close();
        })
        .catch(err => {
            console.error(`Erro ao atualizar o avatar: ${err}`);
        })
        .finally(() => {
            renderLoading(false, submitButton);
        });
    });
    avatarUpdatePopup.setEventListeners();

    const editAvatarButton = document.querySelector('.profile__editAvatar');
    editAvatarButton.addEventListener('click', () => {
        avatarUpdatePopup.open();
    });

    const profileFormValidator = new FormValidator('.popup__form');
    profileFormValidator.enableValidation();

    const cardsFormValidator = new FormValidator('.popupCards__form');
    cardsFormValidator.enableValidation();

    const avatarFormValidator = new FormValidator('.popupAvatarUpdate__form');
    avatarFormValidator.enableValidation();
