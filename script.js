const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=37.81021&lon=-122.42282&date=2021-08-24&units=auto';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0b65e50d93msha5c4c87ea35014bp1fd3cdjsn022bfbce7aee',
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}