import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, colors } from "@material-ui/core";
import Image from "../../themeStyledComponents/atoms/Image/";
import ImgDashboard2 from "../../../assets/images/dashboard2.png";

import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";
import IconAlternate from "../../themeStyledComponents/molecules/IconAlternate/";
import DescriptionListIcon from "../../themeStyledComponents/organisms/DescriptionListIcon";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  placementGrid: {
    display: "flex"
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`
  },
  coverImage: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
  },
  bottomSpacing: {
    marginBottom: "3em"
  }
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const history = useHistory();
  const handleSignUp = async (e, input) => {
    e.preventDefault();
    history.push("/signup");
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4} className={clsx(classes.bottomSpacing)}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src={ImgDashboard2}
            alt="..."
            className={classes.coverImage}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Evidence-based insights{" "}
                    <span className="text-highlighted__primary">
                      with unprecedented granular data.
                    </span>
                  </span>
                }
                align="left"
                fadeUp
                disableGutter
                titleVariant="h1"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-filter"
                color={colors.blue}
              />
            }
            title="Multiple Filters"
            subtitle="Refine your analysis with sub-set filters"
            align="center"
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-less-than-equal"
                color={colors.blue}
              />
            }
            title="Compare Datasets"
            subtitle="Rapid on-the-fly comparisons to tailor your research"
            align="center"
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          data-aos="fade-up"
        >
          <DescriptionListIcon
            icon={
              <IconAlternate
                fontIconClass="fas fa-download"
                color={colors.blue}
              />
            }
            title="Download Data"
            subtitle="Download the data for more in-depth statistical analyses"
            align="center"
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <Button
            onClick={handleSignUp}
            variant="contained"
            size="large"
            color="primary"
            href="pricing"
          >
            Sign Up Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Features;
