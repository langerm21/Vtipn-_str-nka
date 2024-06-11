exports.getRandom = async () => {
	const apiURL = 'https://official-joke-api.appspot.com/jokes/random';
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data || data.type == 'error') {
		console.log("Vtip:", data);
		return data;
	} else {
		return errorJoke();
	}
}

exports.getByType = async (type) => {
	let apiURL = 'https://official-joke-api.appspot.com/jokes/';
	apiURL += type + '/random';
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data || data.type == 'error') {
		console.log("Vtip:", data);
		return data[0];
	} else {
		return errorJoke();
	}
}

exports.getById = async (id) => {
	let apiURL = 'https://official-joke-api.appspot.com/jokes/';
	apiURL += id;
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	console.log(data.type);
	
	if(data.type != 'error') {
		console.log("Vtip:", data);
		return data;
	} else {
		return errorJoke();
	}
}

function errorJoke(){
	return { type: 'general',
				setup: "You know what isn't a joke?",
				punchline: 'This joke. Error while getting joke.',
				id: -1};
}