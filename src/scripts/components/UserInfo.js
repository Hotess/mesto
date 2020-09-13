export default class UserInfo {
	constructor({ name, working }) {
		this.userName = name;
		this.userWorking = working;
		this.profileName = document.querySelector('.profile__name');
		this.profileWorking = document.querySelector('.profile__working');
	}
	
	//Отправлять данные в форму в popupEdit
	getUserInfo() {
		return [
			this.profileName.textContent,
			this.profileWorking.textContent,
		];
	}
	
	//Установить данные в inputs in popupEdit
	setUserInfo(popupEditInputs) {
		popupEditInputs.forEach(input => {
			this.profileName.textContent = input.popupName;
			this.profileWorking.textContent = input.popupAboutUs;
		});
	}
}