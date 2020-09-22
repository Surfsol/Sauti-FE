import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors, Divider } from "@material-ui/core";
import Section from "../themeStyledComponents/organisms/Section";
import Download from "./landingComponents/LandingDownload";
import Hero from "./landingComponents/Hero";
import Hub from "./landingComponents/Hub";
import Partners from "./landingComponents/Partners";
import Usecases from "./landingComponents/Usecases";
import { reviews, support, integrations } from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5)
    }
  },
  sectionNoPaddingTop: {
    paddingTop: 0
  },
  sectionDatapoints: {
    background: colors.red[900]
  },
  shape: {
    background: theme.palette.alternate,
    borderBottomRightRadius: "50%",
    borderBottom: `1px solid ${colors.grey[200]}`
  }
}));

const DesktopApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        {/* 
        <Section fullWidth="True" className={classes.sectionDatapoints} disablePadding="True">
          <Datapoints />
        </Section>
        */}
        <Section>
          <Partners data={integrations} />
        </Section>
        <Section fullWidth="True">
          <Usecases />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Hub />
        </Section>
      </div>
      <Section>
        <Download data={[]} />
      </Section>
      <Divider />
    </div>
  );
};

export default DesktopApp;
