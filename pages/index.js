import { checkUserName } from '/js/localStorage.js';

// checking if user has logged in
checkLogout();

function checkLogout() {
	if (!checkUserName()) {
		location.replace('http://localhost:8000');
	}
}
