import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.isComplete = this.isComplete.bind(this);
  }

  handleReset(event) {
    event.preventDefault();
    let board = [],
        reset = 0;
    for(let c = 0; c < 9; c++) { board[c] = null; }
    const turn = 'X';
    this.setState({ board, turn });
  }

  handleClick(index, event){
    event.preventDefault();
    this.state.board[index] = this.state.turn; // add to board
    const board = this.state.board;
    const turn = this.state.turn === 'X' ? 'O' : 'X'; // switch turn
    this.setState({ board, turn });
    console.log(this.state.board);
  }

  getWinner(){
    const { board } = this.state;
    //Check X
    let player = 'X';
    for(let players = 2; players > 0; players--){
      for(let i = 0; i < 8; i++){
        let check = 0;
        for(let j = 0; j < 3; j++){
          if(board[solutions[i][j]] === player) check++;
          if(check === 3) return player;
        }
      }
      player = 'O';
    }
  }

  isComplete(){
    for(let x of this.state.board){
      if(x === null) return false;
    }
    return true;
  }

  render(){
    const { board } = this.state;
    return (
      <div>
      <center>
      <Board board={board} onClick={this.handleClick} /><br /><br />
      {this.isComplete() && <Status winner={this.getWinner()} />}
      <button className="game__reset" onClick={this.handleReset}>Reset</button>
      </center>
      </div>
    );
  }
}
