import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
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
import PremiumButton from "../PayPal/PremiumButton";
import CancelButton from "../CancelSub/CancelButton";
import { namePlan } from "../planName";
import Free from "./Free";
import { useStyles } from "./Styles";

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  const [freeView, setFreeView] = useState(false);
  const planName = namePlan(props.tier);

  useEffect(() => {
    if (props.tier === "FREE" || props.tier === "ADMIN") {
      setFreeView(true);
    }
  }, []);

  const yourPlanFree = () => {
    if (props.tier === "FREE") {
      setFreeView(true);
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

  const yourPlanPaid = () => {
    if (props.tier !== "PAID") {
      return <PremiumButton />;
      //Pops up modal with Select a Payment Method <MonthlyPayPal />
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
            {freeView && <Free yourPlanFree={yourPlanFree} />}
            <Grid item xs={freeView ? 6 : 12}>
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
