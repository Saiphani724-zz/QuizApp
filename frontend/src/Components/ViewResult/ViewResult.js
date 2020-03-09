import React, { Component } from 'react';
import './ViewResult.css';
import SideNavBar from '../StudentDashboard/SideNav/SideNav'
import cookie from 'react-cookies';
import Question from './Question/Question';

class ViewResult extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		var quizCode = cookie.load('quizCode', { path: '/' })
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/getTestQuestions?quizCode=${quizCode}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(quiz => this.setState({ questions: quiz.questions, course: quiz.course, topic: quiz.topic }, function () {
				// console.log(this.state.questions);
			}))

		var username = cookie.load('username', { path: '/' })
		ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/getUser?username=${username}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(user => this.setState({ }, function () {
				console.log(user.QuizInfo);
				
				for(var i = 0;i < user.QuizInfo.length; i++){
					console.log(user.QuizInfo[i].quizCode);
					if(user.QuizInfo[i].quizCode === quizCode)
						this.setState({quizData : user.QuizInfo[i]});
				}
			}))		
	}


	render() {
		return (
			<div>
				<SideNavBar />
				<h1 className="courseHeader text-center">{this.state.course}</h1>
				<h3 className="topicHeader text-center">{this.state.topic}</h3>
				<div className="page">
					{/* <button onClick={() => {
						console.log(this.state);
					}}>test</button> */}

					{
						this.state.questions && this.state.quizData?
							this.state.questions.map(ques => {
								return <Question question={ques} answer={
									this.state.quizData.answers[ques.questionCode]
								} />
							})
							: null
					}

				</div>

			</div>
		);
	}
}

export default ViewResult;