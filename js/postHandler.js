export const createNewPost = async () => {
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

export const postReply = async id => {
	const reply = localStorage.getItem(`reply${id}`);
	const { username } = JSON.parse(localStorage.getItem('userName'));
	if (reply && username) {
		try {
			const res = await fetch(`http://localhost:7777/api/topics/${id}/posts`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					user: username,
					text: reply,
				}),
			});
			const data = await res.json();
			console.log(data);
			localStorage.removeItem(`reply${id}`);
			location.reload();
		} catch (err) {
			console.log(err);
		}
	}
};
