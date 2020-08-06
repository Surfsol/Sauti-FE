import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useMediaQuery, Grid } from "@material-ui/core";
import LearnMoreLink from "./atoms/LearnMoreLink";
import SectionHeader from "./molecules/SectionHeader";
import CardBase from "./organisms/CardBase";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    maxWidth: 50
  }
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={6} data-aos="fade-up">
          <SectionHeader
            title="Demographic, Market, and Trade insights for East Africa's cross-border traders"
            subtitle="Our mission is to enrich the understanding of East Africa's cross-border trade environment with data up-to-date data and and analyses"
            align="left"
            label="95000+ data points"
            ctaGroup={[
              <LearnMoreLink
                title="See all data series"
                href="#"
                variant="h6"
              />
            ]}
            disableGutter
          />
        </Grid>
        <Grid item xs={6} data-aos="fade-up">
          <CardBase variant="outlined" align="left">
            <Typography variant="h4">Latest Analysis</Typography>
            <Typography variant="h6">
              COVID-19's Impact on Goods Traded in East Africa
            </Typography>

            <Typography gutterBottom="True">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              gravida mauris a volutpat suscipit. Nulla sagittis pulvinar lorem
              sit amet dictum. Nunc dapibus dolor quis turpis rhoncus tempor.
              Sed nec nibh aliquam, posuere ante vel, accumsan nunc. Sed non
              rutrum mauris. Aliquam erat volutpat. Aenean elit orci.
            </Typography>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired
};

export default Partners;
