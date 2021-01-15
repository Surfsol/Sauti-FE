import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useMediaQuery, Grid } from "@material-ui/core";
import LearnMoreLink from "../../themeStyledComponents/atoms/LearnMoreLink/";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";
import CardBase from "../../themeStyledComponents/organisms/CardBase";
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
          <CardBase variant="outlined" align="left">
            <Typography variant="h4" style={{ paddingBottom: "8px" }}>
              Demographic, Market, and Trade insights for East Africa's
              cross-border traders
            </Typography>
            <Typography
              variant="h6"
              style={{ paddingTop: "8px", paddingBottom: "8px" }}
            >
              Cross-border trade is notoriously difficult to sample by
              traditional methods. We provide near-realtime crowdsourced data to
              enrich analyst's understanding of East Africa's cross-border trade
              environment.
            </Typography>
            <LearnMoreLink
              title="More about our data"
              href="faqs"
              variant="h6"
              style={{ marginTop: "8px" }}
            />
          </CardBase>
        </Grid>
        <Grid item xs={6} data-aos="fade-up">
          <SectionHeader
            title="How has cross-border trade behaviour changed during the COVID-19 pandemic?"
            subtitle="This report presents key findings on the economic impacts of COVID-19 on East Africa's traders. We identify a regional shift of market sourcing from cross-border destinations to local destinations, likely a reflection of national restrictions on cross-border movements."
            align="left"
            label="Latest Analysis"
            ctaGroup={[
              <Button
                href="https://sautiafrica.org/sauti-trade-insights-covid-19-bulletin/"
                target="_blank"
                variant="contained"
                color="primary"
              >
                Read More
              </Button>
            ]}
            disableGutter
          />
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
