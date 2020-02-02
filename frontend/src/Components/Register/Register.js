import React, { Component } from 'react';
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
		if (this.state.username === "Phani" || 1) {
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
		fetch(`register?username=${this.state.username}&&password=${this.state.password}&&email=${this.state.email}&&rollNo=${this.state.rollNo}&&mobile=${this.state.mobile}`, {
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
				className="btn-md btn btn-primary"
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
			<div className="fullPage">
				<link
				// rel="stylesheet"
				// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				// integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				// crossorigin="anonymous"
				/>
				<form>
					<div className="form-group row">
						<label for="username" className="col-sm-2 col-form-label">Username</label>
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
						<label for="email" className="col-sm-2 col-form-label">Email</label>
						<div className="col-sm-6">
							<input type="email" className="form-control" id="email" placeholder="Enter your Email" onChange={this.handleEmailChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="rollNo" className="col-sm-2 col-form-label">RollNo</label>
						<div className="col-sm-6">
							<input type="rollNo" className="form-control" id="rollNo" placeholder="Enter your RollNo" onChange={this.handleRollNoChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="phoneNo" className="col-sm-2 col-form-label">Phone</label>
						<div className="col-sm-6">
							<input type="phoneNo" className="form-control" id="phoneNo" placeholder="Enter your Mobile Number" onChange={this.handleMobileChange} />
						</div>
					</div>
					<div className="form-group row">
						<label for="password" className="col-sm-2 col-form-label">Password</label>
						<div className="col-sm-6">
							<input type="password" className="form-control" id="password" placeholder="Enter your Password" onChange={this.handlePasswordChange} />
						</div>
					</div>

				</form>
				<div className="text-center centrify">
					<Button />
				</div>
				<div className="text-center centrify">
					<p>Already have an account ?</p>
					<button id="loginButton" className="btn-md btn btn-primary" onClick={this.goToHomePage} >
						{/* className="btn-lg btn btn-primary indentButton" */}
						Log In
					</button>
				</div>
			</div>

		);
	}
}

export default Register;