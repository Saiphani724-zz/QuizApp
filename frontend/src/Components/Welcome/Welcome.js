import React, { Component } from 'react';
import './Welcome.css';

import HomePage from '../../Components/HomePage/HomePage';
import Signin from '../../Components/Signin/Signin';
import Register from '../../Components/Register/Register';
import {Card} from 'react-bootstrap';
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
		return (
			<div className="App pagemargin">
				{
					this.state.isLoggedin ?
						null :
						<div>
							<HomePage />
							<div className="App">
								{
									this.state.ifSignupPage ?
										<Register /> :
										<div>
											<Card id="signinCard" >
													<Signin />
											</Card>
											<h5 className="indent" onClick={this.onRegisterhandler}>Don't have Account ?  <br></br>
												<button id="signupButton" className="btn-md btn btn-primary indent10pDown">Sign Up</button>
											</h5>
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
