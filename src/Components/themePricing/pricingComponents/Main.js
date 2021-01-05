import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  Button
} from "@material-ui/core";
//import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import Icon from "../../themeStyledComponents/atoms/Icon/";
import Image from "../../themeStyledComponents/atoms/Image/";
import CardPricingStandard from "../../themeStyledComponents/organisms/CardPricingStandard";
import Section from "../../themeStyledComponents/organisms/Section";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "baseline"
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5)
    }
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.main
  },
  textWhite: {
    color: "white"
  },
  fontWeightBold: {
    fontWeight: "bold"
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0, 2)
  },
  toggleButtonGroup: {
    background: "transparent"
  },
  toggleButton: {
    background: "transparent",
    border: "1px solid white",
    padding: theme.spacing(1, 5)
  },
  toggleButtonActive: {
    backgroundColor: "white !important"
  },
  toggleTitle: {
    textTransform: "capitalize"
  },
  toggleTitleActive: {
    color: theme.palette.primary.main
  },
  pricingContainer: {
    position: "relative"
  },
  shapeContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    background: theme.palette.primary.main,
    height: 171
  },
  shapeImage: {
    objectFit: "cover"
  },
  sectionNoPaddingTop: {
    paddingTop: 0
  },
  seriesList: {
    paddingLeft: "2em",
    whiteSpace: "break-spaces"
  },

  cardPricing: {
    "& .countup-number__count-wrapper": {
      textAlign: "left",
      marginBottom: 0,
      fontWeight: "bold"
    }
  }
}));

const Main = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const [pricingOption, setPricingOption] = React.useState("annual");

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  const history = useHistory();
  const handleSignUp = async (e, input) => {
    e.preventDefault();
    history.push("/signup");
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.sectionContainer}>
        <Section className={classes.pagePaddingTop}>
          <SectionHeader
            title="Pricing"
            subtitle="We are founded by leading researchers and development practitioners in East Africa’s cross-border trade environment. Cross-borders are notoriously difficult space to map, but with Sauti Trade Insights you can easily explore this data through interactive charts, or download the data to conduct your own analysis."
            titleProps={{
              className: clsx(classes.textWhite, classes.fontWeightBold),
              variant: "h2"
            }}
            subtitleProps={{
              className: classes.textWhite
            }}
            data-aos="fade-up"
          />
          <div className={classes.toggleContainer} data-aos="fade-up">
            <Grid container spacing={2}>
              <Grid item xs={6} className={classes.CardLists}>
                <CardPricingStandard
                  withShadow
                  liftUp
                  variant="outlined"
                  title="Free Trial"
                  subtitle="Our two week free trial allows you to explore a basic selection of our Trade Insights Data and try out our interactive dashboard for free."
                  priceComponent={
                    <div>
                      <Typography
                        variant="h3"
                        component="span"
                        style={{ fontWeight: 900 }}
                      >
                        2 weeks free
                      </Typography>
                    </div>
                  }
                  features={[
                    <div>
                      Demographic Data Series:{" "}
                      <ul className={classes.seriesList}>
                        <li>Country of Residence</li>
                        <li>Age</li>
                        <li>Education</li>
                      </ul>
                    </div>,
                    <div>
                      Trade Insights Dataseries:{" "}
                      <ul className={classes.seriesList}>
                        <li>Requested Agencies</li>
                        <li>Requested Procedures, by Destination</li>
                      </ul>
                    </div>,
                    <div>
                      Business Insights Dataseries:{" "}
                      <ul className={classes.seriesList}>
                        <li>Traded Commodity Categories</li>
                      </ul>
                    </div>,
                    "Single data filter",
                    "Time series views"
                  ]}
                  featureCheckComponent={
                    <Icon
                      fontIconClass="far fa-check-circle"
                      fontIconColor={colors.indigo[500]}
                    />
                  }
                  cta={
                    <Button
                      onClick={handleSignUp}
                      color="primary"
                      variant="outlined"
                      fullWidth
                      size="large"
                    >
                      Join now
                    </Button>
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <CardPricingStandard
                  withShadow
                  liftUp
                  variant="outlined"
                  title="Premium Access"
                  subtitle="With Premium Access you can explore and download all the Sauti Trade Insights data, with additional filtering and dashboard features to drill-down through the data."
                  priceComponent={
                    <div>
                      <Typography
                        variant="h3"
                        component="span"
                        style={{ fontWeight: 900 }}
                      >
                        USD $60
                      </Typography>
                      <Typography component="span" variant="subtitle1">
                        / mo
                      </Typography>
                    </div>
                  }
                  features={[
                    "All free features",
                    <div>
                      Demographic Data Series:{" "}
                      <ul className={classes.seriesList}>
                        <li>Border Crossing Frequency</li>
                        <li>Border Location</li>
                        <li>Gender</li>
                        <li>Preferred Language</li>
                        <li>Cross Border Trade as Primary Income</li>
                        <li>Grow/Produce their Own Goods</li>
                      </ul>
                    </div>,
                    <div>
                      Trade Insights Data Series
                      <ul className={classes.seriesList}>
                        <li>Requested Documents</li>
                        <li>Requested Procedures, by Commodity</li>
                        <li>Requested Procedures, by Commodity Category</li>
                      </ul>
                    </div>,
                    <div>
                      Business Insights Data Series
                      <ul className={classes.seriesList}>
                        <li>Currency Exchanges</li>
                        <li>Traders' Buying/Selling Country</li>
                        <li>Traders' Buying/Selling Market</li>
                        <li>Traded Commodities' Origin</li>
                        <li>Traded Commodities</li>
                      </ul>
                    </div>,
                    "Unlimited filters",
                    "Date filters",
                    "Data comparison views",
                    "Download data"
                  ]}
                  featureCheckComponent={
                    <Icon
                      fontIconClass="far fa-check-circle"
                      fontIconColor={colors.indigo[500]}
                    />
                  }
                  cta={
                    <Button
                      onClick={handleSignUp}
                      color="primary"
                      variant="contained"
                      fullWidth
                      size="large"
                    >
                      Join now
                    </Button>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Section>
      </div>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired
};

export default Main;
