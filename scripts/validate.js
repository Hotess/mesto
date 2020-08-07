//Показ ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`#${inputElement.className.split(' ')[1]}-error`);
	
	errorElement.classList.add('popup__input-error_visble');
	errorElement.textContent = errorMessage;
};

//Скрыть ошибку 
const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`#${inputElement.className.split(' ')[1]}-error`);
		
	errorElement.classList.remove('popup__input-error_visble');
	errorElement.textContent = '';
};

//Показ ошибки/скрыть ошибку при проверке валидации input
const checkInputValidity = (formElement, inputElement, error) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
		
	} else {
		hideInputError(formElement, inputElement);
  	}
};

//Проверка на валидацию inputs
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

//Доступ/запрет кнопки попапа
const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add('popup__button_disabled');
		buttonElement.disabled = 'disabled';
		
  	} else {
	  	buttonElement.classList.remove('popup__button_disabled');
	  	buttonElement.disabled = '';
  	}
};

//Присваивание слушателей inputs
const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
	const buttonElement = formElement.querySelector('.popup__button');

	toggleButtonState(inputList, buttonElement);

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', function () {		
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

//Включение Валидацию формы
const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', function(event) {
			event.preventDefault();
    	});
		
		setEventListeners(formElement);
	});
};

enableValidation();