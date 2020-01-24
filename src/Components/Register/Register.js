import React from 'react';

function Register() {
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
						<input type="username" class="form-control" id="username" placeholder="Enter your Username" />
					</div>
				</div>
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
					<div class="col-sm-6 offset-sm-2">
						<button type="submit" class="btn btn-primary">Register</button>
					</div>
				</div>
			</form>

		</div>

	);
}

export default Register;