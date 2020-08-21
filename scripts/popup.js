//Открытие попапа
const openPopup = function(popup) {
	dataPopupEdit();
	
	popup.classList.add('popup_opened');	
	
	document.addEventListener('keydown', closeKeyPopup);
};

//Переменные name и working профиля присвоили значения в переменные name и working попапа
function dataPopupEdit() {
	data.popupEditName.value = data.profileName.textContent;
	data.popupEditAboutU.value = data.profileWorking.textContent;
}

//Закрытие попапа
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	
	document.removeEventListener('keydown', closeKeyPopup);
};

//Закрытие попапа клавишей Escape
function closeKeyPopup(event) {
	const popupOpened = document.querySelector('.popup_opened');
	if (event.key == 'Escape' && popupOpened) {
		closePopup(data.popupOpened);
	}
};

//Данные, введёные в попап-редакторе, сохраняются в profile
function saveDataPopupEdit(event) {
	if (event.target.classList.contains('popup__form-edit')) {
		data.profileName.textContent = data.popupEditName.value;
		data.profileWorking.textContent = data.popupEditAboutU.value;
	}
	
	closePopup(data.popupEdit);
};

//Добавление изображения	
function addImg(event) {
	if (event.target.classList.contains('popup__form-add')) {
		const templateCompleted = new Card({ link: data.popupAddLink.value, name: data.popupAddName.value }).generatorCard();
		
		data.popupAddName.value = '';
		data.popupAddLink.value = '';
		
		data.initialCards.push({
			name: data.popupAddName.value, 
			link: data.popupAddLink.value,
		});
		
		data.elements.prepend(templateCompleted);
		
		closePopup(data.popupAdd);
	}
};

data.profileBtnEditPopup.addEventListener('click', () => { openPopup(data.popupEdit) });
data.popupEditBtnClose.addEventListener('click', () => { closePopup(data.popupEdit) });
data.profileBtnAddPopup.addEventListener('click', () => { openPopup(data.popupAdd) });
data.popupAddBtnClose.addEventListener('click', () => { closePopup(data.popupAdd) });
document.addEventListener('submit', saveDataPopupEdit);
document.addEventListener('submit', addImg);

import * as data from './index.js';
import Card from './Card.js';