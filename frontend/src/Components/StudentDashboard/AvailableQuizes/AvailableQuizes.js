import React, { Component } from 'react';
import './AvailableQuizes.css';
import { Card, Button } from 'react-bootstrap';


class AvailableQuizes extends Component {
	render() {
		return (
			<div id="avaiableQuizesPage">
				<Card>
					<Card.Header>Available Quizes</Card.Header>
				</Card>
				<Card bg="dark" text="white">
					<Card.Body>
						<Card.Title>Software Engineering<Button id="takeTestButton" class="text-center" variant="primary">Take Test</Button></Card.Title>
						<Card.Text>
							<b>Quiz-Topics	</b><span>:			Testing</span>
							<br></br>
							<b>Due-DateTime	</b><span>:			2-Feb-20 5:00 pm</span>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card bg="warning">
					<Card.Body>
						<Card.Title>Compiler Design<Button id="takeTestButton" variant="primary">Take Test</Button></Card.Title>
						<Card.Text>
							<b>Quiz-Topics	</b><span>:			RDP</span>
							<br></br>
							<b>Due-DateTime	</b><span>:			3-Feb-20 5:00 pm</span>
						</Card.Text>
					</Card.Body>
				</Card>

			</div>
		);
	}
}

export default AvailableQuizes;