const initialState = {
  tools: [],
  filteredTools: [],
  fileFormats: [],
  popupOpen: false,
  paddingBottom: false,
  selectedTool: null,
  selectedToolSide: null,
  popupOffsetTop: null,
  offsetHorizontal: null,
  filters: {
    search: '',
    categories: {
      vector: false,
      raster: false,
      both: false,
      other: false,
    },
    fileFormat: '',
  },
};

export default initialState;
