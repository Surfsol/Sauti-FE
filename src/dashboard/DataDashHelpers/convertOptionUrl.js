const convertOptionUrl = option => {
  // replace %3C = <, and %3E = >
  if (option === "%3E60") {
    option = ">60";
  }
  if (option === "%3C20") {
    option = "<20";
  }
  // -1 means the search failed
  if (option.search(/forwardslash/) > -1) {
    return option.replace(/forwardslash/g, "/");
  } else if (option.search(/whitespace/) > -1) {
    return option.replace(/whitespace/g, " ");
  } else {
    return option;
  }
};

export default convertOptionUrl;
