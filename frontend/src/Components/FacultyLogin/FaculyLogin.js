import React, { Component } from 'react';
import './FacultyLogin.css';

import cookie from 'react-cookies';
import Signin from './Signin/Signin';

// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class App extends Component {

	state = {
		isLoggedin: false,
	}

	render = () => {

		var username = cookie.load('facultyName', { path: '/' })
		if (username !== undefined) {
			window.location.href = window.location.origin + '/facultydashboard'
		}

		return (
			<div class="background">
				{
					this.state.isLoggedin ?
						null :
						<div>
							<div id="quizApptitle" className="jumbotron bcc">
								<h1 className="h0">
									Faculty Login
								</h1>
							</div>
							<Signin />
						</div>
				}
			</div>
		);
	}
}


export default App;
