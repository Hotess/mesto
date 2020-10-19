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
	
		/** обработчик слушателя */ 
	setEventListeners(removeCard) {
		super.open();
		super.setEventListeners('', this.submit.bind(this, super.close.bind(this), removeCard));
	}
}
	