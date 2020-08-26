//Создание модального изоражения
 function createModal(card) {
	const modal = document.querySelector('.modal-image');
	const modalContainer = modal.querySelector('.modal-image__container');
	const modalBtnClose = modal.querySelector('.modal-image__close');
	const modalImage = modal.querySelector('.modal-image__img');
	const modalText = modal.querySelector('.modal-image__text');

	return { 
		modal: modal, 
		img: modalImage,
		text: modalText,
		btnClose: modalBtnClose, 
		contain: modalContainer, 
	};
 }

//данные в модальном изображении
function dataModal(card) {
	const objModal = createModal();
	const cardText = card.closest('.element').querySelector('.element__text');

	objModal.img.src = card.src;
	objModal.text.textContent = cardText.textContent;
	objModal.img.alt = cardText.textContent;
}

//Обработчик слушателя модального изображение
function setEventListenersShowIimage(card, objModal) {
	card.addEventListener('click', (event) => {
		dataModal(event.target);
		openedModalImage(objModal.modal);
	});

	document.addEventListener('click', (event) => {
		const pressCloseImg = event.target.classList.contains('modal-image__close') || event.target.classList.contains('modal-image') || event.target.classList.contains('modal-image__container');

		if	(pressCloseImg) {
			closeModalImage(objModal.modal);
		}
	});  
}

//Закрыть модальное изображение
function closeModalImage(modal) {
	modal.classList.remove('modal-image_opened');

	document.removeEventListener('keydown', (event) => { closeKeyImg(modal) });
}

//Открыть модальное изображение
function openedModalImage(modal) {

	modal.classList.add('modal-image_opened');

	document.addEventListener('keydown', (event) => { closeKeyImg(modal) });
}

//Закрытие изображение клавишей Escape
function closeKeyImg(modal) {
	if (event.key == 'Escape' && modal) {
		closeModalImage(modal);
	};
}

//Показ изображение
export default function showImage(card) {
	const objModal = createModal();
	
	setEventListenersShowIimage(card, objModal);
}