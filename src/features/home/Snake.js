import React, { Component, Fragment } from 'react';

export default class Snake extends Component {
  static propTypes = {};

  render() {
    const { first, side, last } = this.props;
    const snakeTail = require(`../../images/Right-Snake-Tail.svg`);
    const snakeBody = require(`../../images/${side !== 'right' ? 'Right' : 'Left'}-Snake.svg`);
    const snakeHead = require(`../../images/${side !== 'right' ? 'Right' : 'Left'}-Snake-Head.svg`);
    return (
      <Fragment>
        {first ? (
          <div style={{ backgroundImage: `url(${snakeTail}` }} className="snake-tail" />
        ) : last ? (
          <div style={{ backgroundImage: `url(${snakeHead}` }} className={`snake-head ${side}`} />
        ) : (
          <div style={{ backgroundImage: `url(${snakeBody}` }} className={`snake-body ${side}`} />
        )}
      </Fragment>
    );
  }
}
