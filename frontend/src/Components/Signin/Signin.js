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
			cookie.remove('username',{ path: '/' })
			console.log(this.state.userFound);
		}
	}

	handleSignin = (history) => {
		fetch(`login?username=${this.state.username}&&password=${this.state.password}`, {
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
				className="btn-lg btn btn-dark indent "
				type='submit'
				value="Sign In"
				onClick={() => { this.handleSignin(history) }}
			>
				Sign In
			</button>
		))

		return (
			<div id="signinComponent">
				<form>
					<div className="form-group row">
						<label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
						<div className="col-sm-6">
							<input type="username" className="form-control" id="username" placeholder="Enter your Username" onChange={this.onUsernameChanged} />
						</div>

					</div>
					<div className="form-group row">
						<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
						<div className="col-sm-6">
							<input type="password" className="form-control" id="password" placeholder="Enter your Password" onChange={this.onPasswordChanged} />
						</div>
					</div>
				</form>
				{
					this.state.userFound === false ?
						<p className="indentErrorMsg">User doesn't exist or Wrong Password</p>
						: null
				}
				<div className="form-group row">
					<div className="col-sm-6 offset-sm-2">
						<Button />
					</div>
				</div>
			</div>
		);
	}
}

export default Signin;