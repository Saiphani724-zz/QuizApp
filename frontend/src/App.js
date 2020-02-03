import React, { Component } from 'react';
import Welcome from './Components/Welcome/Welcome';
import Dashboard from './Components/StudentDashboard/Dashboard';
import TestArena from './Components/TestArena/TestArena';
import ViewResult from './Components/ViewResult/ViewResult';

import { Route, Switch } from 'react-router-dom';

const notdefined = () => {
	return (
		<div className="jumbotron text-center">
			<h1 >Page Not Found</h1>
			<h2>Error 404 (+ 16 specially for you with <i className="far fa-heart"></i>)</h2>
		</div>
	)
}
class App extends Component {
	render = () => {
		return (
			<main>
				<Switch>
					<Route path='/' component={Welcome} exact />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/viewResult' component={ViewResult} />
					<Route path='/testArena' component={TestArena} />
					<Route component={notdefined} />
				</Switch>
			</main>
		);
	}

}


export default App;
