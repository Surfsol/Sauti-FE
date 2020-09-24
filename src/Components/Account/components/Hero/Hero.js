import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { SectionHeader } from "../../../../Components/molecules";
import { Section } from "../../../../Components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    background: theme.palette.primary.main
  },
  textWhite: {
    color: "white"
  },
  title: {
    fontWeight: "bold"
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title="Account Settings"
          subtitle="Change account information and settings"
          align="left"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: "h3"
          }}
          subtitleProps={{
            className: classes.textWhite
          }}
        />
      </Section>
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
