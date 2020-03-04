import React, { Component } from 'react';
import './Question.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {RadioGroup, Radio } from 'react-radio-group';

class Question extends Component {

	state = {
				
	}

	handleAnsChange = (value)=>{
		this.props.onSelectAns(this.props.question.questionCode, value);
	}
	
	render() {
		return (
			<div id={this.props.question.questionCode} className="question">
				<Card style={{ width: '80%' }}>
					<Card.Header>
						{this.props.question.question}
					</Card.Header>
					<ListGroup variant="flush">
					<RadioGroup name={this.props.question.questionCode} selectedValue={this.state.selectedOption} onChange={this.handleAnsChange}>
						{
							this.props.question['options'].map(option => (
							<ListGroup.Item><Radio value={option[0]} />  {option[1]}</ListGroup.Item>
							))
						}
					</RadioGroup>
					</ListGroup>
				</Card>
			</div>
		)
	}

}

export default Question;