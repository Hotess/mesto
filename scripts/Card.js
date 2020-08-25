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
		this._showImage(templateImgUrl);
		
		return element;
	}
	
	//Создание модального изоражения
	 _createModal(card) {
		const modal = document.querySelector('.modal-image');
		const modalContainer = modal.querySelector('.modal-image__container');
		const modalBtnClose = modal.querySelector('.modal-image__close');
		const modalImage = modal.querySelector('.modal-image__img');
		const modalText = modal.querySelector('.modal-image__text');
		 
		return { 
			modal: modal, 
			img: modalImage,
			text: modalText,
			btnClose: modalBtnClose, 
			contain: modalContainer, 
		};
	 }
	 
	//данные в модальном изображении
	_dataModal(card) {
		const objModal = this._createModal();
		const cardText = card.closest('.element').querySelector('.element__text');
		
		objModal.img.src = card.src;
		objModal.text.textContent = cardText.textContent;
	}
	
	//Обработчик слушателя модального изображение
	_setEventListenersShowIimage(card, objModal) {
		card.addEventListener('click', (event) => {
			this._dataModal(event.target);
			this._openedModalImage(objModal.modal);
		});
		
		document.addEventListener('click', (event) => {
			const pressCloseImg = event.target.classList.contains('modal-image__close') || event.target.classList.contains('modal-image') || event.target.classList.contains('modal-image__container');
			
			if	(pressCloseImg) {
				this._closeModalImage(objModal.modal);
			}
		});  
	}
	
	//Закрыть модальное изображение
	_closeModalImage(modal) {
		modal.classList.remove('modal-image_opened');
		
		document.removeEventListener('keydown', (event) => { this._closeKeyImg(modal) });
	}
	
	//Открыть модальное изображение
	_openedModalImage(modal) {
		
		modal.classList.add('modal-image_opened');
		
		document.addEventListener('keydown', (event) => { this._closeKeyImg(modal) });
	}
	
	//Закрытие изображение клавишей Escape
	_closeKeyImg(modal) {
		if (event.key == 'Escape' && modal) {
			this._closeModalImage(modal);
		};
	}
	
	//Показ изображение
	_showImage(card) {
		const objModal = this._createModal();
		
		this._setEventListenersShowIimage(card, objModal);
	}
};