import axios from 'axios';

class UserApi {
	static getCurrentUser() {
		return axios.get('http://localhost:3001/user')
			.then(response => response.data);
	}

	static updateCurrentUser(user) {
		return axios.put('http://localhost:3001/user', user)
			.then(response => response.data);
	}
}

export default UserApi;
