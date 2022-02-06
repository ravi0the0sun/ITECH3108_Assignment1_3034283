const errorText = message =>
	(document.querySelector('#errorText').innerHTML = !message
		? ``
		: `Error: ${message}`);

async function login() {
	const userName = document.getElementById('loginInput').value.toString();
	try {
		if (!userName) {
			throw new Error('EmptyUsername');
		}
		const res = await fetch(`http://localhost:7777/api/users/${userName}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		if (res.status === 404) {
			throw new Error('UsernameNotFound');
		}
		const data = await res.json();
		errorText('');
		localStorage.setItem('userName', JSON.stringify(data));
		location.replace('http://localhost:8000/pages/home');
	} catch (error) {
		errorHandler(error);
	}
}

// TODO: get the document.querySelector shorter
// function getTag(tag) {
// 	return (tag = () => document.querySelector(tag));
// }

function errorHandler(error) {
	//console.log('Error:', error.message);
	if (error.message === 'EmptyUsername') {
		errorText('Username Empty!!!');
	}
	if (error.message === 'UsernameNotFound') {
		errorText('Username Not Valid!!!');
	}
}

function removeLoginTag() {
	document.querySelector('.login').innerHTML = '';
}

function logout() {
	localStorage.clear();
}
