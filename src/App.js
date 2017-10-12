import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';

// Containers
import Full from './containers/Full/Full';
import Login from './views/Login/Login';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" name="Login Page" component={Login} />
					<Route path="/" name="Home" component={Full} />
					<Route path="/threads" name="Threads" component={Full} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
