import Popup from './Popup.js';

/** 
	* Класс PopupRemoveCard
	* @constructor
	* @param {string} containerSelector - Попап.
*/
export default class PopupRemoveCard extends Popup {
	constructor(containerSelector, { submit }) {
		super(containerSelector);
		this.submit = submit;
	}
	
	getData(removeCard, imageId) {
		super.open();
		
		this.removeCard = removeCard;
		this.imageId = imageId;
	}
		/** обработчик слушателя */ 
	setEventListeners(data) {
		super.setEventListeners('', () => {
			this.submit(super.close.bind(this), this.removeCard, this.imageId);
		});
	}
}