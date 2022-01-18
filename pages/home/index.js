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
	const topicsBlock = document.querySelector('.topicsBlock');

	const params = new URLSearchParams(window.location.search);
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
		topics.map((item, index) => {
			const topicDiv = document.createElement('div');
			topicDiv.classList.add('topicDiv');
			const aTag = createElement('a', item.title);
			if (params.has('id') && params.get('id') === index) {
				aTag.href = window.location.href;
			} else {
				aTag.href = `http://localhost:8000/pages/home?id=${item.id}`;
			}
			if (index < topics.length - 1) {
				topicDiv.classList.add('topicText');
			}
			topicDiv.appendChild(aTag);
			topicsBlock.appendChild(topicDiv);
		});
	} catch (err) {
		console.error(err);
	}
}

if (checkUserName()) {
	editWelcomeText();
	changeHidden();
	getTopics();
	checkTopic();
}

function createElement(tag, text) {
	const element = document.createElement(tag);
	const link = document.createTextNode(text);
	element.appendChild(link);
	return element;
}

async function checkTopic() {
	const params = new URLSearchParams(window.location.search);
	if (params.has('id')) {
		const id = params.toString().substring(params.toString().indexOf('=') + 1);
		try {
			const res = await fetch(`http://localhost:7777/api/topics/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			if (res.status === 404) {
				throw new Error('UsernameNotFound');
			}
			const topicData = await res.json();
			console.log(topicData);
			const topicsBlock = document
				.querySelector('.topicsBlock')
				.getElementsByTagName('div')[topicData.id - 1];
			console.log(topicsBlock[0]);

			topicData.posts.map(item => {
				const reply = document.createElement('p');
				const text = document.createTextNode(item.text);
				reply.appendChild(text);
				topicsBlock.appendChild(reply);
			});

			topicsBlock.appendChild(addingReplyDiv());
		} catch (err) {
			console.log(err);
			location.replace('http://localhost:8000/pages');
		}
	}
}

function addingReplyDiv() {
	const replyDiv = document.createElement('div');
	replyDiv.classList.add('replyDiv');

	const replyInput = document.createElement('input');
	replyInput.placeholder = 'Reply';
	replyInput.classList.add('.replyInput');

	const replyBtn = document.createElement('button');
	replyBtn.classList.add('replyBtn');
	const textNode = document.createTextNode('Reply');
	replyBtn.appendChild(textNode);

	replyDiv.appendChild(replyInput);
	replyDiv.appendChild(replyBtn);

	return replyDiv;
}
