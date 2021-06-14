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
      let filteredTools = state.tools;
      if (state.filters.search) {
        filteredTools = filteredTools.filter(tool =>
          tool.name.toLowerCase().includes(state.filters.search.toLowerCase()),
        );
      }
      if (state.filters.categories) {
        Object.entries(state.filters.categories).forEach(entry => {
          if (entry[1]) {
            filteredTools = filteredTools.filter(tool => tool.category === entry[0]);
          }
        });
      }
      if (state.filters.fileFormat) {
        filteredTools = filteredTools.filter(tool => {
          if (state.filters.fileFormat === 'GDAL supported formats') {
            return tool.fileFormats.length >= 1;
          } else {
            return (
              tool.fileFormats.includes(state.filters.fileFormat) ||
              tool.fileFormats[0] === 'GDAL supported formats'
            );
          }
        });
      }
      return {
        ...state,
        filteredTools: filteredTools,
      };

    default:
      return state;
  }
}
