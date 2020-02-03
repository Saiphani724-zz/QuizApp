import React, { Component } from 'react';
import './Welcome.css';

import cookie from 'react-cookies';
import HomePage from '../../Components/HomePage/HomePage';
import Signin from '../../Components/Signin/Signin';
import Register from '../../Components/Register/Register';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class App extends Component {

	state = {
		isLoggedin: false,
		ifSignupPage: false,
	}

	onRegisterhandler = () => {
		this.setState({
			ifSignupPage: true,
		})
	}



	render = () => {

		var username = cookie.load('username', {path: '/'})
		if(username != undefined){
			window.location.href = window.location.origin + '/dashboard'
		}

		return (
			<div >
				{
					this.state.isLoggedin ?
						null :
						<div>
							<HomePage />
							<div>
								{
									this.state.ifSignupPage ?
										<Register /> :
										<div >
											<Signin />
											<div id="signupDiv">
												<p>Don't have Account ?  <br></br>
												</p>
												<button onClick={this.onRegisterhandler}
												 className="btn-lg btn btn-primary">Sign Up for Quiz App</button>
											</div>
										</div>
								}
							</div>
						</div>
				}
			</div>
		);
	}
}


export default App;
