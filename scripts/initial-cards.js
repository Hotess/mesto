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
	if (event.target.classList.contains('element__img')) {
		body.prepend(templateImg(event.target.src, event.target.closest('.element').querySelector('.element__text').textContent));
		
	} else if (event.target.classList.contains('template-modal__close') || event.target.classList.contains('template-modal')) {
		event.target.closest('.body').querySelector('.template-modal').remove();
	};
}; 
	
//Закрытие изображение клавишей Escape
function closeKeyImg() {
	document.addEventListener('keydown', function(event) {
		if (event.keyCode == 27 ) {
			document.querySelector('.template-modal').remove();
		}
	});
}

closeKeyImg();

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