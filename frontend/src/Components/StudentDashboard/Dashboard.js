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
								<h1 className="text-center" id="welcomeMsg">
										Welcome, {this.state.username}
								</h1>
								
								<AvaiableQuizes />
								<br></br>
								<PreviousQuizes />
								<SideNavBar />
							</div>

						</div>
						:
						<h1 id="luvda" className="jumbotron text-center">
							<button onClick={()=>{window.location.href = window.location.origin + '/'}} class="btn btn-lg btn-primary">Please Login <i className="far fa-heart"></i></button>
						</h1>
				}

			</div>
		)
	};

}

export default Dashboard;