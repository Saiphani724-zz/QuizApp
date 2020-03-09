import React, { Component } from 'react';
import './AvailableQuizes.css';
import { Card } from 'react-bootstrap';
import Quiz from '../Quiz/Quiz';
import cookie from 'react-cookies';

class AvailableQuizes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		var username = cookie.load('username');
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/getQuizes?prvQuiz=${false}&username=${username}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => this.setState({ quizes: data }))
	}



	render() {
		return (
			<div id="avaiableQuizesPage">
				<Card>
					<Card.Header>Available Quizes</Card.Header>
				</Card>
				{
					this.state.quizes == null ?
						<h1>Component loading wait</h1> :
						this.state.quizes.map(quiz => {
							return <Quiz title={quiz.course} bg="dark" text="white" id={quiz.quizCode} prvQuiz={false} flag={quiz.flag} topics={quiz.topic} due={quiz.due} />
						})
				}
			</div>
		);
	}
}

export default AvailableQuizes;