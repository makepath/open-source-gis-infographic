import React, { Component, Fragment } from 'react';

export default class Snake extends Component {
  static propTypes = {};

  render() {
    const { first, side, last } = this.props;
    const snakeTail = require(`../../images/Right-Tail.svg`);
    const snakeBody = require(`../../images/${side !== 'right' ? 'Right' : 'Left'}-Snake.svg`);
    const snakeHead = require(`../../images/${side !== 'right' ? 'Right' : 'Left'}-Head.svg`);
    return (
      <Fragment>
        {first ? (
          <div style={{ backgroundImage: `url(${snakeTail}` }} className="snake-tail" />
        ) : null}
        <div style={{ backgroundImage: `url(${snakeBody}` }} className={`snake-body ${side}`} />
        {last ? (
          <div style={{ backgroundImage: `url(${snakeHead}` }} className={`snake-head ${side}`} />
        ) : null}
      </Fragment>
    );
  }
}
