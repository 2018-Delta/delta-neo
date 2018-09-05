import React, { Component } from 'react'

import apiResult from './sample-response'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			asteroids: apiResult.near_earth_objects["2017-07-31"]
		}
	}

	render() {
		console.log(this.state.asteroids);
		let asteroidData = this.state.asteroids.map(asteroid => {
			return (
				<li>{asteroid}</li>
			)
		})
		return (
			<div>

			</div>
		);
	}
}

export default App;
