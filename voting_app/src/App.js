import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
	constructor(props){
		super(props);

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
		let newVoteData = this.state.data;
		// console.log(id);
		// console.log(newVoteData[id].voteCount);
		newVoteData[id].voteCount++;
		// console.log(newVoteData[id].voteCount);
		console.log(newVoteData);
		
		this.setState({ data: newVoteData });
		console.log(this.state.data);
	}
            
	render() {
		return (
			<div className="App">
				<h1 style={ {textAlign:'center'} }>Vote Your JS Library!</h1>
				<ul style={ {listStyle:'none', width: '400px', margin: 'auto auto', padding: '0px'} }>
					{
						this.state.data
							.sort(this.voteCompare)
							.map((votingObj) => {
								return <ListItem
											key={votingObj.id}
											id={votingObj.id}
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

class ListItem extends Component { 
	constructor(props){
		super(props);
		
		this.state = {
			id: props.id,
			name: props.name,
			voteCount: props.voteCount,
			addVote: props.addVote
		}

		this.style = {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			margin: '10px 0 10px 0',
			border: 'thin grey solid',
			height: '60px',
			boxShadow: '10px 5px 5px #999999'
		}
	}


	Iterator = (props) => {
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

	Votes = (props) => {
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



	Name = (props) => {
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

	render() {
		return (
			<li style={this.style}>
				<this.Votes voteCount={this.state.voteCount}/> <this.Name name={this.state.name}/> <this.Iterator addVote={this.state.addVote} id={this.state.id}/>
			</li>
		);
	}
}

export default App;
