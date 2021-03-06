import getIndex from "../DataParseHelpers/getIndex";
import getMostRequested from "../DataParseHelpers/getMostRequested";
import setCrossedItems from "../DataParseHelpers/setCrossedItems";
import setItem from "../DataParseHelpers/setItem";

const dataParse = (
  indexBy,
  data,
  crossFilter,
  additionalFilter,
  queryType,
  crossFilterQuery,
  graphLabels
) => {
  let dataStructure = [];
  //when single filtering "Most Requested" graph
  //remove multiples should happen prior to filterByDate
  //multiples should also be given a date

  let newArray = [];
  if (data && queryType === "Sessions" && crossFilter === "") {
    dataStructure = getIndex(data, indexBy);

    return getMostRequested(data, dataStructure, indexBy);
  }
  //when cross-filtering "Most Requested" as index
  else if (data && queryType === "Sessions" && crossFilter !== "") {
    dataStructure = getIndex(data, indexBy);

    return setCrossedItems(
      data,
      dataStructure,
      crossFilter,
      indexBy,
      additionalFilter,
      queryType,
      crossFilterQuery,
      graphLabels
    );
  } else {
    if (queryType === "Users") {
      dataStructure = graphLabels[`${indexBy}`].structure.map(item => {
        return item;
      });
    }
    if (crossFilter !== "") {
      // data = removeMultiple(data);

      return setCrossedItems(
        data,
        dataStructure,
        crossFilter,
        indexBy,
        additionalFilter,
        queryType,
        crossFilterQuery,
        graphLabels
      );
    } else if (data) {
      //when single filtering with index that is not "Most Requested"
      // data = removeMultiple(data);

      return setItem(data, dataStructure, indexBy, graphLabels);
    }
  }
};

export default dataParse;
