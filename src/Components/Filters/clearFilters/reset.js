const filterReset = filters => {
  return {
    0: {
      ...filters[0],
      nameOfFilter: "Data Series",
      selectableOptions: {}
    },
    1: {
      nameOfFilter: "Compare SubSamples",
      selectedCategory: "",
      selectableOptions: {},
      selectedTable: "Users",
      selectedTableColumnName: "",
      showOptions: false,
      optionHasBeenSelected: false
    },
    2: {
      nameOfFilter: "Data Filter",
      selectedCategory: "",
      selectableOptions: {},
      selectedTable: "",
      selectedTableColumnName: "",
      showOptions: true,
      optionHasBeenSelected: false
    }
  };
};

export { filterReset };
