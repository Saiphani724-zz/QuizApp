import React, { Component } from 'react';
import './TestArena.css';
import cookie from 'react-cookies';

import Question from '../Question/Question';
import Timer from '../Timer/Timer';

class TestArena extends Component {
	constructor(props) {
		super(props);

		this.state = {}

		var quizCode = cookie.load('quizCode', { path: '/' })

		fetch(`getQuiz?quizCode=${quizCode}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(quiz => this.setState({ questions: quiz.questions, course: quiz.course, topic: quiz.topic }, function () {
				console.log(this.state.questions);
			}))

	}
	render() {
		console.log(this.state);
		return (
			<div id="pageMargin">
				<div id="Timer">
				<div id="header" >
					<Timer />
				</div>
					<div id="title">
						<h2>{this.state.course}</h2>
						<h3>{this.state.topic}</h3>
						<div id="EndTestButton">
							<button onclick={()=>{window.location.href = window.location.origin + '/dashboard';}}
							class="btn btn-lg btn-danger">End Test</button>
						</div>
					</div>
				</div>

				{
					this.state.questions ?
						this.state.questions.map(ques => {
							return <Question question={ques} />
						})
						: null
				}
			</div>
		);
	}
}

export default TestArena;