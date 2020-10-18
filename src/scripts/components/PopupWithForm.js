/** 
	* Класс PopupWithFrom
	* @constructor
	* @param {string} containerSelector - попап.
	* @param {string} button - кнопка профиля.
	* @param {function} open - при открытии popupEdit выводится в полей ввода информация из профиля.
	* @param {function} submit - при нажатии submit обновляется информация в профиле/ создается новая карточка.
	* @param {function} _getInputValues - перебор данные из inputs.
*/
import Popup from './Popup.js';

export default class PopupWithFrom extends Popup {
	constructor(containerSelector, button, { open, submit }) {
		super(containerSelector, button);
		this.popup = containerSelector;
		this.inputs = this.popup.querySelectorAll('.popup__input');
		this._getInputValues = this._getInputValues.bind(this);
		this.submit = submit.bind(this, this._getInputValues, super.close.bind(this));
		this.modifiedOpen = open.bind(this, this._getInputValues);
	}
	
	/** Собирает данные из inputs of Popup */
	_getInputValues(valuesOfInputs) {
		const collectedValues = [];
		const values = {};
		
		this.inputs.forEach((input, index) => {
			(input.value)? input.value : input.value = Object.values(valuesOfInputs)[index];
			values[input.name] = input.value;
		});
		
		collectedValues.push(values);
		
		return collectedValues;
	}
	
	/** обработчик слушателя */ 
	setEventListeners() { 
		super.setEventListeners(this.modifiedOpen, this.submit);
	}
	
	/** закрытие попапа и очистка данных в inputs */
	close() {
		super.close();
		
		this.inputs.forEach(input => {
			input.value = '';
		});
	}
}