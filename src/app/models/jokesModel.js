exports.getRandom = () => {
	const apiURL = 'https://official-joke-api.appspot.com/jokes/random';
	
	fetch(apiURL)
	.then(response => {
		if (!response.ok){
			throw new Error('What...?');
		}
		return response.json();
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error('Error: ', err);
	});
	
	
	return data;
}