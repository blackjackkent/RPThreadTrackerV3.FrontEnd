import axios from 'axios';

class NewsApi {
	static getNews() {
		return axios.get('http://localhost:3001/news')
			.then(response => response.data);
	}
}

export default NewsApi;
