import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Button, colors } from "@material-ui/core";
import SectionHeader from "./molecules/SectionHeader";
import CardBase from "./organisms/CardBase";

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    background: colors.indigo[500],
    [theme.breakpoints.up("md")]: {
      background: `url(/images/illustrations/newsletter-bg.svg) no-repeat 150% 50% ${colors.indigo[500]}`
    }
  },
  textWhite: {
    color: "white"
  },
  sectionHeader: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "60%"
    }
  }
}));

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <CardBase
        variant="outlined"
        liftUp
        className={classes.cardBase}
        align="left"
        data-aos="fade-up"
      >
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              Empowering cross-border traders
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
              Have a specific question about how our data applies to you? We're
              always ready to discuss how you can embed our insights into your
              programming!
            </span>
          }
          fadeUp
          align="left"
          ctaGroup={[
            <Button variant="contained" size="large">
              Contact Us
            </Button>,
            <Button variant="contained" size="large">
              FAQ
            </Button>
          ]}
          disableGutter
          className={classes.sectionHeader}
        />
      </CardBase>
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
