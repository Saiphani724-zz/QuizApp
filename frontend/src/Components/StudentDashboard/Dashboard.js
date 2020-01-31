import React, { Component } from 'react';
import cookie from 'react-cookies';
import './Dashboard.css';
import SideNav, {
	// Toggle, Nav,
	NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {

	state = {
		username: null
	}

	componentWillMount() {
		this.setState({ username: cookie.load('username') })
	}

	render() {

		const SideNavBar = withRouter(({ history }) => (

			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
					}}
				>
					<SideNav.Toggle />
					<SideNav.Nav>

						<NavItem eventKey="home" onClick={() => { history.push('/') }}>
							<NavIcon >
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText >
								Home
            				</NavText>
						</NavItem>

						<NavItem eventKey="charts">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Settings
            				</NavText>
							<NavItem eventKey="charts/linechart">
								<NavText>
									Line Chart
                				</NavText>
							</NavItem>
							<NavItem eventKey="charts/barchart">
								<NavText>
									Bar Chart
                				</NavText>
							</NavItem>
						</NavItem>

						<NavItem>
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Comments
							</NavText>
						</NavItem>
					</SideNav.Nav>
				</SideNav>







				<button>

				</button>
			</div>
		));

		return (

			<div>
				{
					this.state.username != null ?
						<div>
							<div>
								<SideNavBar />
							</div>
							<div>
								<h1 className="centrify">
									Welcome, {this.state.username}
								</h1>
							</div>
						</div>
						:
						null
				}

			</div>
		)
	};

}

export default Dashboard;