import React, { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {



	render() {

		const HomePage = withRouter(({ history }) => (

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
				<HomePage />
			</div>
		)
	};

}

export default Dashboard;