import "./index.css";

import {
	elements,
	profileName,
	profileWorking,
	profileBtnEditPopup,
	profileBtnAddPopup,
	popups,
	popupEdit,
	popupAdd,
	formConfig,
	initialCards,
	popupImage,
} from './../scripts/utils/constants.js';

import Popup from './../scripts/components/Popup.js';
import PopupWithForm from './../scripts/components/PopupWithForm.js';
import PopupWithImage from './../scripts/components/PopupWithImage.js';
import UserInfo from './../scripts/components/UserInfo.js';
import FormValidator from './../scripts/components/FormValidator.js';
import Card from './../scripts/components/Card.js';
import Section from './../scripts/components/Section.js';

/** Карточка, готовая ко созданию */
const card = function(item) {
	const createdPopupImage = new PopupWithImage(popupImage);
	
	return new Card(item, 'element', {
		/**  открывается при клике modalImage */
		handleCardClick: (elementImg, elementName) => {
			return new Popup(popupImage).open(createdPopupImage.open(elementImg, elementName));
		} 
	});
}

/** Автоматическое добалвение карточек */
const createdCards = new Section({ items: initialCards, renderer: (item) => {
		const complectedCardElement = card(item).generatorCard();
	
		createdCards.addItem(complectedCardElement, item);
	}
}, elements);

createdCards.renderItems();

/** Валидация формы popupEdit */
const editFormValidator = new FormValidator(formConfig, popupEdit);

editFormValidator.enableValidation();

/** Валидация формы popupAdd */
const addFormValidator = new FormValidator(formConfig, popupAdd);

addFormValidator.enableValidation();

/** Данные в профиле */
const profile = new UserInfo({ userName: profileName, userDescription: profileWorking });

/** Создание формы editPopup */
const createdPopupEditForm = new PopupWithForm(popupEdit, profileBtnEditPopup, { 
	open: (gotValues) => { 
		return gotValues(profile.getUserInfo());
	}, 
																				
	submit: (close) => {
		profile.setUserInfo(popupEdit);
		close;
	}
});

createdPopupEditForm.setEventListeners();

/** Создание формы addPopup */
const createdPopupAddForm = new PopupWithForm(popupAdd, profileBtnAddPopup, { 
	open: () => {
		return ;
	},
	
	submit: (gotValues) => {
		const createCard = new Section( { items: gotValues(), renderer: (item) => {
				const comleteItem = { name: item.popupNnameOfImg, link: item.popupLinkForImg };
				const complectedCard = card(comleteItem).generatorCard();
				
				createCard.addItem(complectedCard);
			} 
		}, elements);	
	
		createCard.renderItems();
		createdPopupAddForm.close();
	},
});

createdPopupAddForm.setEventListeners();