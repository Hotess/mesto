/** 
	* Класс Card
	* @constructor
	* @param {object} item 
		* param {string} name - название изображения;
		* param {string} link - ссылка на изображение.
		
	* @param {string} template - шаблон.
	* @param {function} handleCardClick - при клике открывается modalImage. 
*/
export default class Card {
	constructor(item, template, { handleCardClick }) {
		this.name = item.name;
		this.src = item.link;
		this.element = template;
		this.handleCardClick = handleCardClick;
	}
	
	/** Создание шаблона */
	_createTemplate() {
		const template = document
		.querySelector('#template-card')
		.content
		.firstElementChild
		.cloneNode(true);
		
		template.classList.add(this.element);

		return template;
	};
	
	/** Обработчик слушателя для кнопок Like и Trash */
	_setEventListeners() {
    	this._templateImgLike.addEventListener('click', () => {
			this._toggleLike();
		});
										 
 		this._templateImgTrash.addEventListener('click', () => {
			this._removeImg();
		});
		
		this._templateImgUrl.addEventListener('click', () => {
			this.handleCardClick(this._templateImgUrl, this._templateImgName);
		});
    };
	
	/** Поставить/отменить лайк */
	_toggleLike() {
		this._templateImgLike.classList.toggle('element__like_active');
	};
		
	/** Удалить изображение */
	_removeImg() {
		this._elementCard.remove();
	};
	
	/** Добавление карточки в elements */
	generatorCard() {
		
		/** Готовый шаблон */
		this._elementCard = this._createTemplate();
		
		this._templateImgName = this._elementCard.querySelector('.element__text');
		this._templateImgUrl = this._elementCard.querySelector('.element__img');
		this._templateImgLike = this._elementCard.querySelector('.element__like');
		this._templateImgTrash = this._elementCard.querySelector('.element__trash');

		this._templateImgUrl.src = this.src;
		this._templateImgName.textContent = this.name;
		this._templateImgUrl.alt = this.name;
		
		this._setEventListeners();
		
		return this._elementCard;
	}
};