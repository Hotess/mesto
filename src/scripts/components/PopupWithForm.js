import Popup from './Popup.js';

export default class PopupWithFrom extends Popup {
	constructor(containerSelector, button, { open, submit }) {
		super(containerSelector, button);
		this.popup = containerSelector
		this.submit = submit;
		this.modifiedOpen = open;
		this.inputs = Array.from(this.popup.querySelectorAll('.popup__input'));
	}
	
	//Собирает данные из inputs of Popup
	_getInputValues(valuesOfInputs) {
		const collectedValues = [];
		const values = {};
		
		this.inputs.forEach((input, index) => {
			(input.value)? input.value : input.value = valuesOfInputs[index];
			values[input.name] = input.value;
			
		});
		
		collectedValues.push(values);
		
		return collectedValues;
	}
	
	//обработчик слушателя - отправка данных 
	setEventListeners() {
		super.setEventListeners(this.modifiedOpen.bind(this));
		
		this.popup.addEventListener('submit', (event) => {
			this.submit(event);
			super.close();
		});
	}
	
	//закрытие попапа и очистка данных в inputs
	close() {
		super.close();
		
		this.inputs.forEach(input => {
			input.value = '';
		});
	}
}