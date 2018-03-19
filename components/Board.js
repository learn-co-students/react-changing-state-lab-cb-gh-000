import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className="board">
        {board.map((field, index) => {
          return (
            <Field player={field} key={index} onClick={onClick.bind(null, index)} />
          );
        })}
      </div>
    );
  }
}
