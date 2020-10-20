/** 
	* Класс Api
	* @constructor
	* @param {string} url - основная ссылка.
	* @param {string} token - авторизация.
*/
export default class Api {
	constructor(url, token) {
		this.url = url;
		this.token = token;
	}
	
	/** Получение карточек из сервера */
	getInitialCards() {
  		return fetch(`${this.url}cards`, {
    		headers: {
      			authorization: this.token
			}
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	/** Добавить карточку */
	setImage(item) {
		return fetch(`${this.url}cards`, {
			method: 'POST',
			body: JSON.stringify({ 
				name: item.name, 
				link: item.link,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				authorization: this.token
			}
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	/** Удалить карточку */
	deleteCard(item) {
		return fetch(`${this.url}cards/${item}`, {
			method: 'DELETE',
			headers: {
				authorization: this.token
			}
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	/** Поставить/убрать лайк */
	toggleLike(item) {
		return fetch(`${this.url}cards/likes/${item.url}`, { 
			method: item.method,
				headers: {
				authorization: this.token,
			},
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	/** Установить данные о пользователе */
	setProfile(item) {
		return fetch(`${this.url}users/me`, { 
			method: 'PATCH',
 			body: JSON.stringify({
   				name: item.name,
   				about: item.about
 			}),
				headers: {
				authorization: this.token,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	/** Получить данные о пользователе */
	getProfile() {
		return fetch(`${this.url}users/me`, {
			headers: {
				authorization: this.token
			},
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		})
	}
	
	/** Установить изображение на аватарку */
	setAvatar(image) {
		return fetch(`${this.url}users/me/avatar`, {
			method: 'PATCH',
			body: JSON.stringify({ avatar: image }),
			headers: {
				authorization: this.token,
				'Content-Type': 'application/json'
			}
		}).then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
		});
	}
}