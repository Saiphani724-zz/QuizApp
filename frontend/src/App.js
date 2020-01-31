import React, { Component } from 'react';
import Home from './Components/Welcome/Welcome';
import Dashboard from './Components/StudentDashboard/Dashboard';

import { Route, Switch } from 'react-router-dom';

const notdefined  = ()=> { return (
	<div>
		<h1>Page Not Found</h1>
		<h2>Error 404 (+ 16 specially for you)</h2>
	</div>
) }
class App extends Component {
	render = () => {
		return (
			<main>
				<Switch>
				<Route path='/' component={Home} exact/>
				<Route path='/dashboard' component={Dashboard} />
				<Route component = {notdefined} />
				</Switch>
			</main>
		);
	}

}


export default App;
