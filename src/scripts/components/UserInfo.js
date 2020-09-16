///** 
//	* Класс UserInfo
//	* @constructor
//	* @param {string} userName - имя пользователя.
//	* @param {string} userDescription -  деятельность пользователя.
//*/
export default class UserInfo {
	constructor({ userName, userDescription }) {
		this.profileName = userName;
		this.profileWorking = userDescription;
	}
	
	/** Отправлять данные в форму в popupEdit */
	getUserInfo() {
		return {
			profileName: this.profileName.textContent,
			profileWorking: this.profileWorking.textContent,
		};
	}
	
	/** Установить данные в inputs in popupEdit */
	setUserInfo(popupEdit) {
		const popupEditName = popupEdit.querySelector('.popup__input_view_name');
		const popupEditWorking = popupEdit.querySelector('.popup__input_view_about-u');
	
		this.profileName.textContent = popupEditName.value;
		this.profileWorking.textContent = popupEditWorking.value;
	}
}