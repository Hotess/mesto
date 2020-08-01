let elements = { 
	body: document.querySelector('.body'),
}

//Манипуляция над изображением
function operationElementImg(event) {
	const templeteElementimg = document.querySelector('#template-element-img').content.cloneNode(true);
	const templateModal = templeteElementimg.querySelector('.template-modal');
	const templateClose = templeteElementimg.querySelector('.template-modal__close');
	const templeteImg = templeteElementimg.querySelector('.template-modal__img');
	const templeteText = templeteElementimg.querySelector('.template-modal__text');
	
	//Открытие/закрытие изображения
	const toggleImg = function(event) {
		const element = document.querySelector('.element');
		const choose = event.target.className.split(' ')[0];
		
		switch(choose) {
			case 'element__img':
				const element = event.target.closest('.element');
				
				templeteImg.src = event.target.src;
				templeteText.textContent = element.querySelector('.element__text').textContent;

				elements.body.prepend(templateModal);
			break;
			   
			case 'template-modal__close':
				event.target.closest('.template-modal').remove();
			break;
		} 
	}; 
	
	toggleImg(event);
	
	//Поставить/отменить лайк 
	const toggleLike = function(event) {
		if (event.target.classList.contains('element__like')) {
			event.target.classList.toggle('element__like_active');
		}
	}; 
	
	toggleLike(event);
		
	//Удалить изображение
	const removeImg = function (event) {
		if (event.target.classList.contains('element__trash')) {
			event.target.closest('.element').remove();
		}
	}; 
	
	removeImg(event);
}

elements.body.addEventListener('click', operationElementImg);