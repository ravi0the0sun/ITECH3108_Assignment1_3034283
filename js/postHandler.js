export const createNewPost = async post => {
	const dum = 'Hello World!!!';
	const postTitle = localStorage.getItem('postCash');
	const postText = localStorage.getItem('textCash');
	const { username } = JSON.parse(localStorage.getItem('userName'));
	if (postTitle && postText && username) {
		try {
			const res = await fetch('http://localhost:7777/api/topics', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					user: username,
					title: postTitle,
					text: postText,
				}),
			});
			const data = await res.json();
			console.log(data);
			localStorage.removeItem('postCash');
			localStorage.removeItem('textCash');
			location.reload();
		} catch (err) {
			console.log(err);
		}
	}
};

const postReply = reply => {
	const dum = 'Hello World!!!';
};
