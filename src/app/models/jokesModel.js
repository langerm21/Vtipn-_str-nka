exports.getRandom = async () => {
	const apiURL = 'https://official-joke-api.appspot.com/jokes/random';
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data) {
		console.log("Vtip:", data);
		return data;
	} else {
		return { type: 'generel',
				setup: "You know what isn't a joke?",
				punchline: 'This joke. Error while getting random joke.',
				id: -1};
	}
}

exports.getByType = async (type) => {
	const apiURL = 'https://official-joke-api.appspot.com/jokes/';
	apiURL += type + "/random";
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data) {
		console.log("Vtip:", data);
		return data;
	} else {
		return false;
	}
}