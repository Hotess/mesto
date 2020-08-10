//Открытие попапа
const openPopup = function(popup) {
	popup.classList.add('popup_opened');	
	document.addEventListener('keydown', closeKeyPopup);
};
		   
//Закрытие попапа
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeKeyPopup);
};

//Закрытие попапа клавишей Escape
function closeKeyPopup(event) {
	const popupOpened = document.querySelector('.popup_opened');
	if (event.key == 'Escape' && popupOpened) {
		closePopup(popupOpened);
	}
};

//Данные, введёные в попап-редакторе
function dataPopupEdit(event) {
	if (event.target.classList.contains('popup__form-edit')) {
		
		//Данные, введёные в попап-редакторе, сохраняются в profile
		profileName.textContent = popupEditName.value;
		profileWorking.textContent = popupEditAboutU.value;
	}
	
	//Переменные name и working профиля присвоили значения в переменные name и working попапа
	popupEditName.value = profileName.textContent;
	popupEditAboutU.value = profileWorking.textContent;
	
	closePopup(popupEdit);
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
		
		closePopup(popupAdd);
	}
};

profileBtnEditPopup.addEventListener('click', () => { openPopup(popupEdit) });
popupEditBtnClose.addEventListener('click', () => { closePopup(popupEdit) });
profileBtnAddPopup.addEventListener('click', () => { openPopup(popupAdd) });
popupAddBtnClose.addEventListener('click', () => { closePopup(popupAdd) });
document.addEventListener('submit', dataPopupEdit);
document.addEventListener('submit', addImg);