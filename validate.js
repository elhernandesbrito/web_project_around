
const showInputErrorProfile = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.form__input-${inputElement.name}`);
  inputElement.classList.add("form-input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form-input-error_active");
};

const hideInputErrorProfile = (formElement, inputElement) => {
const errorElement = formElement.querySelector(`.form__input-${inputElement.name}`);

  inputElement.classList.remove('form-input_type_error');
  errorElement.classList.remove("form-input-error_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputErrorProfile(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputErrorProfile(formElement, inputElement);
  }
};

  const setEventListeners = (formElement) => {
     const inputList = Array.from(formElement.querySelectorAll(".name-input"));
   /*  toggleButtonState(inputList, submitSave);/*testar*/

         inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
        isValid(formElement, inputElement);
        toggleButtonStateProfile(inputList, savePopup);
        toggleButtonStateCards(inputList, popupCardSave);  
      });
    });
  }; 

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;  
    });
  };

  const toggleButtonStateProfile = (inputList, savePopup) => {
      if(hasInvalidInput(inputList)) {
      savePopup.classList.add('popup__submit-save_inactive');
      
    }else {
      savePopup.classList.remove('popup__submit-save_inactive');
      
    }
  };

  const toggleButtonStateCards = (inputList, popupCardSave) => {
         if(hasInvalidInput(inputList)) {
      popupCardSave.classList.add('popupCards__submit-save_inactive');
       
     }else {
      popupCardSave.classList.remove('popupCards__submit-save_inactive');
       
     }
   };

  const enableValidation = () => {
     const formList = Array.from(document.querySelectorAll(".form"));
       formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
        setEventListeners(formElement);
    });
  };
 

  enableValidation({
      formElement: ".form",
      inputElement: ".name-input",
      savePopup: ".popup__submit-save",
      inactiveButtonClass: ".popup__submit-save_inactive",
      popupCardSave:".popupCards__submit-save",
      inactiveButtonClassCard:".popupCards__submit-save_inactive",
      errorElement: ".form-input-error"
   
  }) 
  