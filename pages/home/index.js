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
		topics.map((item, index) => {
			const topicDiv = document.createElement('div');
			topicDiv.classList.add('topicDiv');
			const aTag = createElement('a', item.title);
			aTag.classList.add('topicTitle');

			if (params.has('id') && params.get('id') === index) {
				aTag.href = window.location.href;
			} else {
				aTag.href = `http://localhost:8000/pages/home?id=${item.id}`;
			}
			topicDiv.classList.add(`topicText${index + 1}`);
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
				throw new Error('TopicNotFound');
			}
			const topicData = await res.json();
			addingDeleteBtn(topicData.user, id);
			const topicsBlock = document
				.querySelector('.topicsBlock')
				.getElementsByTagName('div')[topicData.id - 1];

			topicData.posts.map(item => {
				const reply = document.createElement('p');
				const text = document.createTextNode(item.text);
				reply.appendChild(text);

				const user = document.createElement('p');
				user.classList.add('userReply');
				const userName = document.createTextNode(`-@${item.user}`);
				user.appendChild(userName);

				topicsBlock.appendChild(reply);
				topicsBlock.appendChild(user);
			});

			topicsBlock.appendChild(addingReplyDiv(id));
		} catch (err) {
			console.log(err);
			location.replace('http://localhost:8000/pages');
		}
	}
}

function addingDeleteBtn(user, id) {
	const { username } = JSON.parse(localStorage.getItem('userName'));
	if (user === username) {
		const topicTitleDiv = document.querySelector(`.topicText${id}`);
		const deleteTag = document.createElement('a');
		const textNode = document.createTextNode('(delete)');
		deleteTag.onclick = () => deleteTopic(id, username);
		deleteTag.href = 'http://localhost:8000/pages/home';
		deleteTag.appendChild(textNode);
		topicTitleDiv.appendChild(deleteTag);
	}
}

const deleteTopic = async (id, username) => {
	try {
		const res = await fetch(`http://localhost:7777/api/topics/${id}`, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				user: username,
			}),
		});
		const reply = await res.json();
		console.log(reply);
	} catch (err) {
		console.log(err);
	}
};

function addingReplyDiv(id) {
	const replyDiv = document.createElement('div');
	replyDiv.classList.add('replyDiv');

	const replyInput = document.createElement('input');
	replyInput.placeholder = 'Reply';
	replyInput.classList.add('.replyInput');
	if (replyInput.addEventListener) {
		replyInput.addEventListener('keyup', () =>
			localStorage.setItem(`reply${id}`, replyInput.value)
		);
	}

	const replyBtn = document.createElement('button');
	replyBtn.classList.add('replyBtn');
	const textNode = document.createTextNode('Reply');
	replyBtn.appendChild(textNode);

	replyDiv.appendChild(replyInput);
	replyDiv.appendChild(replyBtn);

	if (localStorage.getItem(`reply${id}`)) {
		replyInput.value = localStorage.getItem(`reply${id}`);
	}

	return replyDiv;
}
