export const elements = document.querySelector('.elements'); 
export const elementImages = elements.querySelectorAll('.element__img');
export const elementName = elements.querySelectorAll('.element__text');
export const profileName = document.querySelector('.profile__name'); 
export const profileWorking = document.querySelector('.profile__working'); 
export const profileBtnEditPopup = document.querySelector('.profile__button_view_edit'); 
export const profileBtnAddPopup = document.querySelector('.profile__button_view_add'); 
export const popups = Array.from(document.querySelectorAll('.popup')); 
export const popupEdit = document.querySelector('.popup_container_edit'); 
export const popupEditName = document.querySelector('.popup__input_view_name'); 
export const popupEditAboutU = document.querySelector('.popup__input_view_about-u'); 
export const popupEditBtnClose = document.querySelector('.popup__close_view_edit');
export const popupEditForm = document.querySelector('.popup__form_view_edit');
export const popupAdd = document.querySelector('.popup_container_add'); 
export const popupAddName = document.querySelector('.popup__input_view_name-of-img'); 
export const popupAddLink = document.querySelector('.popup__input_view_link-for-img'); 
export const popupAddBtnClose = document.querySelector('.popup__close_view_add'); 
export const popupAddForm = document.querySelector('.popup__form_view_add');
export const modal = document.querySelector('.modal-image');
export const modalText = modal.querySelector('.modal-image__text');
export const modalImage = modal.querySelector('.modal-image__text');
export const modalClose = modal.querySelector('.modal-image__close');
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