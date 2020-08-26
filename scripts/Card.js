export default class Card {
	constructor(data, template) {
		this.name = data.name;
		this.src = data.link;
		this.element = template;
	}
	
	//Создание шаблона 
	_createTemplate() {
		const template = document
		.querySelector('#template-card')
		.content
		.firstElementChild
		.cloneNode(true);
		
		template.classList.add(this.element);

		return template;
	};
	
	//Обработчик слушателя для кнопок Like и Trash
	_setEventListeners(element, templateImgTrash, templateImgLike) {
    	templateImgLike.addEventListener('click', () => {
			this._toggleLike(templateImgLike);
		});
										 
 		templateImgTrash.addEventListener('click', () => {
			this._removeImg(element);
		});
    };
	
	//Поставить/отменить лайк
	_toggleLike(templateImgLike) {
		templateImgLike.classList.toggle('element__like_active');
	};
		
	//Удалить изображение
	_removeImg(element) {
		element.remove();
	};
	
	//Добавление карточки в elements
	generatorCard() {
		//Готовый шаблон
		const element = this._createTemplate();
		
		const templateImgName = element.querySelector('.element__text');
		const templateImgUrl = element.querySelector('.element__img');
		const templateImgLike = element.querySelector('.element__like');
		const templateImgTrash = element.querySelector('.element__trash');

		templateImgUrl.src = this.src;
		templateImgName.textContent = this.name;
		templateImgUrl.alt = this.name;
		
		this._setEventListeners(element, templateImgTrash, templateImgLike);
		
		return element;
	}
};