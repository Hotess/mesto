let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__close');
let profileInfo = document.querySelector('.profile__info');

editButton.addEventListener('click', function() {
	popup.classList.toggle('popup_opened');
	
});

function closePopup() {
	popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', function(event) {
	event.preventDefault();
	
	for (let i = 0; i < popupForm.elements.length; i++) {
		let profileInfoElements = [];
		
			for (let elem of profileInfo.children) {
				if (!(elem.nodeName == "IMG")) {
					profileInfoElements.push(elem);
				}
			}
		
		if (popupForm.elements[i].type == "text") {
			profileInfoElements[i].textContent = popupForm.elements[i].value; 
			
			if (profileInfoElements[i].nodeName == "H2" && profileInfoElements[i].textContent.length > 20) {		
				profileInfoElements[i].textContent = profileInfoElements[i].textContent.slice(0, 17);
			}
			
			if (profileInfoElements[i].nodeName == "P" && profileInfoElements[i].textContent.length > 20) {
				profileInfoElements[i].textContent = profileInfoElements[i].textContent.slice(0, 60);
			}
		}
	}
	
	closePopup();
});

let addButton = document.querySelector('.profile__add-button');
let elements = document.querySelector('.elements');
let element = document.querySelector('.element');

addButton.addEventListener('click', () => {
	elements.insertAdjacentHTML('afterBegin', element.outerHTML);
});