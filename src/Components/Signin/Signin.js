import React, { Component } from 'react';
import './Signin.css';
// import Input from '../UI/Input/Input';
// import '../UI/Input/Input.css';

import { withRouter } from 'react-router-dom'

class Signin extends Component {
	state = {
		'username' : '',
		'password' : '',
		'wrongUsername' : false
	}

	handleUsername  = (e) => {
		this.setState({
			'username' : e.target.value,
		})
		// console.log(this.state);
	}

	handlePassword = (e)=>{
		this.setState({
			'password' : e.target.value,
		})
		// console.log(this.state);
	}

	checkRegex = ()=>{
		if(this.state.username === "Phani"){
			return true
		}
		else{
			this.setState({'wrongUsername' : 1})
			return false
		}
	}

	render() {

		const Button = withRouter(({ history }) => (
			<button
				className="btn-lg btn btn-dark indent"
				type='submit'
				value="Sign In"
				onClick={
					() => {
						if(this.checkRegex())
							history.push('/dashboard')
					}
				}
			>
				Sign In
			</button>
		))

		return (
			<div>
				{/* <form>

					<Input inputtype="input" type="text" name="username" placeholder="Enter your Username" label="Username :  " />
					<Input inputtype="input" type="text" name="password" placeholder="Enter your Password" label="Password :  " />
				</form> */}

				<form>
					<div class="form-group row">
						<label for="username" class="col-sm-2 col-form-label">Username</label>
						<div class="col-sm-6">
							<input type="username" class="form-control" id="username" placeholder="Enter your Username" onChange={this.handleUsername} />
						</div>
					</div>
					<div class="form-group row">
						<label for="password" class="col-sm-2 col-form-label">Password</label>
						<div class="col-sm-6">
							<input type="password" class="form-control" id="password" placeholder="Enter your Password" onChange={this.handlePassword}/>
							{
								this.state.wrongUsername  ? 
									<p>WRONG USERNAME FORMAT</p> 
									: null
							} 
						</div>
					</div>
				</form>

				<div class="form-group row">
					<div class="col-sm-6 offset-sm-2">
						<Button />
					</div>
				</div>
			</div>
		);
	}
}

export default Signin;