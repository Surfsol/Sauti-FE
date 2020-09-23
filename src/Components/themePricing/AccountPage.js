import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionAlternate from "../themeStyledComponents/organisms/SectionAlternative";
import Support from "./pricingComponents/Support";
import Main from "./pricingComponents/Main";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  }
}));

const Pricing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Main />
      <SectionAlternate>
        <Support />
      </SectionAlternate>
    </div>
  );
};

export default Pricing;
