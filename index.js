async function login() {
	const userName = document.getElementById('loginInput').value.toString();
	try {
		const userInfo = await fetch('http://localhost:7777/api/users', {
			method: 'GET',

			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const data = await userInfo.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
	// fetch('http://localhost:7777/api/users', {
	// 	method: 'GET',
	// }).then(res => console.log(res));
}
