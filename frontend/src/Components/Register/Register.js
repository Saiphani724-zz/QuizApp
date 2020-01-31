import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './Register.css';
class Register extends Component {

	state = {
		'username': '',
		'wrongUsernameFormat': false
	}

	handleUsername = (e) => {
		this.setState({
			'username': e.target.value,
		})
		// console.log(this.state);
	}


	checkRegex = () => {

		if (this.state.username === "Phani") {
			return true
		}
		else {
			this.setState({ 'wrongUsernameFormat': 1 })
			return false
		}
	}

	render() {

		const Button = withRouter(({ history }) => (
			<button
				className="btn-lg btn btn-primary indentButton"
				type='submit'
				value="Sign In"
				onClick={
					(e) => {
						if (this.checkRegex()) {
							history.push('/RegsiterSuccess')
						}
						else {
							console.log("Hello ",this.state);
						}
					}
				}
			>
				Register
			</button>
		))

		return (
			<div class="fullPage">
				<link
				// rel="stylesheet"
				// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				// integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				// crossorigin="anonymous"
				/>
				<form>
					<div class="form-group row">
						<label for="username" class="col-sm-2 col-form-label">Username</label>
						<div class="col-sm-6">
							<input type="username" class="form-control" id="username" placeholder="Enter your Username"
								onChange={this.handleUsername}
							/>
						</div>
					</div>
					{
						this.state.wrongUsernameFormat ?
							<p class="indentErrorMsg">Wrong Username Format</p>
							: null
					}

					<div class="form-group row">
						<label for="email" class="col-sm-2 col-form-label">Email</label>
						<div class="col-sm-6">
							<input type="email" class="form-control" id="email" placeholder="Enter your Email" />
						</div>
					</div>
					<div class="form-group row">
						<label for="rollNo" class="col-sm-2 col-form-label">RollNo</label>
						<div class="col-sm-6">
							<input type="rollNo" class="form-control" id="rollNo" placeholder="Enter your RollNo" />
						</div>
					</div>
					<div class="form-group row">
						<label for="phoneNo" class="col-sm-2 col-form-label">Phone</label>
						<div class="col-sm-6">
							<input type="phoneNo" class="form-control" id="phoneNo" placeholder="Enter your Mobile Number" />
						</div>
					</div>
					<div class="form-group row">
						<label for="password" class="col-sm-2 col-form-label">Password</label>
						<div class="col-sm-6">
							<input type="password" class="form-control" id="password" placeholder="Enter your Password" />
						</div>
					</div>

					<div class="form-group row">

						<Button />

					</div>
				</form>
			</div>

		);
	}
}

export default Register;