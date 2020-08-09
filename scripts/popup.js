//Открытие попапа
function openPopup(event) {
	popups.forEach((item, index, array) => {
		if (event.target.classList.contains('profile__edit-button')) {
			array[0].classList.add('popup_opened');
			
			dataPopupEdit(event);

		} else if (event.target.classList.contains('profile__add-button')) {
			array[1].classList.add('popup_opened');		   
		};
	});
	
	document.addEventListener('keydown', closeKeyPopup);
};
		   
//Закрытие попапа
function closePopup(event) {
	const pushClosePopup = event.target.classList.contains('popup__close') || event.target.classList.contains('popup__button') || event.target.classList.contains('popup');
	
	 if (pushClosePopup) {
		 event.target.closest('.popup').classList.remove('popup_opened');
	 }
};

//Закрытие попапа клавишей Escape
function closeKeyPopup(event) {
	const popupOpened = document.querySelector('.popup_opened');
	
	if (event.key == 'Escape' && popupOpened) {
		popupOpened.classList.remove('popup_opened');	
	}
};

//Данные, введёные в попап-редакторе, сохраняются в profile
function dataPopupEdit(event) {	
	if (event.target.classList.contains('popup__form-edit')) {
		profile.querySelector('.profile__name').textContent = event.target.querySelector('.popup__item_view_name').value;
		profile.querySelector('.profile__working').textContent = event.target.querySelector('.popup__item_view_about-u').value;
	}
	
	//Переменные name и working профиля присвоили значения в переменные name и working попапа
	popupEdit.querySelector('.popup__item_view_name').value = profile.querySelector('.profile__name').textContent;
	popupEdit.querySelector('.popup__item_view_about-u').value = profile.querySelector('.profile__working').textContent;
};

//Добавление изображения	
function addImg(event) {
	if (event.target.classList.contains('popup__form-add')) {
		const popupName = event.target.querySelector('.popup__item-name-of-img').value;
		const popupLink = event.target.querySelector('.popup__item-link-for-img').value;
		const templateCompleted = createImgTemplate(popupLink, popupName);
		
		event.target.querySelector('.popup__item-name-of-img').value = '';
		event.target.querySelector('.popup__item-link-for-img').value = '';
		
		initialCards.push({
			name: popupName, 
			link: popupLink,
		});
		
		elements.prepend(templateCompleted);
	}
};

document.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
document.addEventListener('submit', dataPopupEdit);
document.addEventListener('submit', addImg);
document.removeEventListener('keydown', closeKeyPopup);