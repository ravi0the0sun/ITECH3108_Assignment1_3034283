import { checkUserName, setUserName } from './js/localStorage.js';
// check if user has not logged out
checkLogin();

function checkLogin() {
	if (checkUserName()) {
		location.replace('http://localhost:8000/pages/home');
	}
}
