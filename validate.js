
const showInputErrorProfile = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.input__${inputElement.name}-message`);
  inputElement.classList.add("form-input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form-input-error_active");
};

const hideInputErrorProfile = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.input__${inputElement.name}-message`);
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
     toggleButtonState(inputList, submitSave);

         inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, submitSave);
      });
    });
  }; 

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;  
    });
  };

  const toggleButtonState = (inputList, submitSave) => {
     (hasInvalidInput(inputList));
    if(hasInvalidInput(inputList)) {
      submitSave.classList.add('popup__submit-save_inactive');
    }else {
      submitSave.classList.remove('popup__submit-save_inactive');
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
      submitSave: ".popup__submit-save",
      inactiveButtonClass: ".popup__submit-save_inactive",
      errorElement: ".form-input-error",
      /*errorClass: "popup__error_visible"*/
  })
  
