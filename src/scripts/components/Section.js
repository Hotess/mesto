/** 
	* Класс Section
	* @constructor
	* @param {string} items - массив.
	* @param {function} renderer - перебор массива.
	* @param {string} container - место, в куда добавлять element.
*/
export default class Section {
	constructor({ items, renderer }, container) {
		this._items = items;
		this._renderer = renderer;
		this._container = container;
	}
	
	/** Добавление в разметку */
	addItem(element, isArray) { 
    if (isArray) { 
      this._container.append(element); 
    } else {
      this._container.prepend(element); 
	} 
  } 
	
	/** Перебор массива */
	renderItems() {
		this._items.forEach((item, index) => {
			this._renderer(item, index);
		});
	}
}