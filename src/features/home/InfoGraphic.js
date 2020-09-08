import React, { Component } from 'react';
import Tool from './Tool';
import ToolPopup from './ToolPopup';

export default class InfoGraphic extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      tools: require('../../data/tools.json'),
      popupOpen: false,
      paddingBottom: false,
      selectedTool: null,
      selectedToolSide: null,
      popupOffsetTop: null,
      offsetHorizontal: null,
    };
  }

  handleOpenPopup = (tool, side, offsets, last) => {
    // const scrollTop = { top: offsets.offsetTop, behavior: 'smooth' };
    if (tool === this.state.selectedTool && this.state.popupOpen) {
      this.hanldeClosePopup();
    } else if (this.state.popupOpen) {
      this.hanldeClosePopup();
      window.setTimeout(() => {
        this.setState({
          popupOpen: true,
          paddingBottom: last,
          selectedTool: tool,
          selectedToolSide: side,
          popupOffsetTop: offsets.offsetTop,
          offsetHorizontal: offsets.offsetHorizontal,
        });
        // window.scrollTo({ ...scrollTop, top:  scrollTop.top - 250});
      }, 400);
    } else {
      this.setState({
        popupOpen: true,
        paddingBottom: last,
        selectedTool: tool,
        selectedToolSide: side,
        popupOffsetTop: offsets.offsetTop,
        offsetHorizontal: offsets.offsetHorizontal,
      });
      window.setTimeout(() => {
        // window.scrollTo({ ...scrollTop, top:  scrollTop.top - 250});
      }, 10);
    }
  };

  hanldeClosePopup = () => {
    this.setState({ popupOpen: false });
  };

  render() {
    const {
      tools,
      popupOpen,
      paddingBottom,
      selectedTool,
      selectedToolSide,
      popupOffsetTop,
      offsetHorizontal,
    } = this.state;
    const selectedToolInfo = selectedTool
      ? tools.filter(tool => tool.name === selectedTool)[0]
      : null;

    return (
      <div className="home-info-graphic">
        <header>
          <h2>
            make<span>path</span>
          </h2>
          <p>Spatial Data Science. Your Way.</p>
        </header>
        <main>
          <h1>
            A History of
            <br /> Open Source GIS Tools
          </h1>
          <h3>Click on the name of the tool to learn more about it.</h3>
          <div className="categories">
            <h4>Category</h4>
            <span className="vector">Vector</span>
            <span className="raster">Raster</span>
            <span className="both">Both</span>
            <span className="other">Other</span>
          </div>
        </main>
        <div
          className="tools"
          style={popupOpen && paddingBottom ? { paddingBottom: "20rem" } : { transition: '0.5s ease-in-out' }}
        >
          {tools.map((tool, index) => (
            <Tool
              key={`${tool.name}-${tool.releaseYear}`}
              name={tool.name}
              category={tool.category}
              releaseYear={tool.releaseYear}
              side={index % 2 === 0 ? 'left' : 'right'}
              first={index === 0}
              last={index === tools.length - 1}
              openPopup={this.handleOpenPopup}
              selected={tool.name === selectedTool && popupOpen}
            />
          ))}
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
          <p>Spatial Data Science. Your Way.</p>
        </footer>
      </div>
    );
  }
}
