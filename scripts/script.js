let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__close');
let profileInfo = document.querySelector('.profile__info');
let addButton = document.querySelector('.profile__add-button');
let elements = document.querySelector('.elements');
let element = document.querySelector('.element');
let popupName = document.querySelector('.popup__item_name');
let popupAboutU = document.querySelector('.popup__item_about-u');
let profileName = document.querySelector('.profile__name');
let profileWorking = document.querySelector('.profile__working');

function openPopup() {
	popup.classList.toggle('popup_opened');
	popupName.value = profileName.textContent;
	popupAboutU.value = profileWorking.textContent;
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

function editPopup() {
	event.preventDefault();
	
	profileName.textContent = popupName.value;
	profileWorking.textContent = popupAboutU.value;
	
	closePopup();
}

editButton.addEventListener('click', openPopup);
popupForm.addEventListener('submit', editPopup);
popupClose.addEventListener('click', closePopup);