import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Filters from './Filters';
import Tool from './Tool';
import ToolPopup from './ToolPopup';

export class InfoGraphic extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.actions.loadTools();
    setTimeout(() => {
      const message = { height: document.body.scrollHeight, width: document.body.scrollWidth };
      // window.top refers to parent window
      window.top.postMessage(message, '*');
    }, 1000);
  }

  handleOpenPopup = (tool, side, offsets, isLast) => {
    const { popupOpen, selectedTool } = this.props.store;
    if (tool === selectedTool && popupOpen) {
      this.hanldeClosePopup();
    } else if (popupOpen) {
      this.hanldeClosePopup();
      window.setTimeout(() => {
        this.props.actions.openPopup(tool, side, offsets, isLast);
      }, 400);
    } else {
      this.props.actions.openPopup(tool, side, offsets, isLast);
    }
  };

  hanldeClosePopup = () => {
    this.props.actions.closePopup();
  };

  render() {
    const {
      filteredTools,
      popupOpen,
      paddingBottom,
      selectedToolInfo,
      selectedTool,
      selectedToolSide,
      popupOffsetTop,
      offsetHorizontal,
    } = this.props.store;

    return (
      <div className="home-info-graphic">
        <header>
          <h2>
            make<span>path</span>
          </h2>
          <p>Visualize what’s hiding in your data.</p>
        </header>
        <main>
          <a
            id="github-fork-me"
            href="https://github.com/makepath/open-source-gis-infographic"
            target="#blank"
          >
            <img
              loading="lazy"
              src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149"
              className="attachment-full size-full"
              alt="Fork me on GitHub"
              data-recalc-dims="1"
            />
          </a>
          <h1>
            A History of
            <br /> Open Source GIS Tools
          </h1>
          <h3>Click on the name of the tool to learn more about it.</h3>
          <Filters />
        </main>
        <div
          className="tools"
          style={
            popupOpen && paddingBottom
              ? { paddingBottom: '20rem' }
              : { transition: '0.5s ease-in-out' }
          }
        >
          {filteredTools.length > 0 ? 
            filteredTools.map((tool, index) => (
            <Tool
              key={`${tool.name}-${tool.releaseYear}`}
              tool={tool}
              side={index % 2 === 0 ? 'left' : 'right'}
              first={index === 0}
              last={index === filteredTools.length - 1}
              secondLast={index === filteredTools.length - 2}
              openPopup={this.handleOpenPopup}
              selected={tool.name === selectedTool && popupOpen}
            />
          )) : <span className="nothing-found">No tools found</span>}
          <ToolPopup
            open={popupOpen}
            side={selectedToolSide}
            {...selectedToolInfo}
            offsetTop={popupOffsetTop}
            offsetHorizontal={offsetHorizontal}
            closePopup={this.hanldeClosePopup}
          />
        </div>
        <footer>
          <h2>
            make<span>path</span>
          </h2>
          <p>Visualize what’s hiding in your data.</p>
        </footer>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    store: state.store,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGraphic);
