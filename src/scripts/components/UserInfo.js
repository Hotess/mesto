/** 
	* Класс UserInfo
	* @constructor
	* @param {string} userName - имя пользователя.
	* @param {string} userDescription -  деятельность пользователя.
*/
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
	setUserInfo({ name, about }) {
		this.profileName.textContent = name;
		this.profileWorking.textContent = about;
	}
}