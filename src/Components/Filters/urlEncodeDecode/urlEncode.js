import { getSelectedOption } from "../../../OptionFunctions";

const createSearchParams = (filters, urlSearchParams) => {
  Object.keys(filters).forEach(filterId => {
    let options = "";
    if (getSelectedOption(filters, filterId) !== undefined) {
      options = `${getSelectedOption(filters, filterId)}`;
    }
    if (Number(filterId) <= 1 && filters[filterId].selectedTableColumnName) {
      urlSearchParams[
        "filter" + String(filterId)
      ] = `${filters[filterId].selectedTableColumnName}`;
    }
    if (Number(filterId) > 1 && filters[filterId].selectedTableColumnName) {
      urlSearchParams[
        "filter" + String(filterId)
      ] = `${filters[filterId].selectedTableColumnName},${options}`;
    }
  });
  return urlSearchParams;
};

const createUrl = urlSearchParams => {
  let keys = Object.keys(urlSearchParams);
  let values = Object.values(urlSearchParams).map(value =>
    encodeURIComponent(value)
  );
  console.log("values", values);
  const filterStrings = keys.map((key, i) => key + "=" + values[i]).join("&");
  return filterStrings;
};

export { createSearchParams, createUrl };

//let ourSearch = useHistory().location.search;
// const inverseConvertOptionUrl = option => {
//   // these come from the selection options the user will see
//   // -1 means the search failed
//   if (option.search(/\//) > -1) {
//     return option.replace(/\//g, "forwardslash");
//   } else if (option.search(/ /) > -1) {
//     return option.replace(/ /g, "whitespace");
//   } else {
//     return option;
//   }
// };
