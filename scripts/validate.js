//Отмена ошибки после закрытия попапа
function resetError(errorElement, objPopup) {
	popups.forEach(popup => {
		popup.addEventListener('click', event => {
			if (event.target.classList.contains('popup__close')) {;
				errorElement.textContent = '';
				errorElement.classList.remove(`${objPopup.errorClass}`);
			}
		});
	})
}

//Показ ошибки
const showInputError = (formElement, inputElement, errorMessage, objPopup) => {
	const errorElement = formElement.querySelector(`#${inputElement.className.split(' ')[1]}-error`);
	
	errorElement.classList.add(`${objPopup.errorClass}`);
	errorElement.textContent = errorMessage;
	
	resetError(errorElement, objPopup);
};

//Скрыть ошибку 
const hideInputError = (formElement, inputElement, objPopup) => {
	const errorElement = formElement.querySelector(`#${inputElement.className.split(' ')[1]}-error`);
		
	errorElement.classList.remove(`${objPopup.errorClass}`);
	errorElement.textContent = '';
};

//Показ ошибки/скрыть ошибку при проверке валидации input
const checkInputValidity = (formElement, inputElement, objPopup) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, objPopup);
		
	} else {
		hideInputError(formElement, inputElement, objPopup);
  	}
};

//Проверка на валидацию inputs
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

//Доступ/запрет кнопки попапа
const toggleButtonState = (inputList, buttonElement, objPopup) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(`${objPopup.inactiveButtonClass}`);
		buttonElement.disabled = 'disabled';
		
  	} else {
	  	buttonElement.classList.remove(`${objPopup.inactiveButtonClass}`);
	  	buttonElement.disabled = '';
  	}
};

//Присваивание слушателей inputs
const setEventListeners = (formElement, buttonElement, objPopup) => {
	const inputList = Array.from(formElement.querySelectorAll(`.${objPopup.inputSelector}`));

	toggleButtonState(inputList, buttonElement, objPopup);

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', function() {		
			checkInputValidity(formElement, inputElement, objPopup);
			toggleButtonState(inputList, buttonElement, objPopup);
		});
	});
};

//Включение Валидацию формы
const enableValidation = (objPopup) => {
	const formList = Array.from(document.querySelectorAll(`.${objPopup.formSelector}`));
	
	formList.forEach((formElement) => {
		const buttonElement = formElement.querySelector(`.${objPopup.submitButtonSelector}`);
		
		formElement.addEventListener('submit', function(event) {
			event.preventDefault();
			
			buttonElement.classList.add(`${objPopup.inactiveButtonClass}`);
    	});
		
		setEventListeners(formElement, buttonElement, objPopup);
	});
};

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible'
});