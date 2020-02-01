import React,{Component} from 'react';
import './PreviousQuizes.css';
import { Card, Button } from 'react-bootstrap';

class PreviousQuizes extends Component {
	render() {
		return (
			<div id="avaiableQuizesPage">
				<Card>
					<Card.Header>Previous Quizes</Card.Header>
				</Card>
				<Card bg="dark" text="white">
					<Card.Body>
						<Card.Title>Software Engineering<Button id="takeTestButton" class="text-center" variant="primary">View Result</Button></Card.Title>
						<Card.Text>
							<b>Quiz-Topics	</b><span>:			Testing</span>
							<br></br>
							<b>Date	</b><span>:			21-Jan-20</span>
							<br></br>
							<b>Score	</b><span>:			9/10</span>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card bg="warning">
					<Card.Body>
						<Card.Title>Compiler Design<Button id="takeTestButton" variant="primary">View Result</Button></Card.Title>
						<Card.Text>
							<b>Quiz-Topics	</b><span>:			RDP</span>
							<br></br>
							<b>Date	</b><span>:			19-Jan-20</span>
							<br></br>
							<b>Score	</b><span>:			8/10</span>
						</Card.Text>
					</Card.Body>
				</Card>

			</div>
		);
	}
}

export default PreviousQuizes;