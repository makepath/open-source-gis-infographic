import React, { Component } from 'react';
import Snake from './Snake';
import Chip from '@material-ui/core/Chip';

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
    const { side, tool, first, last, secondLast, openPopup, selected } = this.props;
    const categoryLabel = tool.category.charAt(0).toUpperCase() + tool.category.slice(1);
    return (
      <div className="home-tool">
        <div
          className={`tool ${side} ${tool.category}${selected ? ' selected' : ''}`}
          onClick={event => openPopup(tool.name, side, this.getOffsets(event.target, side), last)}
        >
          {side === 'left' ? (
            <div className="text left">
              <h3>{tool.releaseYear}</h3>
              <h2>{tool.name}</h2>
              <Chip className="category" label={categoryLabel} />
            </div>
          ) : (
            <div className="text right">
              <Chip className="category" label={categoryLabel} />
              <h2>{tool.name}</h2>
              <h3>{tool.releaseYear}</h3>
            </div>
          )}
          <Snake side={side} first={first} last={last} secondLast={secondLast} />
        </div>
      </div>
    );
  }
}
