export default class Popup {
	constructor(containerSelector, button) {
		this.popup = containerSelector;
		this.profileButton = button;
	}
	
	//Закрытие попапа клавишей Escape
	_handleEscClose(event) {
		const popupOpened = this.popup.classList.contains('popup_opened');
		const escape = event.key == 'Escape';
		
		if (escape && popupOpened) {
			this.close();
		}
	}
	
	//Обработчик попапа
	setEventListeners(modifiedOpen, close) {
		this.popup.addEventListener('click', (event) => {
			const btnClosePopup = event.target.classList.contains('popup__close');
			const closePopup = event.target.classList.contains(this.popup.className.split(' ')[1]);
			
			if (closePopup || btnClosePopup) 
				this.close();
		});
		
		this.profileButton.addEventListener('click', () => {
			this.open(modifiedOpen);
		});
		
		return this;
	}
	
	//Открытие попапа
	open(modifiedOpen) {
		this.popup.classList.add('popup_opened');
		
		modifiedOpen();
		
		document.addEventListener('keydown', this._handleEscClose.bind(this));
	}
	
	//Закрытие попапа
	close() {
		this.popup.classList.remove('popup_opened');
		
		document.removeEventListener('keydown', this._handleEscClose.bind(this));
	}
}