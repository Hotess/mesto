export const elements = document.querySelector('.elements');  
export const profileBtnEditPopup = document.querySelector('.profile__button_view_edit'); 
export const profileBtnAddPopup = document.querySelector('.profile__button_view_add');
export const profileName = document.querySelector('.profile__name');
export const profileWorking = document.querySelector('.profile__working');
export const popups = Array.from(document.querySelectorAll('.popup')); 
export const popupEdit = document.querySelector('.popup_container_edit');
export const popupEditName = popupEdit.querySelector('.popup__input_view_name');
export const popupEditaboutU = popupEdit.querySelector('.popup__input_view_about-u');
export const buttonEdit = popupEdit.querySelector('.popup__button');
export const popupAdd = document.querySelector('.popup_container_add');
export const buttonAdd = popupAdd.querySelector('.popup__button');
export const popupDeleteCard = document.querySelector('.popup_container_delete');
export const popupUpdateAvatar = document.querySelector('.popup_container_update');
export const buttonUpdate = popupUpdateAvatar.querySelector('.popup__button');
export const popupImage = document.querySelector('.popup_view_image');
export const avatar = document.querySelector('.profile__avatar');
export const profileBtnUpdate = document.querySelector('.profile__update');
export const profileImg = document.querySelector('.profile__img');
export const formConfig = {
	formSelector: 'popup__form',
  	inputSelector: 'popup__input',
  	submitButtonSelector: 'popup__button',
  	inactiveButtonClass: 'popup__button_disabled',
  	inputErrorClass: 'popup__error',
  	errorClass: 'popup__error_visible'
};