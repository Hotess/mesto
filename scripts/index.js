import Card from './Card.js';
import FormValidator from './FormValidator.js'; 

const elements = document.querySelector('.elements'); 
const profile = document.querySelector('.profile'); 
const profileName = document.querySelector('.profile__name'); 
const profileWorking = document.querySelector('.profile__working'); 
const profileBtnEditPopup = document.querySelector('.profile__button_view_edit'); 
const profileBtnAddPopup = document.querySelector('.profile__button_view_add'); 
const popups = document.querySelectorAll('.popup'); 
const popupEdit = document.querySelector('.popup_container_edit'); 
const popupEditName = document.querySelector('.popup__input_view_name'); 
const popupEditAboutU = document.querySelector('.popup__input_view_about-u'); 
const popupEditBtnClose = document.querySelector('.popup__close_view_edit');
const popupEditForm = document.querySelector('.popup__form_view_edit');
const popupAdd = document.querySelector('.popup_container_add'); 
const popupAddName = document.querySelector('.popup__input_view_name-of-img'); 
const popupAddLink = document.querySelector('.popup__input_view_link-for-img'); 
const popupAddBtnClose = document.querySelector('.popup__close_view_add'); 
const popupAddForm = document.querySelector('.popup__form_view_add'); 
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Автоматическое добавление карт
function addAutoCards(Card) {
	initialCards.forEach(item => {
		const card = new Card(item, 'element');
		const createCard = card.generatorCard();

		elements.prepend(createCard);
	}); 
};

addAutoCards(Card);

//Открытие попапа
const openPopup = function(popup) {
	dataPopupEdit();
	
	popup.classList.add('popup_opened');	
	
	document.addEventListener('keydown', closeKeyPopup);
};

//Переменные name и working профиля присвоили значения в переменные name и working попапа
function dataPopupEdit() {
	popupEditName.value = profileName.textContent;
	popupEditAboutU.value = profileWorking.textContent;
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
		closePopup(popupOpened);
	}
};

//Данные, введёные в попап-редакторе, сохраняются в profile
function saveDataPopupEdit(event) {
	profileName.textContent = popupEditName.value;
	profileWorking.textContent = popupEditAboutU.value;
	
	closePopup(popupEdit);
};

//Добавление изображения	
function addImg() {
	const templateCompleted = new Card({ link: popupAddLink.value, name: popupAddName.value, }, 'element').generatorCard();

	popupAddName.value = '';
	popupAddLink.value = '';

	initialCards.push({
		name: popupAddName.value, 
		link: popupAddLink.value,
	});
console.log(popupAddLink.value);
	elements.prepend(templateCompleted);

	closePopup(popupAdd);
};

function popupValidator(FormValidator) {
	popups.forEach(item => {
		new FormValidator({
		  formSelector: 'popup__form',
		  inputSelector: 'popup__input',
		  submitButtonSelector: 'popup__button',
		  inactiveButtonClass: 'popup__button_disabled',
		  inputErrorClass: 'popup__error',
		  errorClass: 'popup__error_visible'
		}, item).enableValidation();
	});
};

popupValidator(FormValidator);

profileBtnEditPopup.addEventListener('click', () => { openPopup(popupEdit) });
popupEditBtnClose.addEventListener('click', () => { closePopup(popupEdit) });
popupEdit.addEventListener('click', (event) => { if (event.target.classList.contains('popup_container_edit')) closePopup(popupEdit) });
profileBtnAddPopup.addEventListener('click', () => { openPopup(popupAdd) });
popupAddBtnClose.addEventListener('click', () => { closePopup(popupAdd) });
popupAdd.addEventListener('click', (event) => { if (event.target.classList.contains('popup_container_add')) closePopup(popupAdd) });
popupEditForm.addEventListener('submit', saveDataPopupEdit);
popupAddForm.addEventListener('submit', (event) => { addImg() });