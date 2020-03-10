import React, { Component } from 'react';
import './CreateQuiz.css';
import cookie from 'react-cookies';
import SideNavBar from '../FacultyDashboard/SideNav/SideNav';
import { Card, ListGroup } from 'react-bootstrap';

class CreateQuiz extends Component {
	state = {
		username: null,
		courseTitle: "",
		courseCode: "",
		quizTopic: "",
		random_int: 0,
		due: '',
		noOfquestions: 2,
		questions: [
			{
				question: "",
				options: [["A", ""], ["B", ""]],
				correctAns: "",
				noOfoptions: 2
			},
		],

	}
	componentWillMount() {
		this.setState({ username: cookie.load('facultyName') });
		// var d = new Date();

		//console.log(d.getTime());

		// fetch(`http://${ipaddress}:5000/login?username=${this.state.username}&&password=${this.state.password}`, {
		// 	method: 'GET',
		// }).then(res => res.json())
		// 	.then(data => {
		// 		// this.setState(
		// 		// 	() => (data),
		// 		// 	function () {
		// 		// 		//this.verifyUserLogin(history);
		// 		// 		console
		// 		// 	}
		// 		// )
		// 		console.log(data);
		// 	})
	}

	handleCourseTitleChange = (e) => {
		this.setState({ courseTitle: e.target.value })
	}
	handleCourseCodeChange = (e) => {
		this.setState({ courseCode: e.target.value })
	}
	handleQuizTopicChange = (e) => {
		this.setState({ quizTopic: e.target.value })
	}

	handleDurationChange = (e) => {
		this.setState({ duration : e.target.value })
	}

	handleQuestionUpdate = (i, e) => {
		var questions = this.state.questions;
		questions[i].question = e.target.value;
	}

	handleAnswerUpdate = (i, e) => {
		var questions = this.state.questions;
		questions[i].correctAns = e.target.value;
	}

	handleOptionsChange = (i, j, e) => {
		var questions = this.state.questions;
		questions[i].options[j.charCodeAt(0) - "A".charCodeAt(0)][1] = e.target.value;
	}

	handleAddOption = (i) => {
		var questions = this.state.questions;
		questions[i].options.push([String.fromCharCode(questions[i].noOfoptions + 65), ""]);
		questions[i].noOfoptions += 1;
		this.setState({
			questions: this.state.questions
		})
	}

	dateTimeChange = (e) => {
		this.setState({ due: e.target.value })
	}


	submitQuiz = () => {
		//quizcode,course,topic,due,date,questions
		var d = new Date();
		var username = this.state.username.toLowerCase();
		var questions = this.state.questions;
		var quizcode =  this.state.courseCode + "_" + d.getTime();
		for(var i= 0; i < questions.length;i++){
			questions[i].questionCode = quizcode + "_Q" + i;
		}
		
		var tobesent = {
			'facultyName' : username,
			'quizCode' : quizcode,
			'course': this.state.courseTitle,
			'topic': this.state.quizTopic,
			'due': this.state.due,
			'date': this.state.due,
			'duration' : this.state.duration,
			'questions': this.state.questions
		};
		console.log(tobesent);
		

		var ipaddress = cookie.load('ipaddress');

		fetch(`http://${ipaddress}:5000/submitNewQuiz`, {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(tobesent)
		}).then(function (response) {
			console.log(response);
			window.location.href = window.location.origin + '/facultydashboard'
		})

	}

	render() {
		var i = 0;
		return (
			<div id="createQuizPage">
				{
					this.state.username != null ?
						<div>
							<SideNavBar></SideNavBar>
							<div className="quizHeader">
								<div class="container">
									<div class="row">

										<div class="col-sm-6" >
											<ListGroup.Item><input className="form-control" placeholder="Enter Course Title" onChange={this.handleCourseTitleChange}></input></ListGroup.Item>
										</div>

										<div class="col-sm-6" >
											<ListGroup.Item><input className="form-control" placeholder="Enter Course Code ex:CSExxx " onChange={this.handleCourseCodeChange}></input></ListGroup.Item>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-1" >
										</div>

										<div class="col-sm-3" >
											<ListGroup.Item><input className="form-control " placeholder="Enter Quiz duration (mins)" onChange={this.handleDurationChange}></input></ListGroup.Item>

										</div>


										<div className="col-sm-3">
											<ListGroup.Item><input className="form-control " placeholder="Enter Due Date-time" onChange={this.dateTimeChange}></input></ListGroup.Item>
										</div>


										<div class="col-sm-3" >
											<ListGroup.Item><input className="form-control" placeholder="Enter Quiz Topic" onChange={this.handleQuizTopicChange}></input></ListGroup.Item>
										</div>
									</div>

								</div>

							</div>
							<button onClick={() => { console.log(this.state); console.log(); }}>Print State</button>
							{
								this.state.questions.map(ques => (
									<div id="newQuestion">
										<Card id={i} className="bg-dark">
											<Card.Header>
												<input className="form-control" placeholder="Enter Question Name" onChange={this.handleQuestionUpdate.bind(this, i)}></input>
											</Card.Header>
											<ListGroup >
												{
													ques.options.map(option => (
														<ListGroup.Item><input className="form-control" placeholder={"Enter option " + option[0]}
															onChange={this.handleOptionsChange.bind(this, i, option[0])}
														></input></ListGroup.Item>
													))
												}
											</ListGroup>

											<div class="container">
												<div class="row">
													<div class="col-sm-2" >
														<button className="btn btn-success btn-md" id="addOption"
															onClick={this.handleAddOption.bind(this, i)}
														>Add Option</button>
													</div>
													<div class="col-sm-6" >
														<input className="form-control correctOption" placeholder="Enter Correct Option eg: A,B,C.." onChange={this.handleAnswerUpdate.bind(this, i++)}></input>
													</div>
												</div>
											</div>
										</Card>

									</div>
								))
							}

							<button className="btn btn-success btn-lg" id="addQuestion"
								onClick={() => {
									var questions = this.state.questions;
									questions.push({
										question: "",
										options: [["A", ""], ["B", ""]],
										correctAns: "",
										noOfoptions: 2
									});
									this.setState({
										noOfquestions: this.state.noOfquestions + 1,
										questions: this.state.questions
									})
								}}
							>Add Question</button>



							<div className="text-center">
								<button id="submitButton" className="btn btn-dark btn-lg " onClick={this.submitQuiz}>Submit Quiz</button>
							</div>

						</div>
						:
						null
				}
			</div>
		);
	}
}

export default CreateQuiz;