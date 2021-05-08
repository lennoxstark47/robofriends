import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox';
// import Scroll from './components/Scroll';
import { setSearchFiled } from './actions';
// import { searchRobots } from './reducer';
import './App.css';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		searchfield: state.searchfield,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) =>
			dispatch(
				setSearchFiled(event.target.value)
			),
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			// searchfield: '',
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

	// onSearchChange = (event) => {
	// 	this.setState({
	// 		searchfield: event.target.value,
	// 	});
	// };

	render() {
		console.log(this.state);
		const { robots } = this.state;
		const {
			searchfield,
			onSearchChange,
		} = this.props;
		const filteredrobots = robots.filter(
			(robot) => {
				return robot.name
					.toLowerCase()
					.includes(
						searchfield.toLocaleLowerCase()
					);
			}
		);
		return !robots.length ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='f1'>ROBOFRIENDS</h1>
				<Searchbox
					searchChange={onSearchChange}
				/>

				<Cardlist robots={filteredrobots} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
