import React, { Component } from 'react';
import cookie from 'react-cookies';
import './Dashboard.css';

// import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import SideNavBar from './SideNav/SideNav';
import Quiz from './Quiz/Quiz';

class Dashboard extends Component {
	state = {
		username: null
	}
	componentWillMount() {
		this.setState({ username: cookie.load('facultyName') })
		var facultyName = cookie.load('facultyName');
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/getFacultyQuizes?facultyName=${facultyName}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => this.setState(data, function () {
				var QuizInfo = this.state.QuizInfo;
				for (let i = 0; i < QuizInfo.length; i++) {
					var quizCode = QuizInfo[i].quizCode;
					console.log(quizCode);
					fetch(`http://${ipaddress}:5000/getQuizBasicDetails?quizCode=${quizCode}`, {
						method: 'GET',
					}).then(res => res.json())
						.then(data => this.setState({}, function () {
							QuizInfo[i].course = data.course
							QuizInfo[i].topic = data.topic
							this.setState({ QuizInfo: QuizInfo })
						}))


				}
			}))





	}

	render() {
		var i = 0;
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


								{/* <Quiz title={quiz.course} bg="dark" text="white" id={quiz.quizCode} prvQuiz={false} flag={quiz.flag} topics={quiz.topic} due={quiz.due} /> */}
								{
									this.state.QuizInfo ?
										this.state.QuizInfo.map(quiz => {
											return <Quiz title={quiz.course} bg="dark" text="white" id={quiz.quizCode} flag={i++} topics={quiz.topic} scores={quiz.scores} />
										}) : null
								}

								<div className="text-center">
									<button id="createQuizButton" className="btn btn-success btn-lg" onClick={() => {
										window.location.href = window.location.origin + '/createquiz'
									}}>Create Quiz</button>
								</div>
							</div>
						</div>
						:
						<h1 id="luvda" className="jumbotron text-center">
							<button onClick={() => { window.location.href = window.location.origin + '/admin' }} class="btn btn-lg btn-primary">Please Login <i className="far fa-heart"></i></button>
						</h1>
				}

			</div>
		)
	};

}

export default Dashboard;