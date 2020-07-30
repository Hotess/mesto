const page = document.querySelector('.page');
const editButton = document.querySelector('.profile__edit-button');
const AddButton  = document.querySelector('.profile__add-button');
const containerEdit = document.querySelector('.popup__container-edit');
const containerAdd = document.querySelector('.popup__container-add');
const popupFormEdit = document.querySelector('.popup__form-edit');
const popupFormAdd = document.querySelector('.popup__form-add');
const popupCloseEdit = document.querySelector('.popup_close-edit');
const popupCloseAdd = document.querySelector('.popup_close-add');
const profileInfo = document.querySelector('.profile__info');
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');
const elementImg = elements.querySelector('.element__img');
const elementText = elements.querySelector('.element__text');
const elementTrash = elements.querySelector('.element__trash');
const popupName = document.querySelector('.popup__item_view_name');
const popupAboutU = document.querySelector('.popup__item_view_about-u');
const profileName = document.querySelector('.profile__name');
const profileWorking = document.querySelector('.profile__working');
const popupNameOfImg = document.querySelector('.popup__item_name-of-img'); 
const popupLinkForImg = document.querySelector('.popup__item-link-for-img');
const templeteElementimg = document.querySelector('#template-element-img').content.cloneNode(true);
const templateModal = templeteElementimg.querySelector('.template-modal');
const templateClose = templeteElementimg.querySelector('.template-modal__close');
const templeteImg = templeteElementimg.querySelector('.template-modal__img');
const templeteText = templeteElementimg.querySelector('.template-modal__text');

//Открытие/закрытие кнопкой-редактор попап
function openPopupEdit() {
	containerEdit.classList.toggle('popup_opened');
	popupName.value = profileName.textContent;
	popupAboutU.value = profileWorking.textContent;
}

//закрытие попап-редактора
function closePopupEdit() {
	containerEdit.classList.remove('popup_opened');
}

//данные, введеные в попап-редакторе
function editPopup(event) {
	event.preventDefault();
	
	profileName.textContent = popupName.value;
	profileWorking.textContent = popupAboutU.value;
	
	closePopupEdit();
}

//Открытие/закрытие кнопкой-редактор попап
function openPopupAdd() {
	containerAdd.classList.toggle('popup_opened');
}

//закрытие попап-добавления
function closePopupAdd() {
	containerAdd.classList.remove('popup_opened');
}

//Добавление изображения с названием в elements
function addPopup(event) {
	event.preventDefault();
	
	const ImgName = document.querySelector('.popup__item-name-of-img');
	const ImgUrl = document.querySelector('.popup__item-link-for-img');
	const elImgTemplate = document.querySelector('#template-element').content.cloneNode(true);
	const imgNameTemplate = elImgTemplate.querySelector('.element__text');
	const imgUrlTemplate = elImgTemplate.querySelector('.element__img');
	
	imgNameTemplate.textContent = ImgName.value;
	imgUrlTemplate.src = ImgUrl.value;
	
	elements.prepend(elImgTemplate);
	
	//закрытие попап-добавления
	closePopupAdd();
}

//Открытие изображения
function openElemImg(event) {
	
	if (event.target.classList.contains('element__img')) {
		const element = event.target.closest('.element');
		
		templeteImg.src = event.target.src;
		templeteText.textContent = element.querySelector('.element__text').textContent;
		console.log(element);
		    
		page.prepend(templateModal);
	}	
}

//Закрытие изображения
function closeElemImg(event) {
	if (event.target.classList.contains('template-modal__close')) {
		templateModal.remove();
	}
}

//Поставить/отменить лайк в element
function activeLike(event) {
	if (event.target.classList.contains('element__like')) {
		event.target.classList.toggle('element__like_active');
	}
}

// удалить element
function removeElement(event) {
	if (event.target.classList.contains('element__trash')) {
		event.target.closest('.element').remove();
	}
}

editButton.addEventListener('click', openPopupEdit);
popupFormEdit.addEventListener('submit', editPopup);
popupCloseEdit.addEventListener('click', closePopupEdit);
AddButton.addEventListener('click', openPopupAdd);
popupFormAdd.addEventListener('submit', addPopup);
popupCloseAdd.addEventListener('click', closePopupAdd);
elements.addEventListener('click', removeElement);
elements.addEventListener('click', activeLike);
elements.addEventListener('click', openElemImg);
page.addEventListener('click', closeElemImg);