const body = document.querySelector('.body');
const elements = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const popup = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_container_edit');
const popupAdd = document.querySelector('.popup_container_add');
	
let initialCards = [
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
	popup.forEach((item, index, array) => {
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
	 if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup__form')) {
		 event.target.closest('.popup').classList.remove('popup_opened');
	 }
};

//Данные, введёные в попап-редакторе, сохраняются в profile
function dataPopupEdit(event) {
	event.preventDefault();
	
	if (event.target.classList.contains('popup__form-edit')) {
		profile.querySelector('.profile__name').textContent = event.target.querySelector('.popup__item_view_name').value;
		profile.querySelector('.profile__working').textContent = event.target.querySelector('.popup__item_view_about-u').value;
		
		console.log(profile.querySelector('.profile__name').textContent);
		
		closePopup(event);
	}
};

//Добавление изображения	
function addImg(event) {
	event.preventDefault();
	
	if (event.target.classList.contains('popup__form-add')) {
		const template = document.querySelector('#template-element').content.cloneNode(true);
		const templateImgName = template.querySelector('.element__text');
		const templateImgUrl = template.querySelector('.element__img');

		templateImgUrl.src = event.target.querySelector('.popup__item-link-for-img').value;
		templateImgName.textContent = event.target.querySelector('.popup__item-name-of-img').value;
		
		initialCards.push({
			name: templateImgName.textContent, 
			link: templateImgUrl.src,
		});
		
		console.log(initialCards);
		elements.prepend(template);
	}

	closePopup(event);
};

//Автоматическое добавление 6-ти карт
function addAutoSixCards() {
	initialCards.forEach(item => {
		const template = document.querySelector('#template-element').content.cloneNode(true);
		const templateImgName = template.querySelector('.element__text');
		const templateImgUrl = template.querySelector('.element__img');
		
		templateImgUrl.src = item.link;
		templateImgName.textContent = item.name;
		elements.prepend(template);
	}); 
};

addAutoSixCards();

body.addEventListener('click', openPopup);
body.addEventListener('click', closePopup);
body.addEventListener('submit', dataPopupEdit);
body.addEventListener('submit', addImg);