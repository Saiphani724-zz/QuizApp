import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import './Timer.css';

const time = 1000;
const duration = 10;
const beginTimestamp = new Date().getTime();
var nodeValue = 0;

class Timer extends Component {
	state = {
		nodeValue: 0,
		submitted: 0
	}
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	updateTime = () => {
		var now = new Date().getTime();
		var left = duration * 60 - ((now - beginTimestamp) / time);
		nodeValue = Math.max(0, Math.floor(left / 60)) + ":" + Math.max(0, Math.floor(left % 60));
		var width = (left * 100 / (duration * 60));
		this.setState({ nodeValue: nodeValue, width: width })

		if (left < 0 && !this.state.submitted) {
			this.setState({ submitted: 1 });
			this.props.submitQuiz();
		}
	}


	render() {
		setTimeout(setInterval(this.updateTime, 1000), 5000);

		const circleContainerStyle = {
			width: '150px',
			height: '150px',
		};
		return (
			<div>
				<h4 className="timerHeader">Time Left : {this.state.nodeValue}mins</h4>
				<div style={circleContainerStyle}>
					<Circle
						percent={this.state.width}
						strokeWidth="6"
						strokeLinecap="round"
						strokeColor={{
							'0%': '#FF8ee9',
							'100%': '#00FF00',
						}}
					/>
				</div>
			</div>
		);
	}
}


export default Timer;

