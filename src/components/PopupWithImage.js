import Popup from './Popup.js';

/** 
	* Класс PopupWithImage
	* @constructor
	* @param {string} modal - modalImage.
*/
export default class PopupWithImage extends Popup {
	constructor(containerSelector,) {
		super(containerSelector);
		this.modal = containerSelector;
		this.modalImage = this.modal.querySelector('.popup__img');
		this.modalText = this.modal.querySelector('.popup__text');
	}
	
	/** Открытие popupImage */
	open(img, text) {		
		this.modalImage.src = img.src;
		this.modalText.textContent = text.textContent;
		this.modalImage.alt = text.textContent;
		
		super.open();
	}
}