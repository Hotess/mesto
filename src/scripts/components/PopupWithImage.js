import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
	constructor(containerSelector) {
		super(containerSelector);
		this.containerSelector = containerSelector;
	}
	
	//Создание popupImage
	_createModal() {
		const modal = document.querySelector('.modal-image');
		const modalImage = modal.querySelector('.modal-image__img');
		const modalText = modal.querySelector('.modal-image__text');
		
		return {
			modal: modal,
			modalImage: modalImage,
			modalText: modalText,
		};
	}
	
	//Закрытие попапа клавишей Escape
	_handleEscClose(event) {
		const openedModalImage = this._createModal().modal.classList.contains('modal-image_opened');
		const escape = event.key == 'Escape';
		
		if (escape && openedModalImage) {
			this.close();
		}
	}
	
	//Открытие popupImage
	open(img, text) {
		const createdModal = this._createModal();
		
		createdModal.modalImage.src = img.src;
		createdModal.modalText.textContent = text.textContent;
		createdModal.modalImage.alt = text.textContent;
		
		createdModal.modal.classList.add('modal-image_opened');
		
		document.addEventListener('keydown', this._handleEscClose.bind(this));
	}
	
	//Закрытие popupImage
	close() {
		const createdModal = this._createModal();
		
		createdModal.modal.classList.remove('modal-image_opened');
		
		document.removeEventListener('keydown', this._handleEscClose.bind(this));
	}
}