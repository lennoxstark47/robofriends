import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		fetch(
			'https://jsonplaceholder.typicode.com/users'
		)
			.then((response) => response.json())
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	render() {
		console.log(this.state);
		return (
			<div className='tc'>
				<Searchbox />
				<Cardlist robots={this.state.robots} />
			</div>
		);
	}
}

export default App;
