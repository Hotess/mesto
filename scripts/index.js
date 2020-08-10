const body = document.querySelector('.body');
const page = document.querySelector('.page');
const elements = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileWorking = document.querySelector('.profile__working');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_container_edit');
const popupEditName = document.querySelector('.popup__item_view_name');
const popupEditAboutU = document.querySelector('.popup__item_view_about-u');
const popupAdd = document.querySelector('.popup_container_add');
const popupAddName = document.querySelector('.popup__item-name-of-img');
const popupAddLink = document.querySelector('.popup__item-link-for-img');
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

//Создание templateImg
function createImgTemplate(imgSrc, imgName) {
	const template = document.querySelector('#template-element').content.cloneNode(true);
	const templateElement = template.querySelector('.element');
	const templateImgName = templateElement.querySelector('.element__text');
	const templateImgUrl = templateElement.querySelector('.element__img');
	
	templateImgUrl.src = imgSrc;
	templateImgName.textContent = imgName;
	templateImgUrl.alt = imgName;
	
	return templateElement;
}

//Автоматическое добавление 6-ти карт
function addAutoSixCards(templateImgName, templateImgUrl) {
	initialCards.forEach(item => {
		elements.prepend(createImgTemplate(item.link, item.name));
	}); 
};

addAutoSixCards();