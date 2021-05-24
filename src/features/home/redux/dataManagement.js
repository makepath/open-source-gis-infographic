import { LOAD_TOOLS, FILTER_TOOLS } from './constants';

export function loadTools(args = {}) {
  return {
    type: LOAD_TOOLS,
  };
}

export function filterTools(args = {}) {
  return {
    type: FILTER_TOOLS,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LOAD_TOOLS:
      // Just after a request is sent
      const tools = require('../../../data/tools.json');
      const fileFormats = tools.reduce((acc, curr) => {
        curr.fileFormats.forEach(fileFormat =>
          !acc.includes(fileFormat) ? acc.push(fileFormat) : null,
        );
        return acc;
      }, []);
      return {
        ...state,
        tools: tools,
        filteredTools: tools,
        fileFormats: fileFormats,
      };

    case FILTER_TOOLS:
      const filteredByName = state.tools.filter(tool => tool.name.toLowerCase().includes(state.filters.search.toLowerCase()));
      return {
        ...state,
        filteredTools: filteredByName,
      };

    default:
      return state;
  }
}
