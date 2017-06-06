import React, {
  Component
} from 'react';
import './App.css';
import dcopy from 'deep-copy';

class App extends Component {
	constructor(){
		super();
		let board = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
			];
		let turn = "X"
	this.state = {
			//null = unclaimed, X = X, O = O
			board,
			turn,
			winner: null,
			hist: [{board, turn}]
		}
	}

  ticTac = (row, col) => {
    if (!this.state.winner) {
      let tempBoard = dcopy(this.state.board);
      tempBoard[row][col] = this.state.turn;
      this.setState({
        board: tempBoard
      }, () => {
		//check for winner
        this.checkWin();
		// switch turn to the next player
        (this.state.turn === "X") ? 
			this.setState({ turn: "O" }, () => {this.saveBoard()}): 
			this.setState({ turn: "X" }, () => {this.saveBoard()});
      });

    }
  }

  saveBoard = () => {
	let hist = dcopy(this.state.hist);
	hist.push({ turn: this.state.turn, board: this.state.board });
	this.setState({ hist });
  }

  checkWin = () => {
    var turn = this.state.turn;

    //row
    let verticalCount = [0, 0, 0];
    let leftDiagonalCount = 0;
    let rightDiagonalCount = 0;
	  let fullCount = 0;
    for (let i = 0; i < this.state.board.length; i++) {
      //col
      let horizontalCount = 0;
      for (let j = 0; j < this.state.board[i].length; j++) {
        if (this.state.board[i][j] === turn) {
          horizontalCount++;
          verticalCount[j]++;
          if (i - j === 0) {
            leftDiagonalCount++;
          }
          if (i - j === 2 || i - j === -2 || (i === 1 && j === 1)) {
            rightDiagonalCount++;
          }
        }
		if (this.state.board[i][j]){
			fullCount++;
		}
      }
      //Check for horizontal or diagonal wins
      if (horizontalCount === 3 || leftDiagonalCount >= 3 || rightDiagonalCount >= 3) {
        this.setState({ winner: turn })
        return
      }
    }
    //check for the vertical win
    verticalCount.forEach((count) => {
      if (count === 3) {
        this.setState({ winner: turn })
      }
    });
    if (fullCount === 9) {
      this.setState({ winner: "stalemate" })
    }
  }

  rewindGame = (move) => {
	this.setState({ 
		winner: null, 
		board: this.state.hist[move].board,
		turn: this.state.hist[move].turn },
		() => {
			let hist = dcopy(this.state.hist);
			for (let i = hist.length - 1; i > move; i--){
				hist.pop();
			}
			this.setState({ hist });
		}
	);
	
  }

	render() {
		return (
			<div className="App">
				<div className="Board">
					<GameBoard board={this.state.board} ticTac={this.ticTac}/>
					<NextTurn turn={this.state.turn} winner={this.state.winner} />
				</div>
				<Moves move={this.state.hist.length} rewindGame={this.rewindGame} key={this.state.hist.length}/>
			</div>
		);
	}
}


const GameBoard = (props) => {
  return (<div>
            { props.board.map((row, idx) => { 
                return <Row 
                          key={idx} 
                          rowIdx={idx} 
                          row={row}
                          ticTac={props.ticTac}/> }) 
            }
          </div>
        );
}

// "mark" = the X, O or null data contained in our arrays
const Row = (props) => {
  return (
    <div>
      { props.row.map((mark, idx) => { 
          return <Cell 
                    key={mark+idx} 
                    mark={mark} 
                    cellIdx={idx} 
                    rowIdx={props.rowIdx}
                    ticTac={props.ticTac}/> }) 
      }
    </div>
  );
}

const Cell = (props) => {
  let { rowIdx, cellIdx, mark, ticTac } = props;

  const callTicTac = () => {
    if (!mark) { ticTac(rowIdx, cellIdx) }
  }

  let display;
  (mark) ? display = mark : display = ""

  return <div className="Cell" onClick={callTicTac}>{display}</div>
}

const NextTurn = (props) => {
  let { turn, winner } = props;
  
  let display = "";
  if (winner === "stalemate"){
	display = `This game is a ${winner}.`;
  } else {
	(winner) ? display = `${winner} has won the game!` : display = `It is "${turn}'s" turn`
  }  

  return (<div className="NextTurn">{display}</div>);
}

const Moves = (props) => {
	let { move, rewindGame } = props;
  
	let display = [];

	const callRewindGame = (moveBack) => {
		rewindGame(moveBack);
	}

	for ( let i = 0; i < move; i++ ){
		if (i === 0){
			display.push(<li key={i}><button onClick={() => callRewindGame(i)} data={i}>Game Start</button></li>)
		} else {
			display.push(<li key={i}><button onClick={() => callRewindGame(i)} data={i}>Move #{i}</button></li>);
		}
	}

	return (
		<ol className="Moves">
			{display}
		</ol>
		);
}

export default App;
