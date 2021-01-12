import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  colors
} from "@material-ui/core";
import Icon from "../../../themeStyledComponents/atoms/Icon";
import CardPricingStandard from "../../../themeStyledComponents/organisms/CardPricingStandard";
import { useSelector } from "react-redux";
import PremiumButton from "../PayPal/PremiumButton";
import CancelButton from "../CancelSub/CancelButton";

const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  switchTitle: {
    fontWeight: 700
  },
  titleCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  planText: {
    color: "#3f51b5",
    border: "1px solid rgba(63, 81, 181, 0.5)",
    padding: "0.25em",
    borderRadius: "4px",
    textTransform: "uppercase"
  },
  buttonPadding: {
    marginTop: "1.9em"
  },
  cardSubTitle: {
    minHeight: "6em",
    display: "block"
  }
}));

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  console.log("tier", props.tier);

  //Russ I've used this exact code twice on MyAccount and here. Perhaps this should be global somewhere?
  let planName = props.tier;
  switch (planName) {
    case "FREE":
      planName = "Free Trial";
      break;
    case "PAID":
      planName = "Premium Access";
      break;
  }
  //------------

  const yourPlanFree = () => {
    if (props.tier === "FREE") {
      return (
        <Button
          color="primary"
          variant="outlined"
          disabled
          fullWidth
          size="large"
          className={classes.buttonPadding}
        >
          Your Plan
        </Button>
      );
    } else if (props.tier == "PAID") {
      return <CancelButton />;
      //Pops up modal: "Are you sure you want to downgrade your plan?" <CancelSubscription />;
    }
  };

  // const cancelSub = () => {
  //   if (props.tier === "PAID") {
  //     return <CancelSubscription />;
  const yourPlanPaid = () => {
    if (props.tier !== "PAID") {
      return <PremiumButton />;
    } else if (props.tier === "PAID") {
      return (
        <>
          {
            <Button
              color="primary"
              variant="outlined"
              disabled
              fullWidth
              size="large"
              className={classes.buttonPadding}
            >
              Your Plan
            </Button>
          }
        </>
      );
      //Pops up modal with Select a Payment Method <MonthlyPayPal />
    }
  };
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              <span>{"Your Plan: "}</span>
              <span className={classes.planText}> {planName} </span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <div className={classes.toggleContainer} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.CardLists}>
              <CardPricingStandard
                withShadow
                liftUp
                variant="outlined"
                title="Free Trial"
                subtitle={
                  <span className={classes.cardSubTitle}>
                    Our two week free trial allows you to explore a basic
                    selection of our Trade Insights Data and try out our
                    interactive dashboard for free.
                  </span>
                }
                priceComponent={
                  <div>
                    <Typography
                      variant="h3"
                      component="span"
                      style={{ fontWeight: 900, minHeight: "6em" }}
                    >
                      2 weeks free
                    </Typography>
                    {yourPlanFree()}
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
                  <div
                    color="primary"
                    variant="outlined"
                    fullWidth
                    size="large"
                    href="signup"
                  ></div>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CardPricingStandard
                withShadow
                liftUp
                variant="outlined"
                title="Premium Access"
                subtitle={
                  <span className={classes.cardSubTitle}>
                    With Premium Access you can explore and download all the
                    Sauti Trade Insights data, with additional filtering and
                    dashboard features to drill-down through the data.
                  </span>
                }
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
                    <yourPlan plan="PAID" />
                    {yourPlanPaid()}
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
                cta={yourPlanPaid()}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Subscription;
