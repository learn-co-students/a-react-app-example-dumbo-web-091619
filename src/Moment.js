import React, { Component } from 'react';
import moment from 'moment';

class Moment_timer extends Component {
	render() {
		return(
			<div className="moment_timer">
				{ moment().format('MMMM Do YYYY, hh:mm:ss a') }
			</div>
		)
	}
}

export default Moment_timer;