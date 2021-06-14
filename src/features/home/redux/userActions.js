import { OPEN_POPUP, CLOSE_POPUP, SET_SEARCH, SET_CATEGORY, SET_FILE_FORMAT } from './constants';

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

export function setSearch(search) {
  return {
    type: SET_SEARCH,
    search,
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function setFileFormat(fileFormat) {
  return {
    type: SET_FILE_FORMAT,
    fileFormat,
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

    case SET_SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.search,
        },
      };

    case SET_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: {
            ...Object.entries(state.filters.categories).map(entry => false),
            [action.category]: !state.filters.categories[action.category],
          },
        },
      };

    case SET_FILE_FORMAT:
      return {
        ...state,
        filters: {
          ...state.filters,
          fileFormat: action.fileFormat,
        },
      };

    default:
      return state;
  }
}
