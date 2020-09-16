export const elements = document.querySelector('.elements');  
export const profileBtnEditPopup = document.querySelector('.profile__button_view_edit'); 
export const profileBtnAddPopup = document.querySelector('.profile__button_view_add');
export const profileName = document.querySelector('.profile__name');
export const profileWorking = document.querySelector('.profile__working');
export const popups = Array.from(document.querySelectorAll('.popup')); 
export const popupEdit = document.querySelector('.popup_container_edit'); 
export const popupAdd = document.querySelector('.popup_container_add'); 
export const popupImage = document.querySelector('.popup_view_image');
export const formConfig = {
	formSelector: 'popup__form',
  	inputSelector: 'popup__input',
  	submitButtonSelector: 'popup__button',
  	inactiveButtonClass: 'popup__button_disabled',
  	inputErrorClass: 'popup__error',
  	errorClass: 'popup__error_visible'
};

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