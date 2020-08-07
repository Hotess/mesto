const body = document.querySelector('.body');
const elements = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_container_edit');
const popupAdd = document.querySelector('.popup_container_add');
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

//Открытие попапа
function openPopup(event) {
	popups.forEach((item, index, array) => {
		if (event.target.classList.contains('profile__edit-button')) {
			array[0].classList.add('popup_opened');
			
			//Переменные name и working профиля присвоили значения в переменные name и working попапа
			popupEdit.querySelector('.popup__item_view_name').value = profile.querySelector('.profile__name').textContent;
			popupEdit.querySelector('.popup__item_view_about-u').value = profile.querySelector('.profile__working').textContent;

		} else if (event.target.classList.contains('profile__add-button')) {
			array[1].classList.add('popup_opened');		   
		};
	});
}
		   
//Закрытие попапа
function closePopup(event) {
	 if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup__button') || event.target.classList.contains('popup')) {
		 event.target.closest('.popup').classList.remove('popup_opened');
	 }
	
	closeKeyPopup();
};

//Закрытие попапа клавишей Escape
function closeKeyPopup() {
	popups.forEach(popupElement => {
		document.addEventListener('keydown', function(event) {
			if (event.keyCode == 27) {
				popupElement.classList.remove('popup_opened');
			}
		});
	});
}

//Данные, введёные в попап-редакторе, сохраняются в profile
function dataPopupEdit(event) {	
	if (event.target.classList.contains('popup__form-edit')) {
		profile.querySelector('.profile__name').textContent = event.target.querySelector('.popup__item_view_name').value;
		profile.querySelector('.profile__working').textContent = event.target.querySelector('.popup__item_view_about-u').value;
		
		closePopup(event);
	}
};

//Создание templateImg
function createImgTemplate(imgSrc, imgName) {
	const template = document.querySelector('#template-element').content.cloneNode(true);
	const templateElement = template.querySelector('.element');
	const templateImgName = templateElement.querySelector('.element__text');
	const templateImgUrl = templateElement.querySelector('.element__img');
	
	templateImgUrl.src = imgSrc;
	templateImgName.textContent = imgName;
	
	return templateElement;
}

//Добавление изображения	
function addImg(event) {
	if (event.target.classList.contains('popup__form-add')) {
		initialCards.push({
			name: event.target.querySelector('.popup__item-name-of-img').value, 
			link: event.target.querySelector('.popup__item-link-for-img').value,
		});
		elements.prepend(createImgTemplate(event.target.querySelector('.popup__item-link-for-img').value, event.target.querySelector('.popup__item-name-of-img').value));
	}

	closePopup(event);
};

//Автоматическое добавление 6-ти карт
function addAutoSixCards(templateImgName, templateImgUrl) {
	initialCards.forEach(item => {
		elements.prepend(createImgTemplate(item.link, item.name));
	}); 
};

addAutoSixCards();

body.addEventListener('click', openPopup);
body.addEventListener('click', closePopup);
body.addEventListener('submit', dataPopupEdit);
body.addEventListener('submit', addImg);