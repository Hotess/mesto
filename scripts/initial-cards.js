// создание template изображение
function templateImg(imgSrc, imgName) {
	const templeteElementimg = document.querySelector('#template-element-img').content.cloneNode(true);
	const templateModal = templeteElementimg.querySelector('.template-modal');
	const templateClose = templeteElementimg.querySelector('.template-modal__close');
	const templeteImg = templeteElementimg.querySelector('.template-modal__img');
	const templeteText = templeteElementimg.querySelector('.template-modal__text');
	
	templeteImg.src = imgSrc;
	templeteText.textContent = imgName;
	
	return templateModal;
}
	
//Открытие/закрытие изображения
function toggleImg(event) {
	const pushCloseImg = event.target.classList.contains('template-modal__close') || event.target.classList.contains('template-modal');
	let temlateComleted;
	
	if (event.target.classList.contains('element__img')) {
		temlateComleted = templateImg(event.target.src, event.target.closest('.element').querySelector('.element__text').textContent);
		
		body.prepend(temlateComleted);
		
	} else if (pushCloseImg) {
		event.target.closest('.body').querySelector('.template-modal').remove();
	};
	
	document.addEventListener('keydown', closeKeyImg);
}; 
	
//Закрытие изображение клавишей Escape
function closeKeyImg(event) {
	const temlateCreated = document.querySelector('.template-modal');
	
	if (event.key == 'Escape' && temlateCreated) {
		document.querySelector('.template-modal').remove();
	}
}

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
	
document.addEventListener('click', toggleImg);
document.addEventListener('click', toggleLike);
document.addEventListener('click', removeImg);
document.removeEventListener('keydown', closeKeyImg);