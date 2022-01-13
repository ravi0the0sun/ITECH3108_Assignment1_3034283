async function login() {
	const userName = document.getElementById('loginInput').value.toString();
	try {
		const userInfo = await fetch('http://localhost:7777/api/users', {
			method: 'GET',
		});
		console.log(userInfo);
	} catch (error) {
		console.log(error);
	}
}
