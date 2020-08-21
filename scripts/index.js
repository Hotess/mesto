export const page = document.querySelector('.page');
export const elements = document.querySelector('.elements');
export const profile = document.querySelector('.profile');
export const profileName = document.querySelector('.profile__name');
export const profileWorking = document.querySelector('.profile__working');
export const profileBtnEditPopup = document.querySelector('.profile__edit-button');
export const profileBtnAddPopup = document.querySelector('.profile__add-button');
export const popups = document.querySelectorAll('.popup');
export const popupEdit = document.querySelector('.popup_container_edit');
export const popupEditName = document.querySelector('.popup__item_view_name');
export const popupEditAboutU = document.querySelector('.popup__item_view_about-u');
export const popupAdd = document.querySelector('.popup_container_add');
export const popupAddName = document.querySelector('.popup__item-name-of-img');
export const popupAddLink = document.querySelector('.popup__item-link-for-img');
export const popupAddBtnClose = document.querySelector('.popup_close-add');
export const popupEditBtnClose = document.querySelector('.popup_close-edit');
export const initialCards = [
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
function addAutoCards(Сard) {
	initialCards.forEach(item => {
		const createCard = new Сard(item).generatorCard();
		
		elements.prepend(createCard);
	}); 
};

addAutoCards(Сard);

function popupValidator(FormValidator) {
	popups.forEach(item => {
		new FormValidator({
		  formSelector: 'popup__form',
		  inputSelector: 'popup__input',
		  submitButtonSelector: 'popup__button',
		  inactiveButtonClass: 'popup__button_disabled',
		  inputErrorClass: 'popup__input-error',
		  errorClass: 'popup__input-error_visible'
		}, item).enableValidation();
	});
};

popupValidator(FormValidator);

import Сard from './Card.js';
import FormValidator from './FormValidator.js'; 