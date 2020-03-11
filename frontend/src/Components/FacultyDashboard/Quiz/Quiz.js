import React, { Component } from 'react';
import './Quiz.css';
import { Card, Button } from 'react-bootstrap';
import cookie from 'react-cookies';

class Quiz extends Component {
	
	handleButtonClick = () =>{
		// console.log(isPrvQuiz);
		
	}
	
	componentWillMount() {
		var scores = this.props.scores;
		var tot = 0;
		for(var i = 0;i < scores.length;i++){
			tot += scores[i].score;
		}
		this.setState({
			noOfStudents : this.props.scores.length, 
			avg : tot / scores.length
		})
		console.log(this.props.scores.length);
		
	}	

	render() {
		this.state = {}
		var color,text;
		if(this.props.flag % 2)
			{color = "danger";text="white"}
		else
			color = "warning";
		var tot = 0;
		var scores = this.props.scores;
		for(var i = 0;i < scores.length;i++){
			tot += scores[i].score;
		}
		var avg = tot / scores.length;
		return (
			<Card bg={color} text={text}>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Button id={this.props.id} onClick={this.handleButtonClick} className="viewStatistics indent50pRight" variant="primary">
						View Statistics</Button>
					<div id="quizDetails">
					{
						this.state.noOfStudents ?
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
								<b>No of Students Attempted	</b><span>:			{this.props.scores.length}</span>
								<br></br>
								<b>Average	</b><span>:			{avg}</span>
							</Card.Text>	
					}
					</div>
				</Card.Body>
			</Card>
		)
	}
}

export default Quiz;