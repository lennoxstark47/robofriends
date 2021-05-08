import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox';
import {
	setSearchFiled,
	requestRobots,
} from './actions';

import './App.css';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) =>
			dispatch(
				setSearchFiled(event.target.value)
			),
		onRequestRobots: () =>
			requestRobots(dispatch),
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const {
			searchfield,
			onSearchChange,
			robots,
			isPending,
		} = this.props;
		const filteredrobots = robots.filter(
			(robot) => {
				return robot.name
					.toLowerCase()
					.includes(searchfield.toLowerCase());
			}
		);
		return isPending ? (
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
