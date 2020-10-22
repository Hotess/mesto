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
	constructor(item, myId, template, { handleCardClick, handleLikeCard, handleDeleteIconClick }) {
		this.image = item;
		this.usersId = item.owner._id;
		this.myId = myId;
		this.countLike = item.likes ? item.likes : '0';
		this.element = template;
		this.handleCardClick = handleCardClick;
		this.handleLikeCard = handleLikeCard;
		this.handleDeleteIconClick = handleDeleteIconClick;
		this._setLike = this._setLike.bind(this);
		this._deleteLike = this._deleteLike.bind(this);
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
			const stateLike = this._templateImgLike.classList.contains('element__like_active');
				this.handleLikeCard(stateLike, this.image._id, this._setLike, this._deleteLike);
		});
												
		this._templateImgUrl.addEventListener('click', () => {
			this.handleCardClick(this._templateImgUrl, this._templateImgName); 
		});
		
		this._templateImgTrash.addEventListener('click', () => {
			this.handleDeleteIconClick(this._deleteCard.bind(this), this.image._id);
		});
    };
	
	/** Поставить лайк */
	_setLike() {
		this._templateImgLike.classList.add('element__like_active');
		this._elementCountLike.textContent++;
	};
	
	/** Отменить лайк */
	_deleteLike() {
		this._templateImgLike.classList.remove('element__like_active');
		this._elementCountLike.textContent--;
	};		
	
	/** Удаление карточки */
	_deleteCard(api) {
		this._elementCard.remove()
	}
		
	/** Добавление карточки в elements */
	generatorCard() {
		
		/** Готовый шаблон */
		this._elementCard = this._createTemplate();
		
		this._templateImgName = this._elementCard.querySelector('.element__text');
		this._templateImgUrl = this._elementCard.querySelector('.element__img');
		this._templateImgLike = this._elementCard.querySelector('.element__like');
		this._templateImgTrash = this._elementCard.querySelector('.element__trash');
		this._elementCountLike = this._elementCard.querySelector('.element__count');
		
		this._templateImgUrl.src = this.image.link;
		this._templateImgName.textContent = this.image.name;
		this._templateImgUrl.alt = this.image.name;
		this._elementCountLike.textContent = this.countLike.length;
		
		if (this.usersId == this.myId) {
			this._templateImgTrash.classList.add('element__trash_active'); 
		}

		this.countLike.forEach((item) => {
			if (item._id == this.myId) {
				this._templateImgLike.classList.add('element__like_active');
			};
		});
		
		this._setEventListeners();
	
		return this._elementCard;
	}
};