/** 
	* Класс Api
	* @constructor
	* @param {string} url - основная ссылка.
*/
export default class Api {
	constructor(url, token) {
		this.url = url;
		this.token = token;
	}
		
	methodApi(item) {
		return fetch(`${this.url}${item.url}`, {
			method: item.parameters.method,
			body: item.parameters.body,
			headers: {
				authorization: this.token,
				'Content-Type': (item.parameters.headers) ? item.parameters.headers.ContentType : ''
			}
		});
	}
}