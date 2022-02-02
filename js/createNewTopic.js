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

		console.log(topicInput);

		const topicBtn = document.createElement('button');
		const textNode = document.createTextNode('Post!!!');
		topicBtn.appendChild(textNode);
		postDiv.appendChild(topicInput);
		postDiv.appendChild(topicBtn);
		topics.appendChild(postDiv);
	}
}

if (localStorage.getItem('postCash')) {
	createNewTopicInput();
}
