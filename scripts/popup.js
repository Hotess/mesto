 let popup = { 
	 body: document.querySelector('.body'),
	 elements: document.querySelector('.elements'),
	 profile: document.querySelector('.profile'),
	 
	 //Закрытие попапа
	 closePopup(event) {
		 if (event.target.classList.contains('popup__close')) {
			event.target.closest('.popup').classList.remove('popup_opened');
			
		} else if (event.target.classList.contains('popup__form')) {
			event.target.closest('.popup').classList.remove('popup_opened');	
		}
	},
}

//Манипуляция попапом
function manipulationPopup(event) {
	const popupEdit = document.querySelector('.popup__container-edit');
	const popupAdd = document.querySelector('.popup__container-add');
	const profile = document.querySelector('.profile');
	
	//Открытие попапа
	 if (event.target.classList.contains('profile_button')) {
			const btnpPessed = event.target.className.split(' ')[0];
			 
			switch(btnpPessed) {
				case 'profile__edit-button': 
					popupEdit.classList.add('popup_opened');
					popupEdit.querySelector('.popup__item_view_name').value = document.querySelector('.profile__name').textContent;
					popupEdit.querySelector('.popup__item_view_about-u').value = document.querySelector('.profile__working').textContent;
					break;

				case 'profile__add-button': 
					popupAdd.classList.add('popup_opened');
					break;
			}
}
	
	popup.closePopup(event);
}
 
//Выполнение попапа
function executionPopup(event) {
	event.preventDefault();

	//Данные, введёные в попап-редакторе, сохраняются в profile
	function dataPopupEdit(event) {
		if (event.target.classList.contains('popup__form-edit')) {
			popup.profile.querySelector('.profile__name').textContent = event.target.querySelector('.popup__item_view_name').value;
			popup.profile.querySelector('.profile__working').textContent = event.target.querySelector('.popup__item_view_about-u').value;

			popup.closePopup(event);
		}
	};

	dataPopupEdit(event);
	
	//Добавление изображения	
	function addImg(event) {
		if (event.target.classList.contains('popup__form-add')) {
			const template = document.querySelector('#template-element').content.cloneNode(true);
			const templateImgName = template.querySelector('.element__text');
			const templateImgUrl = template.querySelector('.element__img');

			templateImgUrl.src = event.target.querySelector('.popup__item-link-for-img').value;
			templateImgName.textContent = event.target.querySelector('.popup__item-name-of-img').value;
			
			popup.elements.prepend(template);
		}
		
		popup.closePopup(event);
	};

	addImg(event);
};
	
popup.body.addEventListener('click', manipulationPopup);
popup.body.addEventListener('submit', executionPopup);