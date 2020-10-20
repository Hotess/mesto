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
	popupAdd,
	popupDeleteCard,
	popupUpdateAvatar,
	popupImage,
	avatar,
	profileImg,
	formConfig,
} from './../utils/constants.js';

import Popup from './../components/Popup.js';
import PopupWithForm from './../components/PopupWithForm.js';
import PopupWithImage from './../components/PopupWithImage.js';
import UserInfo from './../components/UserInfo.js';
import FormValidator from './../components/FormValidator.js';
import Card from './../components/Card.js';
import Section from './../components/Section.js';
import Api from './../components/Api.js';
import PopupRemoveCard from './../components/PopupRemoveCard.js';

/** Валидация формы popupEdit */
const editFormValidator = new FormValidator(formConfig, popupEdit).enableValidation();

/** Валидация формы popupAdd */
const addFormValidator = new FormValidator(formConfig, popupAdd).enableValidation();

/** Валидация формы popupAvatar */
const updateAvatarFormValidator = new FormValidator(formConfig, popupUpdateAvatar).enableValidation();

/** Данные профиля */
const profile = new UserInfo({ userName: profileName, userDescription: profileWorking, avatar: profileImg });

/** Модальное окно с изображением */
const createdPopupImage = new PopupWithImage(popupImage);

createdPopupImage.setEventListeners();

/** Api */
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-16/', 'd57d642f-96c7-4e83-b2db-eafa38e723fc');

const loading = function(bool, button, option) {
	if (bool) {
		button.textContent = option;
	} else {
		button.textContent = option;
	}
};

/** Шаблон карточки */
const createCard = function(item) {
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
				}).catch(error => {
					console.log(error);
				});
				
			} else {			
				return api.toggleLike({ 
					url: apiItemImage, 
					method: 'PUT'
				}).then(() => { 
					activeLike();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		
		/** Удаление карточки */
		handleDeleteIconClick: (removeCard) => {
			popupDeleteMyCard.setEventListeners(removeCard.bind(null, api));
		}
  
	}).generatorCard();
		
	return tempateCard
}

/** Автоматическое добалвение карточек */
const apiCreateCards = new Promise((resolve, reject) => {
	api.getInitialCards().then(res => {
		const inElements = new Section({ items: res,
			renderer: (item) => {
				const cardElement = createCard(item);
				
				inElements.addItem(cardElement, item);
			}
		}, elements);

		 inElements.renderItems();
	}).then((res) => {
		return resolve('Карточки загрузились');
	}).catch((error) => {
		return reject(error);
	});
});

/** Получение данные из сервера */
const updateProfile = new Promise((resolve, reject) => {
	api.getProfile().then(res => {
		profile.setUserInfo({ name: res.name, about: res.about, image: res.avatar});
	}).then((res) => {
		return resolve('Данные профиля загрузились');
	}).catch((error) => {
		return reject(error);
	});
});

const dataOfServer = [updateProfile, apiCreateCards];

/** Синхоранная прогзрука данных профиля и карточек с сервера  */
Promise.all(dataOfServer).then((result) => {
	return (result[0]) ? result[1] : result;
}).catch(error => {
	console.log(error);
}).then(result => {
	return (result) ? result : result;
}).catch(error => {
	console.log(error);
});

/** Попап удаления карточки */
const popupDeleteMyCard = new PopupRemoveCard(popupDeleteCard, {
	
	/** Запрос на удаления карточки на сервер */
	submit: (close, removeCard) => {
		removeCard();
		close();
	}
});

/** Создание формы editPopup */
const createdPopupEditForm = new PopupWithForm(popupEdit, profileBtnEditPopup, {
	
	/** Открытие попапа  */
	open: (gotValues) => { 
		return gotValues(profile.getUserInfo());
	}, 
	
	/** Отправка данных профиля на сервер */
	submit: (gotValues, close) => {
		const buttonEdit = popupEdit.querySelector('.popup__button');
		
		api.setProfile({ name: popupEditName.value, about: popupEditaboutU.value }).then((res) => {
			setTimeout(() => {
				profile.setUserInfo({ name: res.name, about: res.about });
			}, 500);
			
			loading(false, buttonEdit, 'Сохранение...');
		}).then(() => {
			setTimeout(() => {
				loading(true, buttonEdit, 'Сохранить', close());
			}, 500);
		}).catch(error => {
			console.log(error);
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
		const buttonAdd = popupAdd.querySelector('.popup__button');
		
		const addNewCard = new Section({ items: gotValues(), 
			renderer: (item) => {
				const image = { name: item.popupNameOfImg, link: item.popupLinkForImg };
				
				api.setImage({
					url: image.link,
					name: image.name, 
					link: image.link,
				}).then((res) => { 
					setTimeout(() => {
						const cardElement = createCard(res);
					
						addNewCard.addItem(cardElement);
					}, 200);
					
					loading(false, buttonAdd, 'Создать...');
				}).then(() => {
					setTimeout(() => {
						loading(true, buttonAdd, 'Создать', createdPopupAddForm.close());
					}, 500);
				}).catch(error => {
					console.log(error);
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
	
	/** Отправка изображения на аватар на сервер */
	submit: (gotValues) => {
		const buttonUpdate = popupUpdateAvatar.querySelector('.popup__button');
		const [image] = gotValues();

		api.setAvatar(image.popupUpdateImage).then(res => { 
			setTimeout(() => {
				profile.avatar.src = res.avatar;
			}, 500);
			
			loading(false, buttonUpdate, 'Сохранение...');
		}).then(() => {
			setTimeout(() => {
				loading(true, buttonUpdate, 'Сохранение', popupAvatar.close());
			}, 500);
		}).catch(error => {
			console.log(error);
		});
	}
});

popupAvatar.setEventListeners();