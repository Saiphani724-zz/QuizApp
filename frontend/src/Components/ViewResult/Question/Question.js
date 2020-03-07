import React, { Component } from 'react';
import './Question.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { RadioGroup, Radio } from 'react-radio-group';

class Question extends Component {

	state = {
		viewResult: false,
		toggleButtonText : "Show Result",
		toggleButtonClass : "success"
	}

	handleAnsChange = () => {

	}

	onResultToggle = ()=>{
		if(!this.state.viewResult){
			this.setState({
				viewResult: true,
				toggleButtonText : "Hide Result",
				toggleButtonClass : "danger"
			})
		}
		else{
			this.setState({
				viewResult: false,
				toggleButtonText : "Show result",
				toggleButtonClass : "success"
			})
		}
	}

	render() {
		console.log(this.props);
		return (
			<div id={this.props.question.questionCode} className="question">
				
				<Card style={{ width: '80%' }}>
					<Card.Header>
						{this.props.question.question}
					</Card.Header>
					{
						this.state.viewResult ?
						 <div>
							 <ListGroup variant="flush">
						<RadioGroup name={this.props.question.questionCode} selectedValue={this.state.selectedOption} onChange={this.handleAnsChange}>
							{
								this.props.question['options'].map(option => (
									<ListGroup.Item><Radio value={option[0]} checked={option[0] === this.props.answer} />
										{option[0] === this.props.question['correctAns'] ?
											<span className={"green"}> {option[1]} </span> :
											<span>
												{
													option[0] !== this.props.question['correctAns'] && option[0] === this.props.answer ?
														<span className="red"> {option[1]} </span> : <span> {option[1]} </span>
												}
											</span>

										}
									</ListGroup.Item>
								))
							}
						</RadioGroup>
					</ListGroup>
						{ this.props.question['correctAns'] === this.props.answer?
							<h6 className="comment">
								Result: <span className="green">You got it right !!</span>
								{/* Zayga correct dengav! */}
							</h6>	 : <div>
							<h6 className="comment">Result: <span className="red">You missed it !!</span></h6>
							{/* Chaddavara lanja! */}
						<p className="correctTag">Correct answer is "{this.props.question['correctAns']}"</p>
							</div>
							
						}
						</div> :
						<div>
							<ListGroup variant="flush">
						<RadioGroup name={this.props.question.questionCode} selectedValue={this.state.selectedOption} onChange={this.handleAnsChange}>
							{
								this.props.question['options'].map(option => (
									<ListGroup.Item><Radio value={option[0]} checked={option[0] === this.props.answer} />
											<span> {option[1]} </span> 
									</ListGroup.Item>
								))
							}
						</RadioGroup>
					</ListGroup>
						</div>
					}
					
					</Card>
					<button id="toggleResult" onClick={this.onResultToggle}
					className={"btn btn-" + this.state.toggleButtonClass}>{this.state.toggleButtonText}</button>

			</div>
		)
	}

}

export default Question;