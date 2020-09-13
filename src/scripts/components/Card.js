//import showImage from './utils/utils.js';

export default class Card {
	constructor(item, template, { handleCardClick }) {
		this.name = item.name;
		this.src = item.link;
		this.element = template;
		this.handleCardClick = handleCardClick;
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
	_setEventListeners() {
    	this.templateImgLike.addEventListener('click', () => {
			this._toggleLike(this.templateImgLike);
		});
										 
 		this.templateImgTrash.addEventListener('click', () => {
			this._removeImg(this.element);
		});
    };
	
	//Поставить/отменить лайк
	_toggleLike(templateImgLike) {
		this.templateImgLike.classList.toggle('element__like_active');
	};
		
	//Удалить изображение
	_removeImg(element) {
		this.element.remove();
	};
	
	//Добавление карточки в elements
	generatorCard() {
		//Готовый шаблон
		this.element = this._createTemplate();
		
		const templateImgName = this.element.querySelector('.element__text');
		const templateImgUrl = this.element.querySelector('.element__img');
		this.templateImgLike = this.element.querySelector('.element__like');
		this.templateImgTrash = this.element.querySelector('.element__trash');

		templateImgUrl.src = this.src;
		templateImgName.textContent = this.name;
		templateImgUrl.alt = this.name;
		
		this.handleCardClick(templateImgUrl, templateImgName);
		this._setEventListeners();
		
		return this.element;
	}
};