function createNewTopicInput() {
	const topics = document.querySelector('.topics');

	const topicInput = document.createElement('input');
	topicInput.classList.add('topicInput');

	const topicBtn = document.createElement('button');
	const textNode = document.createTextNode('Post!!!');
	topicBtn.appendChild(textNode);
	topics.appendChild(topicInput);
	topics.appendChild(topicBtn);
}
