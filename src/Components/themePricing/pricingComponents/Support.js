import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery, colors } from "@material-ui/core";
import LearnMoreLink from "../../themeStyledComponents/atoms/LearnMoreLink";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";

const useStyles = makeStyles(theme => ({
  root: {},
  gridItemBorder: {
    [theme.breakpoints.up("md")]: {
      borderRight: `1px solid ${colors.grey[200]}`
    }
  }
}));

const Support = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} justify="center">
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title="University and Customized Plans"
            titleVariant="h5"
            subtitle="Are you part of a research institution. Request a consultation to customize a plan."
            subtitleVariant="body1"
            subtitleColor="textPrimary"
            ctaGroup={[<LearnMoreLink title="Contact us" />]}
            disableGutter
          />
        </Grid>
      </Grid>
    </div>
  );
};

Support.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Support;
