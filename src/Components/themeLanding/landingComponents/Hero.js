import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button } from "@material-ui/core";

import Image from "../../themeStyledComponents/atoms/Image/";
import ImgDashboard from "../../../assets/images/dashboard.png";
import ImgDashboardGif from "../../../assets/images/tradeinsights.gif";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";
import { useHistory } from "react-router-dom";
import { fromNav } from "../../../Components/redux-actions/fromNavAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const history = useHistory();
  const handleSignUp = async (e, input) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handlePricing = async (e, input) => {
    e.preventDefault();
    history.push("/pricing");
  };

  useEffect(() => {
    dispatch(fromNav(true));
  }, []);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <SectionHeader
            title={
              <span>
                Data-driven insights{" "}
                <span className="text-highlighted__primary">
                  for East African trade.
                </span>
              </span>
            }
            subtitle="Crowdsourced data from Kenyan, Ugandan, Rwandan, and Tanzanian cross-border traders to support your research, solution designs, and more."
            ctaGroup={[
              <Button
                onClick={handleSignUp}
                variant="contained"
                color="primary"
                size="large"
              >
                Get Started
              </Button>
            ]}
            align="left"
            disableGutter
            titleVariant="h1"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src={ImgDashboardGif}
            alt="CBT Insights by Sauti East Africa"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Hero;
