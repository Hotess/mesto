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

		document.removeEventListener('keydown', closeKeyPopup);
	}
};

//Данные, введёные в попап-редакторе, сохраняются в profile
function dataPopupEdit(event) {
	if (event.target.classList.contains('popup__form-edit')) {
		profileName.textContent = popupEditName.value;
		profileWorking.textContent = popupEditAboutU.value;
	}
	
	//Переменные name и working профиля присвоили значения в переменные name и working попапа
	popupEditName.value = profileName.textContent;
	popupEditAboutU.value = profileWorking.textContent;
};

//Добавление изображения	
function addImg(event) {
	if (event.target.classList.contains('popup__form-add')) {
		const templateCompleted = createImgTemplate(popupAddLink.value, popupAddName.value);
		
		popupAddName.value = '';
		popupAddLink.value = '';
		
		initialCards.push({
			name: popupAddName.value, 
			link: popupAddLink.value,
		});
		
		elements.prepend(templateCompleted);
	}
};

document.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
document.addEventListener('submit', dataPopupEdit);
document.addEventListener('submit', addImg);