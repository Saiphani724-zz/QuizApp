import React,{Component} from 'react';
import './PreviousQuizes.css';
import { Card } from 'react-bootstrap';
import Quiz from '../Quiz/Quiz';
import cookie from 'react-cookies';

class PreviousQuizes extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {};
		var username = cookie.load('username');
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/getQuizes?prvQuiz=${true}&username=${username}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => this.setState({ quizes: data }))
	}



	render() {
		return (
			<div id="previousQuizesPage">
				<Card>
					<Card.Header>Previous Quizes</Card.Header>
				</Card>
				{
					this.state.quizes == null ?
						<h1>Component loading wait</h1> :
						this.state.quizes.map(quiz => {
							return <Quiz title={quiz.course} id={quiz.quizCode} bg="warning" prvQuiz={true} flag={quiz.flag} topics={quiz.topic} date={quiz.date} score={quiz.marks}/>
						})
				}
			</div>
		);
	}
}

export default PreviousQuizes;