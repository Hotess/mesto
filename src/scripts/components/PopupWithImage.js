import Popup from './Popup.js';

/** 
	* Класс PopupWithImage
	* @constructor
	* @param {string} modal - modalImage.
	* @param {function} _handleEscClose - закрытие Escepом.
*/
export default class PopupWithImage extends Popup {
	constructor(containerSelector,) {
		super(containerSelector);
		this.modal = containerSelector;
	}
	
	/** Открытие popupImage */
	open(img, text) {
		const modalImage = this.modal.querySelector('.popup__img');
		const modalText = this.modal.querySelector('.popup__text');
		
		modalImage.src = img.src;
		modalText.textContent = text.textContent;
		modalImage.alt = text.textContent;
		
		super.open();
	}
}