export default class FormValidator {
	constructor(validate, popup) {
		this.validate = validate; 
		this.popup = popup; 
	}
	
	//Отмена ошибки после закрытия попапа
	_resetError(errorElement) {
		this.popup.addEventListener('click', (event) => {
			if (event.target.classList.contains('popup__close')) {
				errorElement.textContent = '';
				errorElement.classList.remove(`${this.validate.errorClass}`);
			}
		});
	};
	
	//Показ ошибки
	_showInputError(inputElement, errorMessage) {
		const errorElement = this.popup.querySelector(`#${inputElement.className.split(' ')[1]}-error`);

		errorElement.classList.add(`${this.validate.errorClass}`);
		errorElement.textContent = errorMessage;

		this._resetError(errorElement);
	};

//	//Скрыть ошибку 
	_hideInputError(inputElement) {
		const errorElement = this.popup.querySelector(`#${inputElement.className.split(' ')[1]}-error`);

		errorElement.classList.remove(`${this.validate.errorClass}`);
		errorElement.textContent = '';
	};

//	//Показ ошибки/скрыть ошибку при проверке валидации input
	_checkInputValidity(inputElement) {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage);
			
		} else {
			this._hideInputError(inputElement);
		}; 
	};

//	//Проверка на валидацию inputs
	_hasInvalidInput(inputList) {
		return inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		});
	};

//	//Доступ/запрет кнопки попапа
	_toggleButtonState(inputList, buttonElement) {
		if (this._hasInvalidInput(inputList)) {
			buttonElement.classList.add(`${this.validate.inactiveButtonClass}`);
			buttonElement.disabled = 'disabled';
			
		} else {
			buttonElement.classList.remove(`${this.validate.inactiveButtonClass}`);
			buttonElement.disabled = '';
		}
	};

	//Присваивание слушателей inputs
	_setEventListeners(buttonElement) {
		const inputList = Array.from(this.popup.querySelectorAll(`.${this.validate.inputSelector}`));
		
		this._toggleButtonState(inputList, buttonElement);
		
		inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {		
				this._checkInputValidity(inputElement); 
				this._toggleButtonState(inputList, buttonElement);
			});
		});
	};

	//Включение Валидацию формы
	enableValidation() {
		const buttonElement = this.popup.querySelector(`.${this.validate.submitButtonSelector}`);

		this.popup.addEventListener('submit', (event) => {
			event.preventDefault();

			buttonElement.classList.add(`${this.validate.inactiveButtonClass}`);
			buttonElement.disabled = 'disabled';
		});
		
		this._setEventListeners(buttonElement);
	};
};