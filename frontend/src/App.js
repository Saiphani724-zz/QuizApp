import React, { Component } from 'react';
import Welcome from './Components/Welcome/Welcome';
import StudentDashboard from './Components/StudentDashboard/Dashboard';
import FacultyDashboard from './Components/FacultyDashboard/Dashboard';
import FacultyLogin from './Components/FacultyLogin/FaculyLogin';
import TestArena from './Components/TestArena/TestArena';
import ViewResult from './Components/ViewResult/ViewResult';
import ViewStatistics from './Components/viewStatistics/viewStatistics';
import CreateQuiz from './Components/CreateQuiz/CreateQuiz';


import { Route, Switch } from 'react-router-dom';

const notdefined = () => {
	return (
		<div id="420" className="jumbotron text-center">
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
					<Route path='/dashboard' component={StudentDashboard} />
					<Route path='/viewResult' component={ViewResult} />
					<Route path='/testArena' component={TestArena} />
					<Route path='/admin' component={FacultyLogin} />
					<Route path='/facultydashboard' component={FacultyDashboard} />
					<Route path='/createquiz' component={CreateQuiz} />
					<Route path='/viewStatistics' Component={ViewStatistics}/>
					<Route component={notdefined} />
				</Switch>
			</main>
		);
	}

}


export default App;
