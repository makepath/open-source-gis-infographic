import { OPEN_POPUP, CLOSE_POPUP } from './constants';

export function openPopup(tool, side, offsets, paddingBottom) {
  return {
    type: OPEN_POPUP,
    tool,
    side,
    offsets,
    paddingBottom,
  };
}

export function closePopup() {
  return {
    type: CLOSE_POPUP,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case OPEN_POPUP:
      const selectedToolInfo = action.tool
        ? state.tools.filter(tool => tool.name === action.tool)[0]
        : null;
      return {
        ...state,
        selectedToolInfo: selectedToolInfo,
        selectedTool: action.tool,
        selectedToolSide: action.side,
        popupOpen: true,
        paddingBottom: action.paddingBottom,
        popupOffsetTop: action.offsets.offsetTop,
        offsetHorizontal: action.offsets.offsetHorizontal,
      };

    case CLOSE_POPUP:
      return {
        ...state,
        popupOpen: false,
        paddingBottom: false,
      };

    default:
      return state;
  }
}
