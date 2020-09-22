import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button } from "@material-ui/core";

import Image from "../../themeStyledComponents/atoms/Image/";
import ImgDashboard from "../../../assets/images/dashboard.png";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";

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

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    // class name and rest not doing anything
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
                Support East Africa's traders{" "}
                <span className="text-highlighted__primary">
                  with data-driven insights.
                </span>
              </span>
            }
            subtitle="Data from Kenyan, Ugandan, Rwandan, and Tanzanian cross-border traders to support your research, policy work, solution designs and more."
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="pricing"
              >
                Get Started
              </Button>,
              <Button variant="outlined" color="primary" size="large">
                Learn more
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
            src={ImgDashboard}
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
