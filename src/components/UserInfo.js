/** 
	* Класс UserInfo
	* @constructor
	* @param {string} userName - имя пользователя.
	* @param {string} userDescription -  деятельность пользователя.
	* @param {string} avatar -  аватар.
*/
export default class UserInfo {
	constructor({ userName, userDescription, avatar }) {
		this.profileName = userName;
		this.profileWorking = userDescription;
		this.avatar = avatar;
	}
	
	/** Отправлять данные в форму в popupEdit */
	getUserInfo() { 
		return {
			profileName: this.profileName.textContent,
			profileWorking: this.profileWorking.textContent,
			avatar: this.avatar.src,
		};
	}
	
	/** Установить данные в inputs in popupEdit */
	setUserInfo({ name, about, image }) {
		this.profileName.textContent = name;
		this.profileWorking.textContent = about;
		
		if (image) this.avatar.src = image;
	}
}