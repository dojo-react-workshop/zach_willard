import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
	constructor(){
		super();

		this.state = {
			data: [
                {
                    id: 0,
                    name: 'React',
                    voteCount: 15
                },
                {
                    id: 2,
                    name: 'Angular',
                    voteCount: 9
                },
                {
                    id: 1,
                    name: 'Vue',
                    voteCount: 12
                },
                {
                    id: 3,
                    name: 'Ember',
                    voteCount: 4
                }
			]
		}
	}


	
	voteCompare = (a, b) => {
		if (a.voteCount < b.voteCount){
			return 1;
		}
		if (a.voteCount > b.voteCount){
			return -1;
		}
		return 0;
	}

	addVote = (id) => {
		let newVoteData = Array.from(this.state.data);
		newVoteData[id].voteCount++;
		this.setState({ data: newVoteData });
	}
            
	render() {
		return (
			<div className="App">
				<h1 style={ {textAlign:'center'} }>Vote Your JS Library!</h1>
				<ul style={ {listStyle:'none', width: '400px', margin: 'auto auto', padding: '0px'} }>
					{
						this.state.data
							.sort(this.voteCompare)
							.map((votingObj, idx) => {
								return <ListItem
											key={votingObj.id}
											id={idx}
											name={votingObj.name}
											voteCount={votingObj.voteCount}
											addVote={this.addVote}/>
								}
							)
					}
				</ul>
			</div>
		);
	}
}

const Iterator = (props) => {
	const { addVote, id } = props;
	const style = {
		position: 'relative',
		top: '-3px',
		color: 'green',
		fontSize: '45px',
		width: '17px',
		cursor: 'pointer'
	}

	const runAddVote = () => {
		addVote(id);
	}

	return (
		<div style={style} onClick={runAddVote}>+</div>
	);
}

Iterator.propTypes = {
	addVote: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
}

const Votes = (props) => {
	const { voteCount } = props;
	const style = {
		width: '40px',
		height: '40px',
		lineHeight: '40px',
		textAlign: 'center',
		border: 'thin solid red',
		boxShadow: '5px 3px 5px #999999',
		borderRadius: '20px'
	}

	return (
		<div style={style}>
			{voteCount}
		</div>
	);
}

Votes.propTypes = {
	voteCount: PropTypes.number.isRequired
}


const Name = (props) => {
	const { name } = props;

	const style = {
		fontSize: '20px',
		width: '200px',
		textAlign: 'center'
	}

	return (
		<div style={style}>
			{name}
		</div>
	);
}

Name.propTypes = {
	name: PropTypes.string.isRequired
}

const ListItem = (props) => { 

	this.style = {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: '10px 0 10px 0',
		border: 'thin grey solid',
		height: '60px',
		boxShadow: '10px 5px 5px #999999'
	}

	return (
		<li style={this.style}>
			<Votes voteCount={props.voteCount}/> <Name name={props.name}/> <Iterator addVote={props.addVote} id={props.id}/>
		</li>
	);
}

ListItem.propTypes = {
	voteCount: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	addVote: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
}

export default App;
