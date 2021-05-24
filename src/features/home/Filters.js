import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { TextField, InputLabel, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export class Filters extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleSearchInputChange = search => {
    this.props.actions.setSearch(search);
    this.props.actions.filterTools();
  };

  handleCategoryClick = category => {};

  render() {
    const { tools, fileFormats } = this.props.store;
    return (
      <div className="filters">
        <div className="search">
          <InputLabel>Filter by name:</InputLabel>
          <Autocomplete
            id="search"
            options={tools}
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            onInputChange={(event, value) => this.handleSearchInputChange(value)}
            renderInput={params => (
              <TextField {...params} placeholder="Type to filter" variant="filled" />
            )}
          />
        </div>
        <div className="categories">
          <h4>Category</h4>
          <Button className="vector">Vector</Button>
          <Button className="raster">Raster</Button>
          <Button className="both">Both</Button>
          <Button className="other">Other</Button>
        </div>
        {/*<div className="file-formats">
          <InputLabel>File format:</InputLabel>
          <Autocomplete
            id="file-format"
            options={fileFormats}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} placeholder="Type to filter" variant="filled" />
            )}
          />
        </div>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
