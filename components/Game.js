import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

const initial_state = {
	board: [null, null, null,
					null, null, null,
					null, null, null],
	turn: 'X'
}

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = initial_state;

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.isComplete = this.isComplete.bind(this);
  }

  handleReset (ev) {
		ev.preventDefault();
		this.setState(initial_state)
  }

  handleClick (i, ev) {
		ev.preventDefault();
		const board = this.state.board.slice();
		board.splice(i,1,this.state.turn);
		const turn = this.state.turn === 'X' ? 'O' : 'X';
		this.setState({board,turn});
  }

	
  getWinner () {
		const results = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );
    const el = results.find(
      (item) => item === 'XXX' || item === 'OOO'
    );
    return el && el[0];
  }

  isComplete () {
		return this.state.board.filter(x=>x).length === this.state.board.length
  }

  render () {
    return (
      <div className='game'>
				<Board board={this.state.board} onClick={this.handleClick}/>
				{this.isComplete() ? <Status winner={this.getWinner()} /> : null }
				<button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
