import React, { Component, Fragment } from 'react';

export default class Snake extends Component {
  static propTypes = {};

  render() {
    const { first, side, last, secondLast } = this.props;
    const snakeTail = require(`../../images/Right-Snake-Tail.svg`);
    const snakeBody = require(`../../images/Loop-Snake.svg`);
    const snakeBodyRight = require(`../../images/Right-Snake.svg`);
    const snakeHead = require(`../../images/${side !== 'right' ? 'Right' : 'Left'}-Snake-Head.svg`);
    const snakeHeadFirst = require(`../../images/Right-Head.svg`);
    return (
      <Fragment>
        {first && last ? (
          <React.Fragment>
            <div style={{ backgroundImage: `url(${snakeTail}` }} className="snake-tail" />
            <div style={{ backgroundImage: `url(${snakeHeadFirst}` }} className={`snake-head first ${side}`} />
          </React.Fragment>
        ) : first ? (
          <div style={{ backgroundImage: `url(${snakeTail}` }} className="snake-tail" />
        ) : last ? (
          <div style={{ backgroundImage: `url(${snakeHead}` }} className={`snake-head ${side}`} />
        ) : side === 'left' ? (
          <div style={{ backgroundImage: `url(${snakeBody}` }} className={`snake-body ${side}`} />
        ) : side === 'right' && secondLast ? (
          <div
            style={{ backgroundImage: `url(${snakeBodyRight}` }}
            className={`snake-body ${side}`}
          />
        ) : null}
      </Fragment>
    );
  }
}
