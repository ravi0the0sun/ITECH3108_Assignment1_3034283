import { createNewPost } from './postHandler.js';

function createNewTopicInput() {
	const topics = document.querySelector('.topics');
	const topicCheck = document.querySelector('.topicInput');
	const postCash = localStorage.getItem('postCash');
	if (!topicCheck) {
		const postDiv = document.createElement('div');
		postDiv.classList.add('postDiv');
		const topicInput = document.createElement('input');
		topicInput.classList.add('topicInput');
		topicInput.placeholder = 'Post!!!';
		if (topicInput.addEventListener) {
			topicInput.addEventListener('keyup', () =>
				localStorage.setItem('postCash', topicInput.value)
			);
		}
		if (postCash) {
			topicInput.value = postCash;
		}
		const textField = document.createElement('textArea');
		textField.classList.add('textField');
		textField.placeholder = 'Write Something!!!';
		const textCash = localStorage.getItem('textCash');
		if (textField.addEventListener) {
			textField.addEventListener('keyup', () =>
				localStorage.setItem('textCash', textField.value)
			);
		}
		if (textCash) {
			textField.value = textCash;
		}
		const topicBtn = document.createElement('button');
		topicBtn.addEventListener('click', createNewPost);
		const textNode = document.createTextNode('Post!!!');
		topicBtn.classList.add('postBtn');
		topicBtn.appendChild(textNode);
		postDiv.append(topicInput, textField, topicBtn);

		topics.appendChild(postDiv);
	}
}

if (localStorage.getItem('postCash') || localStorage.getItem('textCash')) {
	createNewTopicInput();
}

const newTopic = document.querySelector('#newTopic');
newTopic.addEventListener('click', createNewTopicInput);
