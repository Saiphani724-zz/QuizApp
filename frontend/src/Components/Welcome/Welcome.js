import React, { Component } from 'react';
import './Welcome.css';

import HomePage from '../../Components/HomePage/HomePage';
import Signin from '../../Components/Signin/Signin';
import Register from '../../Components/Register/Register';

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
			<div>
				<div className="App">
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
												<Signin />
												<h5 class="indent" onClick={this.onRegisterhandler}>Don't have Account ?  <br></br>
														<a href="/#">Sign Up</a>
												</h5>
											</div>
									}
								</div>
							</div>
					}
				</div>
			</div>
		);
	}
}


export default App;
