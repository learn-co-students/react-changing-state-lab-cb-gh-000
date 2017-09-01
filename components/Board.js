import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className='board'>
				{board.map((f, i) => {
					return (
						<Field player={f} key={i} onClick={onClick.bind(null, i)}/>
					)
				})}
      </div>
    );
  }
}
