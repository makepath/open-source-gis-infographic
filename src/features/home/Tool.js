import React, { Component } from 'react';
import Snake from './Snake';

export default class Tool extends Component {
  static propTypes = {};

  getOffsets = (el, side) => {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (!el.classList.contains('tool')) {
      return this.getOffsets(el.parentElement, side);
    }
    const offsetTop = rect.top + scrollTop;
    const h3Element = el.getElementsByTagName('h3')[0];
    const offsetHorizontal =
      side === 'left'
        ? h3Element.offsetLeft
        : rect.width - h3Element.offsetLeft - h3Element.offsetWidth;
    return { offsetTop, offsetHorizontal };
  };

  render() {
    const {
      side,
      name,
      category,
      releaseYear,
      first,
      last,
      secondLast,
      openPopup,
      selected,
    } = this.props;
    console.log(this.props);
    return (
      <div className="home-tool">
        <div
          className={`tool ${side} ${category}${selected ? ' selected' : ''}`}
          onClick={event => openPopup(name, side, this.getOffsets(event.target, side), last)}
        >
          {side === 'left' ? (
            <div className="text left">
              <h3>{releaseYear}</h3>
              <h2>{name}</h2>
            </div>
          ) : (
            <div className="text right">
              <h2>{name}</h2>
              <h3>{releaseYear}</h3>
            </div>
          )}
          <Snake side={side} first={first} last={last} secondLast={secondLast} />
        </div>
      </div>
    );
  }
}
