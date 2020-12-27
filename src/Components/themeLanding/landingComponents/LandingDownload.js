import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Button, colors } from "@material-ui/core";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";
import CardBase from "../../themeStyledComponents/organisms/CardBase";
import imgNewsletterBG from "../../../assets/images/newsletter-bg.svg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    background: colors.indigo[500],
    [theme.breakpoints.up("md")]: {
      background: `url(${imgNewsletterBG}) no-repeat 150% 50% ${colors.indigo[500]}`
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

  const history = useHistory();
  const handlefaqs = async (e, input) => {
    e.preventDefault();
    history.push("/faqs");
  };

  const handleContact = async (e, input) => {
    e.preventDefault();
    history.push("/contact");
  };

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
              Have a specific question about how our data applies to you? Would
              you like to request a demo? We're always ready to discuss how you
              can embed our insights into your programming or research!
            </span>
          }
          fadeUp
          align="left"
          ctaGroup={[
            <Button onClick={handleContact} variant="contained" size="large">
              Contact Us
            </Button>,
            <Button onClick={handlefaqs} variant="contained" size="large">
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
