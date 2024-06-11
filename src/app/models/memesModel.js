exports.getRandom = async () => {
	const apiURL = 'https://meme-api.com/gimme';
	
	let response = await fetch(apiURL);
	let data = await response.json();
	
	if(data) {
		console.log("Meme:", data);
		return data;
	} else {
		return { type: 'general',
				setup: "You know what isn't a joke?",
				punchline: 'This joke. Error while getting random joke.',
				id: -1};
	}
}