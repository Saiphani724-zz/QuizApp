import React, { Component } from 'react';
import './Signin.css';
import cookie from 'react-cookies'
// import Input from '../UI/Input/Input';
// import '../UI/Input/Input.css';
// import axios from 'axios';
import {
	withRouter,
	// BrowserRouter
} from 'react-router-dom'
import { Card } from 'react-bootstrap'

class Signin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}
	}
	componentDidMount() {
	}

	onUsernameChanged = (e) => {
		this.setState({ username: e.target.value })
	}
	onPasswordChanged = (e) => {
		this.setState({ password: e.target.value })
	}

	verifyUserLogin = (history) => {
		if (this.state.userFound) {
			cookie.save('username', this.state.username, { path: '/' })
			history.push('/dashboard')
		}
		else {
			cookie.remove('username', { path: '/' })
			console.log(this.state.userFound);
		}
	}

	handleSignin = (history) => {
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/login?username=${this.state.username}&&password=${this.state.password}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => {
				this.setState(
					() => (data),
					function () {
						this.verifyUserLogin(history);
					}
				)
			})
	}

	render() {
		const Button = withRouter(({ history }) => (
			<button
				id="signinButton"
				className="btn-lg btn btn-success indent "
				type='submit'
				value="Sign In"
				onClick={() => { this.handleSignin(history) }}
			>
				Sign In 
			</button>
		))

		return (
			<div id="siginOuter">
				<Card id="signinCard">
					
					<form id="inputboxes">
						<div  className="form-group row ">
							<label htmlFor="username" className="col-form-label">Username</label>
							<input type="username" className="form-control" id="username" placeholder="Enter your Username" onChange={this.onUsernameChanged} />
						</div>
						<div className="form-group row ">
							<label htmlFor="password" className="col-form-label">Password</label>
							<input type="password" className="form-control" id="password" placeholder="Enter your Password" onChange={this.onPasswordChanged} />
						</div>
					</form>
					{
						this.state.userFound === false ?
							<p id="NoUserErrorMsg">User doesn't exist or Wrong Password</p>
							: null
					}
					
					<div id="signInButtton">
						<Button />
					</div>
					
				</Card>
			</div>
		);
	}
}

export default Signin;