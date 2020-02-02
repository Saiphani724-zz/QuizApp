import React, { Component } from 'react';
import './Question.css';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Question extends Component {
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<div className="question">
				<Card style={{ width: '80%' }}>
					<Card.Header>
						{this.props.question.question}
					</Card.Header>
					<ListGroup variant="flush">
						<Form>
							{
								this.props.question['options'].map(option => (
										<div key={"radio"}>
											<Form.Check type={"radio"} id={`check-api-${"radio"}`}>
												<ListGroup.Item>
													<Form.Check.Input type={"radio"} isValid />
													<Form.Check.Label>{option}</Form.Check.Label>
													{/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>  */}
												</ListGroup.Item>
											</Form.Check>
										</div>))
							}
						</Form>
					</ListGroup>
				</Card>
			</div>
		)
	}

}

export default Question;