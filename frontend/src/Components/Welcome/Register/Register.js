import React, { Component } from 'react';
import cookie from 'react-cookies';
// import { withRouter } from 'react-router-dom'

import './Register.css';
class Register extends Component {

	componentWillMount() {
		this.setState({ isRegisterSuccess: false })
		console.log(this.state);
	}
	state = {
		'username': '',
		'wrongUsernameFormat': false
	}

	handleUsernameChange = (e) => {
		this.setState({ 'username': e.target.value })
	}
	handlePasswordChange = (e) => {
		this.setState({ 'password': e.target.value })
	}
	handleRollNoChange = (e) => {
		this.setState({ 'rollNo': e.target.value })
	}
	handleEmailChange = (e) => {
		this.setState({ 'email': e.target.value })
	}
	handleMobileChange = (e) => {
		this.setState({ 'mobile': e.target.value })
	}



	checkRegex = () => {
		if (this.state.username !== "") {
			return true
		}
		else {
			this.setState({ 'wrongUsernameFormat': 1 })
			return false
		}
	}

	goToHomePage = () => {
		window.location.href = window.location.origin + '/'
	}

	handleRegister = () => {
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/register?username=${this.state.username}&&password=${this.state.password}&&email=${this.state.email}&&rollNo=${this.state.rollNo}&&mobile=${this.state.mobile}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => this.setState(
				() => (data),
				function () {
					console.log(this.state);
					if (this.state.isRegisterSuccess) {
						window.location.href = window.location.origin + '/'
						alert('Successfully Registered\nLogin to use the App');
					}
					else {
						alert('User already exits\nTry a different Username');
					}
				}));
	}

	render() {

		const Button = () => (
			<button
				className="btn-md btn btn-success"
				id="registerButton"
				value="Register"
				onClick={
					(e) => {
						if (this.checkRegex()) {
							this.handleRegister()
						}
						else {
							console.log("Hello ", this.state);
						}
					}
				}
			>
				Register
			</button>
		)



		return (
			<div className="registerPage">
				<form>
					<div className="form-group row">
						<label for="username" className="col-sm-2 col-form-label">Username:</label>
						<div className="col-sm-6">
							<input type="username" className="form-control" id="username" placeholder="Enter your Username" onChange={this.handleUsernameChange}
							/>
						</div>
					</div>
					{
						this.state.wrongUsernameFormat ?
							<p className="indentErrorMsg">Wrong Username Format</p>
							: null
					}

					<div className="form-group row">
						<label for="email" className="col-sm-2 col-form-label">Email: </label>
						<div className="col-sm-6">
							<input type="email" className="form-control" id="email" placeholder="Enter your Email" onChange={this.handleEmailChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="rollNo" className="col-sm-2 col-form-label">Roll No:</label>
						<div className="col-sm-6">
							<input type="text" className="form-control" id="rollNo" placeholder="Enter your Roll No" onChange={this.handleRollNoChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="phoneNo" className="col-sm-2 col-form-label">Phone:</label>
						<div className="col-sm-6">
							<input type="number" className="form-control" id="phoneNo" placeholder="Enter your Mobile Number" onChange={this.handleMobileChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="password" className="col-sm-2 col-form-label">Password:</label>
						<div className="col-sm-6">
							<input type="password" className="form-control" id="password" placeholder="Enter your Password" onChange={this.handlePasswordChange} />
						</div>
					</div>

				</form>
				<div className="text-center centrify">
					<Button />
				</div>
				<div className="text-center registerButton">
					<p>Already have an account ?</p>
					<button id="loginBackButton" className="btn-md btn btn-dark" onClick={this.goToHomePage} >
						{/* className="btn-lg btn btn-primary indentButton" */}
						Log In
					</button>
				</div>
			</div>

		);
	}
}

export default Register;