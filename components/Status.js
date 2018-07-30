import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    let status = winner;
    (winner !== 'X' && winner !== 'O') ? status = 'Tie' : status += ' wins';

    return (
      <div className="status">
        {status}
      </div>
    );
  }
}
