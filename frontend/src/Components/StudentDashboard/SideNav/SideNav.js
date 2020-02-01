
import React,{Component} from 'react';
import './SideNav.css';
import cookie from 'react-cookies';
import SideNav, {
	// Toggle, Nav,
	NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { withRouter } from 'react-router-dom'


class SideNavComponent extends Component {
	state = {
		username: null
	}

	componentWillMount() {
		this.setState({ username: cookie.load('username') })
	}

	render()
	{
		const SideNavBar = withRouter(({ history }) => (

			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
					}}
				>
					<SideNav.Toggle />
					<SideNav.Nav>

						<NavItem eventKey="home" onClick={() => { history.push('/dashboard') }}>
							<NavIcon >
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText >
								Home
            				</NavText>
						</NavItem>

						<NavItem eventKey="devices">
							<NavIcon>
								<i className="fa fa-fw fa-cogs" aria-hidden="true"></i>
							</NavIcon>
							<NavText>
								Settings
            				</NavText>
							<NavItem eventKey="charts/linechart">
								<NavText>
									Profile Settings
                				</NavText>
							</NavItem>
							<NavItem eventKey="charts/barchart">
								<NavText>
									Change Password
                				</NavText>
							</NavItem>
						</NavItem>

						<NavItem>
							<NavIcon>
								<i className="fa fa-comments" aria-hidden="true"></i>
							</NavIcon>
							<NavText>
								Comments
							</NavText>
						</NavItem>

						<NavItem onClick={() => { cookie.remove('username', { path: '/' }); history.push('/') }}>
							<NavIcon >
								<i class="fa fa-window-close" aria-hidden="true"></i>
							</NavIcon>
							<NavText>
								Logout
							</NavText>
						</NavItem>

					</SideNav.Nav>
				</SideNav>
			</div>
		));


			return (
				<div>
					<SideNavBar />
				</div>	
			);
	}
}

export default SideNavComponent;