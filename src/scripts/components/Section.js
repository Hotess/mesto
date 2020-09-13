export default class Section {
	constructor({ items, renderer }, container) {
		this._items = items;
		this._renderer = renderer;
		this.container = container;
	}
	
	//Добавление в разметку
	addItem(element) {
		this.container.append(element);
	}
	
	//Перебор массива
	renderItems() {
		this._items.forEach((item, index) => {
			this._renderer(item, index);
		});
	}
}