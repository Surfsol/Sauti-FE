import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import CardBase from "../themeStyledComponents/organisms/CardBase";
import SectionHeader from "../themeStyledComponents/molecules/SectionHeader";
import Section from "../themeStyledComponents/organisms/Section";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    "& .description-cta__button-group": {
      flexWrap: "nowrap"
    }
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5)
    }
  },
  fontWeightBold: {
    fontWeight: "bold"
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(5, 0)
    }
  },
  textWhite: {
    color: "white"
  },
  cardHighlighted: {
    background: theme.palette.primary.main
  },
  checkBox: {
    background: "transparent",
    borderRadius: 0,
    width: 30,
    height: 30
  },
  listTitle: {
    fontWeight: 700
  },
  underlined: {
    textDecoration: "underline"
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4)
    },
    "& p": {
      marginBottom: "1em"
    }
  }
}));

const CompanyTerms = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <SectionHeader
              title="Frequently Asked Questions"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: "textPrimary"
              }}
              subtitleProps={{
                variant: "body1",
                color: "textPrimary"
              }}
            />
            <SectionHeader
              title="Data Questions"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: "textPrimary"
              }}
              subtitleProps={{
                variant: "body1",
                color: "textPrimary"
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    How is data in Sauti Trade Insights collected?
                  </span>
                  <p>
                    Sauti Trade Insights leverages the behavioral user data of
                    Sauti’s regional network of mobile-based market and trade
                    information platform.
                  </p>
                  <p>
                    Given Sauti’s embeddedness with East Africa’s cross-border
                    traders, the data from the mobile-based platform is a
                    resource that is innovating past typical data collection
                    obstacles for research related to East Africa’s cross-border
                    traders.
                  </p>
                  <p>
                    Through a combination of platform usage (requests for
                    information) and user provided demographic information
                    through the platform, Sauti is able to generate wide-scale
                    and reliably proximate insights related to cross-border
                    business activity in the region. Learn more about Sauti East
                    Africa’s methodology{" "}
                    <a href="https://www.researchgate.net/publication/347473284_Innovating_Past_Data_Collection_Obstacles_for_East_Africa's_Women_Cross-_Border_Traders_Evidence_from_Sauti_East_Africa">
                      here
                    </a>
                    .
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    What data series are included in Sauti Trade Insights?
                  </span>
                  <p>
                    Sauti Trade Insights consists of the following data
                    collected from cross-border traders across East Africa:
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    How often is data in Sauti Trade Insights updated?
                  </span>
                  <p>
                    Data is updated daily with the newest data from Sauti’s
                    network of information platforms.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    How large is the sample represented in Sauti Trade Insights?
                  </span>
                  <p>
                    Sauti’s market and trade information platform has
                    facilitated over 43,000 information requests from 12,000
                    users throughout East Africa. Sauti Trade Insights consists
                    of information gathered from these users which results in
                    over 150,000 data points.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    What geographic area does Sauti Trade Insights cover?
                  </span>
                  <p>
                    Sauti Trade Insights consists of data from cross-border
                    traders across East Africa, including the following
                    countries: Kenya, Rwanda, Uganda, and Tanzania.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    Who can I contact if I have more questions about Sauti Trade
                    Insights content?
                  </span>
                  <p>
                    Contact us through our contact form{" "}
                    <a href="contact">here</a>
                  </p>
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Technical Questions"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: "textPrimary"
              }}
              subtitleProps={{
                variant: "body1",
                color: "textPrimary"
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    I want to analyse the data from Sauti Trade Insights
                    further, can I download it?
                  </span>
                  <p>
                    Users with a{" "}
                    <span className={classes.underlined}>Premium Account</span>{" "}
                    can download any data from Sauti Trade Insights by first
                    choosing the data they are interested in and then clicking
                    the download icon on the top right of the dashboard.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    How do I use the filter and compare features in Sauti Trade
                    Insights interactive dashboard?
                  </span>
                  <p>
                    First, choose the data series you are interested in and then
                    click the Filter button to filter the results by another
                    data series. Note that in the Free Trial you can only add
                    one filter option.
                  </p>
                  <p>
                    With a{" "}
                    <span className={classes.underlined}>Premium Account</span>{" "}
                    you can also compare data series by selecting the first data
                    series you are interested in, and then clicking the Compare
                    Data button to choose which data series you would like to
                    compare it to.{" "}
                  </p>
                  <p>
                    Once you have selected your data series, filtering and
                    comparing options, click Apply to render the new datasets.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    Can I view data through multiple charts and visualisations
                    in the interactive dashboard?
                  </span>
                  <p>
                    By default, data is represented using bar charts on the
                    interactive dashboard. However, certain data points such as
                    those under Trade and Business Insights can also be viewed
                    using a line graph which shows the data over time. Premium
                    users can change the data range for their selected data.
                  </p>
                  <p>
                    To toggle between the line graph and bar chart, users can
                    click the chart icon on the top left of the dashboard.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    Can I share the data and visualization?
                  </span>
                  <p>
                    To share data on the dashboard, we offer several options. At
                    the top right of the dashboard, you can click icons to copy
                    the link to the data, or share the link on Facebook or
                    Twitter. Note that users are required to login before
                    viewing these links.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    Who can I contact if I have more questions about how to use
                    the interactive dashboard?
                  </span>
                  <p>
                    Contact us through our contact form{" "}
                    <a href="contact">here</a>
                  </p>
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Sales Questions"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: "textPrimary"
              }}
              subtitleProps={{
                variant: "body1",
                color: "textPrimary"
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    How do I gain access to Sauti Trade Insights?
                  </span>
                  <p>
                    Sign up to access Sauti Trade Insights{" "}
                    <a href="pricing">here</a>
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    What subscription options does Sauti Trade Insights offer?
                  </span>
                  <p>
                    Currently, Sauti Trade Insights offers two plans: a two-week
                    Free Trial with limited access to our data and interactive
                    features, and a Premium Account with full access for $60 USD
                    / month. Find out more about our plans{" "}
                    <a href="pricing">here</a>.
                  </p>
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <Typography variant="body1" color="textPrimary">
                  <span className={classes.listTitle}>
                    Who can I contact if I have more questions about Sauti Trade
                    Insights subscription options?
                  </span>
                  <p>
                    Contact us through our contact form{" "}
                    <a href="contact">here</a>
                  </p>
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="Have a question?"
                    subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you."
                    ctaGroup={[
                      <Button variant="contained" href="contact">
                        Contact us
                      </Button>
                    ]}
                    disableGutter
                    align="left"
                    titleProps={{
                      variant: "subtitle1",
                      className: clsx(classes.textWhite, classes.fontWeightBold)
                    }}
                    subtitleProps={{
                      variant: "body2",
                      className: classes.textWhite
                    }}
                  />
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Divider />
    </div>
  );
};

export default CompanyTerms;
