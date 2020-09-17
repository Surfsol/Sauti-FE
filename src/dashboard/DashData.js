import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GraphContainer from "../GraphContainer";
import { FilterBoxOptions } from "../Components/FilterBoxOptions";
import { useSelector, useDispatch } from "react-redux";
import { queriesFilters } from "../Components/redux-actions/queriesAction";
import { applyAction } from "../Components/redux-actions/applyAction";
import { allowed } from "../Components/orderedGraphLabels";
import { decodeToken, getToken } from "../dashboard/auth/Auth";
import { tierDefined } from "../Components/redux-actions/tierAction";
import { showNoAccessAction } from "../Components/redux-actions/showNoAccessAction";

//set inital filters
const filterTemplate = {
  0: {
    nameOfFilter: "Data Series",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: false
  },

  1: {
    nameOfFilter: "Compare SubSamples",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: false
  },
  2: {
    nameOfFilter: "Data Filter",
    selectedCategory: "",
    selectableOptions: {},
    selectedTable: "",
    selectedTableColumnName: "",
    showOptions: true
  }
};

function DashHome() {
  const [noAccess, setNoAccess] = useState(true);
  const token = getToken();
  const history = useHistory();
  const dispatch = useDispatch();

  const graphLabels = useSelector(
    state => state.catLabelReducer.labels.getGraphLabels
  );

  let tier;
  if (token) {
    tier = decodeToken(token);
    tier = tier.tier;
  }
  let access;
  if (
    tier !== undefined &&
    (tier === "ADMIN" || tier === "PAID" || tier === "GOV_ROLE")
  ) {
    access = "paid";
  } else if (tier === "FREE") {
    access = "free";
  }

  dispatch(tierDefined({ tier: tier, access: access }));

  // convert the english word url to option labels the user will see
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

  let allSelectedCategories = [];
  //if nothing in history, set inital filters to Gender
  const setupFilter = history => {
    if (history.location.search.length === 0) {
      let defaultFilter = {};
      Object.keys(filterTemplate).forEach(filterId => {
        defaultFilter = {
          ...defaultFilter,
          [filterId]: {
            ...filterTemplate[filterId],
            selectedCategory: filterId === "0" ? "Country of Residence" : "",

            selectedTable: filterId === "0" || filterId === "1" ? "Users" : "",

            selectedTableColumnName:
              filterId === "0" ? "country_of_residence" : ""
          }
        };
      });
      return defaultFilter;
    } else {
      let searchString = history.location.search.slice(
        1,
        history.location.search.length
      );

      // facebook case
      // prove &fbclid is in the url
      if (searchString.search("&fbclid") > -1) {
        let locationOfSplit = searchString.search("&fbclid");
        searchString = searchString.slice(0, locationOfSplit);
      }
      // can't use (_, -, &, ^, z) to separate the filter sections
      // _ is in cross_freq
      // - is in 10-20
      // &, ^ aren't accepted by twitter
      // z is in maize

      //split on &
      let split1 = searchString.split("&&");

      // making a new set of filters from the url
      let newFilterObject = {};
      for (var i in split1) {
        let split2 = split1[i].split("=");
        let split3 = split2[1].split(",");

        if (split3[0] !== "null") {
          allSelectedCategories.push(
            FilterBoxOptions.tableNamesToCategoryName[split3[0]]
          );
          let optionFlags = {};

          graphLabels[`${split3[0]}`].labels.forEach(option => {
            optionFlags = {
              ...optionFlags,
              [option]: false
            };
          });

          // includes first data filter
          newFilterObject = {
            ...newFilterObject,
            [i]: {
              ...filterTemplate[i],
              selectedCategory:
                // The selectedCategory was cleverly calculated.  This could be done better.
                FilterBoxOptions.tableNamesToCategoryName[split3[0]],
              selectedTableColumnName: split3[0],
              selectableOptions:
                split3[1] === "undefined"
                  ? { ...optionFlags }
                  : // only need to alter split3[1] if we are using it
                    { ...optionFlags, [convertOptionUrl(split3[1])]: true },
              selectedTable:
                // The selectedTable was really cleverly calculated.  This could also be done better.
                FilterBoxOptions.default[
                  FilterBoxOptions.tableNamesToCategoryName[split3[0]]
                ].value.query,

              showOptions: i <= 1 ? filterTemplate[i].showOptions : false
            }
          };
        } else {
          newFilterObject = {
            ...newFilterObject,
            [i]: {
              ...filterTemplate[i],
              // we want the first additional filter to use the filterTemplate show options
              showOptions: i <= 2 ? filterTemplate[i].showOptions : false
            }
          };
        }
      }

      return newFilterObject;
    }
  };

  let defaultFilters = {
    0: {
      nameOfFilter: "Data Series",
      selectedCategory: "Country of Residence",
      selectableOptions: {},
      selectedTable: "Users",
      selectedTableColumnName: "country_of_residence",
      showOptions: false
    },

    1: {
      nameOfFilter: "Compare SubSamples",
      selectedCategory: "",
      selectableOptions: {},
      selectedTable: "",
      selectedTableColumnName: "",
      showOptions: false
    },
    2: {
      nameOfFilter: "Data Filter",
      selectedCategory: "",
      selectableOptions: {},
      selectedTable: "",
      selectedTableColumnName: "",
      showOptions: true
    }
  };

  if (
    tier != "ADMIN" &&
    tier != "PAID" &&
    tier != "GOV_ROLE" &&
    tier != "FREE"
  ) {
    dispatch(
      queriesFilters({
        filters: defaultFilters
      })
    );
    //if not logged in, will not see Apply Button
    dispatch(
      applyAction({
        apply: true
      })
    );
    return <GraphContainer filters={defaultFilters} />;
  } else if (tier === "FREE") {
    let cat = "";
    setupFilter(history);
    for (let i = 0; i < allSelectedCategories.length; i++) {
      if (!allowed.includes(allSelectedCategories[i])) {
        cat = allSelectedCategories[i];
      }
    }

    if (cat != "") {
      dispatch(
        queriesFilters({
          filters: defaultFilters
        })
      );
      dispatch(
        showNoAccessAction({
          noAccess: noAccess,
          setNoAccess: setNoAccess,
          cat: cat
        })
      );
      return (
        <>
          <GraphContainer filters={defaultFilters} />
        </>
      );
    } else {
      dispatch(
        applyAction({
          apply: false
        })
      );
      return (
        <>
          <GraphContainer filters={setupFilter(history)} />
        </>
      );
    }
  } else {
    dispatch(
      applyAction({
        apply: false
      })
    );
    return (
      <>
        <GraphContainer filters={setupFilter(history)} />
      </>
    );
  }
}

export default DashHome;
