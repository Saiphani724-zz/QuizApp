import React, { Component } from 'react';
import cookie from 'react-cookies';
import './Dashboard.css';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import SideNavBar from './SideNav/SideNav';
import AvaiableQuizes from './AvailableQuizes/AvailableQuizes';
import PreviousQuizes from './PreviousQuizes/PreviousQuizes';

class Dashboard extends Component {

	state = {
		username: null
	}

	componentWillMount() {
		this.setState({ username: cookie.load('username') })
	}

	render() {

		return (

			<div>
				{
					this.state.username != null ?
						<div>
							<div id="dashboardPage">
								<h1 className="text-center">
									<i className="fad fa-h1" id="welcomeMsg">
										Welcome, {this.state.username}
									</i>
								</h1>
								
								<AvaiableQuizes />
								<br></br>
								<PreviousQuizes />
								<SideNavBar />
							</div>

						</div>
						:
						<h1 className="jumbotron text-center">
							Login Cheyy ra <i className="far fa-heart"></i>da
						</h1>
				}

			</div>
		)
	};

}

export default Dashboard;