export default class Card {
	constructor(data) {
		this.name = data.name;
		this.src = data.link;
	}
	
	//Создание templateImg
	_createImgTemplate() {
		const template = document
		.querySelector('#template-element')
		.content
		.querySelector('.element')
		.cloneNode(true);

		return template;
	};
	
	//Создание готовой карточки
	generatorCard() {
		this.template = this._createImgTemplate();
		
		const templateImgName = this.template.querySelector('.element__text');
		const templateImgUrl = this.template.querySelector('.element__img');
		const templateImgTrash = this.template.querySelector('.element__trash');
		const templateImgLike = this.template.querySelector('.element__like');
		
		templateImgUrl.src = this.src;
		templateImgName.textContent = this.name;
		templateImgUrl.alt = this.name;
		
		//Обработчик событий 
		this._setEventListeners(this.template, templateImgTrash, templateImgLike);
		
		return this.template;
	}
	
	_setEventListeners(template, templateImgTrash, templateImgLike) {
    	templateImgLike.addEventListener('click', () => {
			this._toggleLike(templateImgLike);
		});
										 
 		templateImgTrash.addEventListener('click', () => {
			this._removeImg(template);
		});
    };
	
	//Поставить/отменить лайк
	_toggleLike(templateImgLike) {
		templateImgLike.classList.toggle('element__like_active');
	};
		
	//Удалить изображение
	_removeImg(template) {
		template.remove();
	};
};