import "./index.css";

import {
	elements,
	profileName,
	profileWorking,
	profileBtnEditPopup,
	profileBtnAddPopup,
	profileBtnUpdate,
	popups,
	popupEdit,
	popupEditName,
	popupEditaboutU,
	buttonEdit,
	popupAdd,
	buttonAdd,
	popupDeleteCard,
	popupUpdateAvatar,
	buttonUpdate,
	popupImage,
	avatar,
	profileImg,
	formConfig,
} from './../scripts/utils/constants.js';

import Popup from './../scripts/components/Popup.js';
import PopupWithForm from './../scripts/components/PopupWithForm.js';
import PopupWithImage from './../scripts/components/PopupWithImage.js';
import UserInfo from './../scripts/components/UserInfo.js';
import FormValidator from './../scripts/components/FormValidator.js';
import Card from './../scripts/components/Card.js';
import Section from './../scripts/components/Section.js';
import Api from './../scripts/components/Api.js';
import PopupRemoveCard from './../scripts/components/PopupRemoveCard.js';

/** Валидация формы popupEdit */
const editFormValidator = new FormValidator(formConfig, popupEdit).enableValidation();

/** Валидация формы popupAdd */
const addFormValidator = new FormValidator(formConfig, popupAdd).enableValidation();

/** Валидация формы popupAvatar */
const updateAvatarFormValidator = new FormValidator(formConfig, popupUpdateAvatar).enableValidation();

/** Данные профиля */
const profile = new UserInfo({ userName: profileName, userDescription: profileWorking });

/** Модальное окно с изображением */
const createdPopupImage = new PopupWithImage(popupImage);

createdPopupImage.setEventListeners();

/** Api */
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-16/', 'd57d642f-96c7-4e83-b2db-eafa38e723fc');

const loading = function(bool, button, option, closePopup) {
	if (bool) {
		button.textContent = option;
		closePopup;
	} else {
		button.textContent = option;
	}
}

/** Получение данные из сервера */
const updateProfile = api.getProfile().then(res => {
	profileImg.src = res.avatar; 
	profile.setUserInfo({ name: res.name, about: res.about });
});

/** Попап удаления карточки */
const popupDeleteMyCard = new PopupRemoveCard(popupDeleteCard, {
	
	/** Запрос на удаления карточки на сервер */
	submit: (close, removeCard) => {
		removeCard();
		close();
	}
});

/** Шаблон карточки */
const card = function(item) {
	const tempateCard = new Card(item, 'element', { 

		/**  Открывается при клике modalImage */
		handleCardClick: (elementImg, elementName) => {
			createdPopupImage.open(elementImg, elementName);
		},
		
		/**  Поставить/убрать лайк */
		handleLikeCard: (stateLike, apiItemImage, activeLike, deactiveLike) => {
			if (stateLike) {
				return api.toggleLike({
					url: apiItemImage, 
					method: 'DELETE' 
				}).then(() => { 
					deactiveLike();
				});
				
			} else {			
				return api.toggleLike({ 
					url: apiItemImage, 
					method: 'PUT'
				}).then(() => { 
					activeLike();
				});
			}
		},
		
		/** Удаление карточки */
		handleDeleteIconClick: (removeCard) => {;
			popupDeleteMyCard.setEventListeners(removeCard.bind(null, api));
		}
  
	}).generatorCard();
		
	return tempateCard
}

/** Автоматическое добалвение карточек */
const apiCreateCards = function() {
	api.getInitialCards().then(res => { 
		const inElements = new Section({ items: res,
			renderer: (item) => {
				const cardElement = card(item);
				
				inElements.addItem(cardElement, item);
			}
		}, elements);

		 inElements.renderItems();
	})
}

apiCreateCards();

/** Создание формы editPopup */
const createdPopupEditForm = new PopupWithForm(popupEdit, profileBtnEditPopup, {
	
	/** Открытие попапа  */
	open: (gotValues) => { 
		return gotValues(profile.getUserInfo());
	}, 
	
	/** Отправка данных профиля на сервер */
	submit: (gotValues, close) => {
		api.setProfile({ 
			name: popupEditName.value, 
			about: popupEditaboutU.value 
		}).then((res) => {
			setTimeout(() => {
				profile.setUserInfo({ name: res.name, about: res.about });
			}, 500);
			
			loading(false, buttonEdit, 'Сохранение...');
		}).then(() => {
			setTimeout(() => {
				loading(true, buttonEdit, 'Сохранить', close());
			}, 500);
		});
	}
});

createdPopupEditForm.setEventListeners();

/** Создание формы addPopup */
const createdPopupAddForm = new PopupWithForm(popupAdd, profileBtnAddPopup, {
	
	/** null  */
	open: () => {
		return;
	},
	
	/** Отправка данных на сервер готовую карточку */
	submit: (gotValues) => {
		const addNewCard = new Section({ items: gotValues(), 
			renderer: (item) => {
				const image = { name: item.popupNameOfImg, link: item.popupLinkForImg };
				
				api.setImage({
					url: image.link,
					name: image.name, 
					link: image.link,
				}).then((res) => { 
					setTimeout(() => {
						const cardElement = card(res);
					
						addNewCard.addItem(cardElement);
					}, 200);
					
					loading(false, buttonAdd, 'Создать...');
				}).then(() => {
					setTimeout(() => {
						loading(true, buttonAdd, 'Создать', createdPopupAddForm.close());
					}, 500);
				});	
			} 
		}, elements);	
	
		addNewCard.renderItems();
	},
});

createdPopupAddForm.setEventListeners();

/** Обновление аватарки */
const popupAvatar = new PopupWithForm(popupUpdateAvatar, profileBtnUpdate, {
	
	/** null */
	open: () => {
		return;
	},
	
	/** Отправка изображение на аватар на сервер */
	submit: (gotValues) => {
		const [image] = gotValues(); image.popupUpdateImage
		
		api.setAvatar(image.popupUpdateImage).then(res => { 
			setTimeout(() => {
				profileImg.src = res.avatar;
			}, 500);
			
			loading(false, buttonUpdate, 'Сохранение...');
		}).then(() => {
			setTimeout(() => {
				loading(true, buttonUpdate, 'Сохранение', popupAvatar.close());
			}, 500);
		});
	}
});

popupAvatar.setEventListeners();