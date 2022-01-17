import { checkUserName } from '/js/localStorage.js';

function editWelcomeText() {
	const userName = JSON.parse(localStorage.getItem('userName'));
	document.querySelector(
		'.welcomeText'
	).innerHTML = `Welcome ${userName.name}!!!`;
}

function changeHidden() {
	const hiddenClass = document.querySelector('.hidden');
	if (!hiddenClass.style.visibility) {
		hiddenClass.style.visibility = 'visible';
	}
}

async function getTopics() {
	try {
		const res = await fetch('http://localhost:7777/api/topics', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const topics = await res.json();
		console.log(topics);
	} catch (err) {
		console.error(err);
	}
}

if (checkUserName()) {
	editWelcomeText();
	changeHidden();
	getTopics();
}
