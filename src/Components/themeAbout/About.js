import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { colors, Divider } from "@material-ui/core";
import Section from "../themeStyledComponents/organisms/Section";
import { Typography } from "@material-ui/core";
import { useMediaQuery, Grid } from "@material-ui/core";
import SectionHeader from "../themeStyledComponents/molecules/SectionHeader";
import CardBase from "../themeStyledComponents/organisms/CardBase";
import Button from "@material-ui/core/Button";
import IconAlternate from "../themeStyledComponents/molecules/IconAlternate/";
import DescriptionListIcon from "../themeStyledComponents/organisms/DescriptionListIcon";
import Image from "../themeStyledComponents/atoms/Image/";
import ImgDashboard from "../../assets/images/dashboard.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5)
    }
  },
  sectionNoPaddingTop: {
    paddingTop: 0
  },
  sectionDatapoints: {
    background: colors.red[900]
  },
  shape: {
    background: theme.palette.alternate,
    borderBottomRightRadius: "50%",
    borderBottom: `1px solid ${colors.grey[200]}`
  },
  iconTitle: {
    fontWeight: 700
  }
}));

const AboutPageCover = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const history = useHistory();
  const handleContactUs = async (e, input) => {
    e.preventDefault();
    history.push("/contact");
  };

  const handleFAQ = async (e, input) => {
    e.preventDefault();
    history.push("/faqs");
  };

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
          <div className={clsx(classes.root, className)} {...rest}>
            <Grid container spacing={isMd ? 4 : 2}>
              <Grid item xs={10} data-aos="fade-up">
                <SectionHeader
                  title={
                    <span>
                      About
                      <span className="text-highlighted">
                        {" "}
                        Sauti Trade Insights
                      </span>
                    </span>
                  }
                  subtitle={
                    <span>
                      The interactive Sauti Trade Insights data portal is
                      populated through Sauti's mobile-based{" "}
                      <a href="#">Trade and Market Information Platform</a> for
                      cross-border traders in East Africa
                    </span>
                  }
                  align="left"
                  disableGutter
                />
              </Grid>
              <Grid container xs={12} sm={10}>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  data-aos="fade-up"
                >
                  <Grid xs={12} sm={2} align="center" justify="center">
                    <IconAlternate
                      fontIconClass="fa fa-mobile"
                      color={colors.red}
                    />
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <Typography
                      align="left"
                      variant="h6"
                      className={clsx(
                        classes.iconTitle,
                        "description-list-icon__title"
                      )}
                    >
                      THE DATA
                    </Typography>
                    <Typography
                      align="left"
                      className={"description-list-icon__subtitle"}
                    >
                      Sauti Trade Insights includes over 100,000 datapoints from
                      cross-border traders in Kenya, Rwanda, Uganda and
                      Tanzania. The data is compiled from over 20,000 users and
                      over 60,000 information requests on the Sauti Trade and
                      Market Information Platform.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  data-aos="fade-up"
                  style={{ paddingTop: "2em" }}
                >
                  <Grid xs={12} sm={2} align="center" justify="center">
                    <IconAlternate
                      fontIconClass="fa fa-bar-chart"
                      color={colors.red}
                    />
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <Typography
                      align="left"
                      variant="h6"
                      className={clsx(
                        classes.iconTitle,
                        "description-list-icon__title"
                      )}
                    >
                      THE DASHBOARD
                    </Typography>
                    <Typography
                      align="left"
                      className={"description-list-icon__subtitle"}
                    >
                      The Sauti Trade Insights dashboard allows you to interact
                      with our cross-border trade data through bar charts and
                      time-series line graphs over monthly, quarterly, and
                      yearly periods. You can also filter and compare different
                      datasets, and download the data with Premium Access.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  data-aos="fade-up"
                  style={{ paddingTop: "2em" }}
                >
                  <Grid xs={12} sm={2} align="center" justify="center">
                    <IconAlternate
                      fontIconClass="fa fa-users"
                      color={colors.red}
                    />
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <Typography
                      align="left"
                      variant="h6"
                      className={clsx(
                        classes.iconTitle,
                        "description-list-icon__title"
                      )}
                    >
                      THE SAUTI TEAM
                    </Typography>
                    <Typography
                      align="left"
                      className={"description-list-icon__subtitle"}
                    >
                      Sauti is a women-led social enterprise based in Kenya.
                      Together, our team synthesises a wealth of experience
                      across the agricultural trade and development space. Our
                      combined experience spans: 10 years of technical
                      experience in trade and regional integration, 20 years of
                      business management and operations experience, and 20
                      years of economic justice and advocacy.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Section>
      </div>
      <Section className={classes.pagePaddingTop}>
        <div className={clsx(classes.root, className)} {...rest}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos="fade-up">
              <SectionHeader
                title={<span className="text-highlighted">Our Mission</span>}
                subtitle={
                  <span>
                    To empower “low technology” environments by reducing the
                    barrier to information through scalable, sustainable, and
                    human-centred research and technology solutions.
                  </span>
                }
                align="center"
                disableGutter
              />
            </Grid>
          </Grid>
        </div>
        <div
          className={clsx(classes.root, className)}
          {...rest}
          style={{ paddingTop: "6em" }}
        >
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
                title={<span>More Information</span>}
                subtitle={
                  <span>
                    Sauti Trade Insights is updated in real-time from the Sauti
                    Trade and Market Information Platform. The Sauti Trade
                    Insights dashboard is under constant review in order to
                    ensure easy navigation and use.
                  </span>
                }
                ctaGroup={[
                  <Button
                    onClick={handleContactUs}
                    variant="contained"
                    color="primary"
                    href="contact"
                  >
                    Contact Us
                  </Button>,
                  <Button
                    onClick={handleFAQ}
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    FAQ
                  </Button>
                ]}
                align="left"
                disableGutter
                titleVariant="h4"
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
      </Section>
    </div>
  );
};

export default AboutPageCover;
