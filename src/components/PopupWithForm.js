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
		this.inputsValues = {};
		this.collectedValues = [];
		this._getInputValues = this._getInputValues.bind(this);
		this.submit = submit.bind(this, this._getInputValues, super.close.bind(this));
		this.modifiedOpen = open.bind(this, this.setInputValues.bind(this));
	}
	
/** Собирает данные из inputs of Popup */
	_getInputValues() {
		const collectedValues = []
		
		this.inputs.forEach((input, index, array) => {
			this.inputsValues[input.name] = input.value;
		});
		
		collectedValues.push(this.inputsValues);

		return collectedValues;
	}
	
	setInputValues(valuesOfInputs) {
		const collectedValues = []
		
		const data = Object.values(valuesOfInputs);
			
		this.inputs.forEach((input, index, array) => {
			this.inputsValues[input.name] = data[index];
			array[index].value = this.inputsValues[input.name];
		});
		
		collectedValues.push(this.inputsValues);

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