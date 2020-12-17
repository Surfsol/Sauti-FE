import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  colors,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  People
} from "@material-ui/core";
import Image from "../../themeStyledComponents/atoms/Image/";
import ImgMarket from "../../../assets/images/market.jpg";
import SectionHeader from "../../themeStyledComponents/molecules/SectionHeader";

const useStyles = makeStyles(theme => ({
  image: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
  }
}));

const Usecases = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src={ImgMarket}
            alt="..."
            className={classes.coverImage}
            lazy={false}
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            label="Realtime innovative data from Sauti's systems-based sampling approaches"
            title={
              <span>
                <span className="text-highlighted">Know</span> East Africa's
                Cross-border Traders
              </span>
            }
            subtitle="Leverage behavioural data from multiple mobile-based trade and market information services on both sides of the borders between Kenya, Uganda, Rwanda, and Tanzania. Our networked data pool is a rich resource for understanding the cross-border trade environment:"
            align="left"
            disableGutter
          />
          <List disablePadding>
            <ListItem data-aos="fade-up">
              <Typography variant="body1">
                What are cross-border traders' dominant value-chains
              </Typography>
            </ListItem>
            <ListItem data-aos="fade-up">
              <Typography variant="body1">
                How does trade behavior differ across gender, age and/or
                education level?
              </Typography>
            </ListItem>
            <ListItem data-aos="fade-up">
              <Typography variant="body1">
                How do cross-border trade patterns change over time?
              </Typography>
            </ListItem>
            <ListItem data-aos="fade-up">
              <Typography variant="body1">
                Which currencies do cross-border traders' exchange
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Usecases;
