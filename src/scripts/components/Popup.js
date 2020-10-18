/** 
	* Класс Popup
	* @constructor
	* @param {string} containerSelector - попап.
	* @param {string} button - кнопка профиля.
*/
export default class Popup {
	constructor(containerSelector, button) {
		this.popup = containerSelector;
		this.button = button;
		this._handleEscClose = this._handleEscClose.bind(this);
	}
	
	/** Закрытие попапа клавишей Escape */
	_handleEscClose(event) {
		const escape = (event.key == 'Escape');
		
		if (escape) {
			this.close();
		}
	}
	 
	/** Обработчик попапа */
	setEventListeners(modifiedOpen, submit) {
		this.popup.addEventListener('click', (event) => {
			const closeElement = (event.target.classList.contains('popup__container') || event.target.classList.contains('popup') || event.target.classList.contains('popup__close'));
			
			if (closeElement) this.close(); 
		});
		
		 (this.button) ? this.button.addEventListener('click', () => {
			this.open(modifiedOpen);
		}) : null;
		
		this.submitData(submit);
	}
	
	/** Отправка запроса на сервер */
	submitData(submit) {
		this.popup.addEventListener('submit', (event) => {
			event.preventDefault();
			submit(); 
		});
	}
	
	/** Открытие попапа */
	open(modifiedOpen) {
		this.popup.classList.add('popup_opened');

		(typeof(modifiedOpen) == 'function') ? modifiedOpen() : null;
		
		document.addEventListener('keydown', this._handleEscClose);
	}
	
	/** Закрытие попапа */
	close(disable) {
		this.popup.classList.remove('popup_opened');
		
		document.removeEventListener('keydown', this._handleEscClose);
	}
}