const templeteElementimg = document.querySelector('#template-element-img').content.cloneNode(true);
const templateModal = templeteElementimg.querySelector('.template-modal');
const templateClose = templeteElementimg.querySelector('.template-modal__close');
const templeteImg = templeteElementimg.querySelector('.template-modal__img');
const templeteText = templeteElementimg.querySelector('.template-modal__text');

//Открытие/закрытие изображения
function toggleImg(event) {
	const element = document.querySelector('.element');
	const choose = event.target.className.split(' ')[0];

	switch(choose) {
		case 'element__img':
			const element = event.target.closest('.element');
			
			templeteImg.src = event.target.src;
			templeteText.textContent = element.querySelector('.element__text').textContent;
			
			
			body.prepend(templateModal);
		break;

		case 'template-modal__close':
			event.target.closest('.template-modal').remove();
		break;
	} 
}; 
	
//Поставить/отменить лайк 
function toggleLike (event) {
	if (event.target.classList.contains('element__like')) {
		event.target.classList.toggle('element__like_active');
	}
}; 
		
//Удалить изображение
function removeImg(event) {
	if (event.target.classList.contains('element__trash')) {
		event.target.closest('.element').remove();
	}
}; 
	
body.addEventListener('click', toggleImg);
body.addEventListener('click', toggleLike);
body.addEventListener('click', removeImg);