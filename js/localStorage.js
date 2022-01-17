export function checkUserName() {
	return !localStorage.getItem('userName') ? false : true;
}

export function getUserName() {
	return localStorage.getItem('userName');
}

export function setUserName(data) {
	localStorage.setItem(JSON.stringify(data));
}
