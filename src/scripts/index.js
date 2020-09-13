import "./../pages/index.css";

import {
	elements,
	elementImages,
	elementName,
	profileName,
	profileWorking,
	profileBtnEditPopup,
	profileBtnAddPopup,
	popups,
	popupEdit,
	popupEditName,
	popupEditAboutU,
	popupEditBtnClose,
	popupEditForm,
	popupAdd,
	popupAddName,
	popupAddLink,
	popupAddBtnClose,
	popupAddForm,
	initialCards,
	modal,
	modalText,
	modalImage,
	modalClose
} from './utils/constants.js';

import Popup from './components/Popup.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';

const createdModalImage = new PopupWithImage(popupAdd);

//Автоматическое добалвение карточек
const Createdcards = new Section({ items: initialCards, renderer: (item) => {
		const card = new Card(item, 'element', {
			
			//обработчик клика на открытие popupImage
			handleCardClick: (elementImg, elementName) => {
				elementImg.addEventListener('click', () => {
					createdModalImage.open(elementImg, elementName);
				});
			} 
		});
	
		const cardElement = card.generatorCard();
	
		Createdcards.addItem(cardElement);
	}
}, elements);

Createdcards.renderItems();

//Валидация формы
const popupValidator = new Section( { items: popups, renderer: (item) => {
	new FormValidator({
		  formSelector: 'popup__form',
		  inputSelector: 'popup__input',
		  submitButtonSelector: 'popup__button',
		  inactiveButtonClass: 'popup__button_disabled',
		  inputErrorClass: 'popup__error',
		  errorClass: 'popup__error_visible'
		}, item).enableValidation();
	}
});

popupValidator.renderItems();

//Данные в профиле
const profile = new UserInfo({ name: popupEditName, working: popupEditAboutU });

//Создание формы editPopup
const createdPopupEditForm = new PopupWithForm(popupEdit, profileBtnEditPopup, { 
	open: () => {
		return createdPopupEditForm._getInputValues(profile.getUserInfo());
	}, 
																				
	submit: (event) => {
		event.preventDefault();
	
		profile.setUserInfo(createdPopupEditForm._getInputValues());
	}
});

createdPopupEditForm.setEventListeners();

//Создание формы addPopup
const createdPopupAddForm = new PopupWithForm(popupAdd, profileBtnAddPopup, { 
	open: () => {
		return ;
	},
	
	submit: (event) => {
		event.preventDefault();
			
		const createCard = new Section( { items: createdPopupAddForm._getInputValues(), renderer: (item) => {
				const comleteItem = { name: item.popupNnameOfImg, link: item.popupLinkForImg };
				
				const card = new Card(comleteItem, 'element', { handleCardClick: (elementImg, elementName) => {
						elementImg.addEventListener('click', () => {
							createdModalImage.open(elementImg, elementName);
						});
					} 
				});
				
				const complectedCard = card.generatorCard();
				
				createCard.addItem(complectedCard);
			} 
		}, elements);	
	
		createCard.renderItems();
		createdPopupAddForm.close();
	},
});

createdPopupAddForm.setEventListeners();

modal.addEventListener('click', (event) => {
	const eventModal = event.target.classList.contains('modal-image');
	const eventModalClose = event.target.classList.contains('modal-image__close');
	const eventModalContainer = event.target.classList.contains('modal-image__container');

	if (eventModal || eventModalClose || eventModalContainer) createdModalImage.close();
	});