import React, { Component } from 'react';
import './Quiz.css';
import { Card, Button } from 'react-bootstrap';
import cookie from 'react-cookies';

class Quiz extends Component {
	
	handleButtonClick = () =>{
		// console.log(isPrvQuiz);
		
		if(this.props.prvQuiz === true){
			cookie.save('quizCode', this.props.id, { path: '/' })
			window.location.href = window.location.origin + '/viewResult'
		}
		else{
			cookie.save('quizCode', this.props.id, { path: '/' })
			window.location.href = window.location.origin + '/testArena'
		}
	}

	render() {
		var color,text;
		if(this.props.flag === 1){
			color = "warning"
		}
		else{
			color = "dark"
			text="white"
		}
		
		return (
			<Card bg={color} text={text}>
				<Card.Body>
					<Card.Title>{this.props.title}<Button id={this.props.id} onClick={this.handleButtonClick} className="indent50pRight" variant="primary">
					{
					this.props.prvQuiz ===false ?
						"Take Test":"View Result"
					}
						</Button></Card.Title>
					{
						this.props.prvQuiz ?
							<Card.Text>
								<b>Quiz-Topics	</b><span>:			{this.props.topics}</span>
								<br></br>
								<b>Date	</b><span>:			{this.props.date}</span>
								<br></br>
								<b>Score	</b><span>:			{this.props.score}</span>
							</Card.Text> :
							<Card.Text>
								<b>Quiz-Topics	</b><span>:			{this.props.topics}</span>
								<br></br>
								<b>Due-DateTime	</b><span>:			{this.props.due}</span>
							</Card.Text>
					}

				</Card.Body>
			</Card>
		)
	}
}

export default Quiz;