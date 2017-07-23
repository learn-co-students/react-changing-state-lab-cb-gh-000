import React from 'react';
import Field from './Field';

export default class Board extends React.Component {

  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {board.map((player, index) => {
          if((index+1) % 3 === 0 && index+1 !== 9) {
            return (<span><Field player={player} key={index} onClick={onClick.bind(null,index)} /><br /></span>);
          } else {
            return (<span><Field player={player} key={index} onClick={onClick.bind(null,index)} /></span>);
        }
      })}
      </div>
    );
  }
}
