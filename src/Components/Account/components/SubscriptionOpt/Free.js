import React from "react";
import { useStyles } from "./Styles";
import { Grid, Typography, colors } from "@material-ui/core";
import Icon from "../../../themeStyledComponents/atoms/Icon";
import CardPricingStandard from "../../../themeStyledComponents/organisms/CardPricingStandard";

const Free = ({ yourPlanFree }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.CardLists}>
      <CardPricingStandard
        withShadow
        liftUp
        variant="outlined"
        title="Free Trial"
        subtitle={
          <span className={classes.cardSubTitle}>
            Our two week free trial allows you to explore a basic selection of
            our Trade Insights Data and try out our interactive dashboard for
            free.
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
  );
};

export default Free;
