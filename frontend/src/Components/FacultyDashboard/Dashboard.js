import React, { Component } from 'react';
import cookie from 'react-cookies';
import './Dashboard.css';

// import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import SideNavBar from './SideNav/SideNav';

class Dashboard extends Component {
	state = {
		username: null
	}
	componentWillMount() {
		this.setState({ username: cookie.load('facultyName') })
	}

	render() {
		return (
			<div>
				{
					this.state.username != null ?
						<div>
							<SideNavBar></SideNavBar>
							<div id="dashboardPage">
								<h1 className="text-center">
									<i className="fad fa-h1" id="welcomeMsg">
										Welcome, {this.state.username}
									</i>
								</h1>
								<button className="btn btn-primary" onClick={()=>{
									window.location.href = window.location.origin + '/createquiz'
								}}>Create Quiz</button>
							</div>
						</div>
						:
						<h1 id="luvda" className="jumbotron text-center">
							<button onClick={()=>{window.location.href = window.location.origin + '/admin'}} class="btn btn-lg btn-primary">Please Login <i className="far fa-heart"></i></button>
						</h1>
				}

			</div>
		)
	};

}

export default Dashboard;