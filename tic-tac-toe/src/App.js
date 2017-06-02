import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


  const arrayClone = (arr) => {
    var i, copy;
    if (Array.isArray(arr)){
      copy = arr.slice( 0 );
      for( i = 0; i < copy.length; i++ ) {
          copy[ i ] = arrayClone( copy[ i ] );
      }
      return copy;
    } else {
      return arr;
    }
  }

class App extends Component {
  state = {
    //null = unclaimed, X = X, O = O
    board: [[null,null,null],[null,null,null],[null,null,null]],
    winningBoards: [
            [[1,1,1],[null,null,null],[null,null,null]],
            [[null,null,null],[1,1,1],[null,null,null]],
            [[null,null,null],[null,null,null],[1,1,1]],
            [[1,null,null],[1,null,null],[1,null,null]],
            [[null,1,null],[null,1,null],[null,1,null]],
            [[null,null,1],[null,null,1],[null,null,1]],
            [[1,null,null],[null,1,null],[null,null,1]],
            [[null,null,1],[null,1,null],[1,null,null]]
            ],
    turn: "X",
    winner: null
  }
  
  ticTac = (row, col) => {
    if (!this.state.win) {
      let tempBoard = arrayClone(this.state.board);
      tempBoard[row][col] = this.state.turn;
      this.setState( { board: tempBoard });
      this.checkWin();
      (this.state.turn === "X") ? this.setState( { turn: "O" } ) : this.setState( { turn: "X" } )
    }
  }

  checkWin = () => {
    let tempBoard = arrayClone(this.state.board);
    console.log("state:" + this.state.board);
    for (var i = 0; i < tempBoard.length; i++){
      for (var j = 0; j < tempBoard[i].length; j++){
        console.log("checking for " + this.state.turn)
        console.log(tempBoard);
        if (tempBoard[i][j] === this.state.turn) {
          tempBoard[i][j] = 1;
        } else {
          tempBoard[i][j] = null;
        }
      }
    }
    
    console.log(tempBoard);
  }

    // X X X
    //
    // or
    //
    // X O X
    // O X O
    // X O X
    //
    // or 
    // 
    // X
    // X
    // X

    // for (var i = 0; i < arr.length; i++){
    //   if (this.state.board[0][i] == "X" {
    //   })
    // }
    // [['filled'],['filled'],['filled']]

  render() {
    return (
      <div className="App">
        <NextTurn turn={this.state.turn} winner={this.state.winner} />
        <GameBoard board={this.state.board} ticTac={this.ticTac}/>
        {/*  <Moves/>*/}
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

// "mark" = the X, O or 0 data contained in our arrays
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
  (winner) ? display = `${winner} has won the game!` : display = `It is "${turn}'s" turn`

  return (<div className="NextTurn">{display}</div>);
}

// const Moves = () => {
//   return null;
// }

export default App;
