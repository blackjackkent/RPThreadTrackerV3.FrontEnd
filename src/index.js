import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Full from './containers/Full/'
import Login from './views/Login/';

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/login" name="Login Page" component={Login} />
			<Route path="/" name="Home" component={Full} />
			<Route path="/threads" name="Threads" component={Full} />
		</Switch>
	</BrowserRouter>
), document.getElementById('root'));
