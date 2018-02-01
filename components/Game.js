import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

//initial state of the board - use to reset the board
const initial_board = {
  board: [null, null, null, null, null, null, null, null, null],
  turn: 'X'
}

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = initial_board;

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.getWinner = this.getWinner.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState(initial_board);
  }

  handleClick (i, ev) {
    ev.preventDefault();
    var board = this.state.board.slice();
    //add turn letter to the index in the array where it was clicked
    board.splice(i, 1, this.state.turn);
    //determine whos turn is next
    var turn = this.state.turn === 'X' ? 'O' : 'X';
    //set the state of the board
    this.setState({
      board: board,
      turn: turn,
    });
  }

  getWinner () {
    const results = solutions.map((solution) => solution.map((i) => this.state.board[i]).join(''));
    const eachline = results.find(item => item === 'XXX' || item === 'OOO');

    return eachline && eachline[0];
  }

  isComplete() {
    return this.state.board.filter(x => x).length === this.state.board.length;
  }

  render () {
    return (
      <div className="game">
        <Board
          board={this.state.board}
          onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={this.getWinner()}/> : null }
        <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
