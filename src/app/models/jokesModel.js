exports.getRandom = async () => {
	const apiURL = 'https://official-joke-api.appspot.com/jokes/random';
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data) {
		console.log("Vtip:", data);
		return data;
	} else {
		return false;
	}
}