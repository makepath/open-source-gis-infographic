import { LOAD_TOOLS } from './constants';

export function openModal(modal) {}

export function loadTools(args = {}) {
  return {
    type: LOAD_TOOLS,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LOAD_TOOLS:
      // Just after a request is sent
      const tools = require('../../../data/tools.json');
      return {
        ...state,
        tools: tools,
        filteredTools: tools,
      };

    default:
      return state;
  }
}
