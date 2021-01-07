import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem, Grid, Typography } from "@material-ui/core";
import { SectionAlternate, CardBase } from "../../Components/organisms";
import { Hero, MyAccount, Security } from "./components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import swal from "sweetalert";

const TabPanel = props => {
  const { tier, children, value, index, ...other } = props;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const Account = ({ decoded, tier }) => {
  const [pageId, setPageId] = useState("myaccount");
  const classes = useStyles();

  useEffect(() => {
    if (decoded.tier === "FREE") {
      setPageId("subscriptions");
    }
  }, []);

  const history = useHistory();
  const GET_SUBSCRIPTION_ID = gql`
    query($userEmail: String!) {
      databankUser(input: { email: $userEmail }) {
        id
        email
        country
        organization
        interest
        job_position
        subscription_id
        p_next_billing_time
        paypal_plan
      }
    }
  `;

  const { loading: fetching, error: err, data, refetch } = useQuery(
    GET_SUBSCRIPTION_ID,
    {
      variables: { userEmail: decoded.email }
    }
  );

  if (fetching) {
    return (
      <div className="loader-container">
        <Loader
          className="loader"
          type="Oval"
          color="#708090"
          width={100}
          timeout={12000}
        />
      </div>
    );
  }

  if (err) {
    history.push("/");
    swal({
      title: "Error",
      text: "Network Error, unable to load.",
      icon: "warning",
      dangerMode: true
    });
    return <h1>ERROR!</h1>;
  }

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                <ListItem
                  key="myaccount"
                  onClick={() => setPageId("myaccount")}
                  className={clsx(
                    classes.listItem,
                    pageId === "myaccount" ? classes.listItemActive : {}
                  )}
                  disableGutters
                >
                  <Typography
                    variant="subtitle1"
                    noWrap
                    color="textSecondary"
                    className="menu__item"
                  >
                    My Account
                  </Typography>
                </ListItem>

                <ListItem
                  key="subscriptions"
                  onClick={() => setPageId("subscriptions")}
                  className={clsx(
                    classes.listItem,
                    pageId === "subscriptions" ? classes.listItemActive : {}
                  )}
                  disableGutters
                >
                  <Typography
                    variant="subtitle1"
                    noWrap
                    color="textSecondary"
                    className="menu__item"
                  >
                    Subscriptions
                  </Typography>
                </ListItem>
                <ListItem
                  className={clsx(classes.listItem)}
                  onClick={() => {
                    window.location = "/contact";
                  }}
                  disableGutters
                >
                  <Typography
                    variant="subtitle1"
                    noWrap
                    color="textSecondary"
                    className="menu__item"
                  >
                    Contact Us
                  </Typography>
                </ListItem>
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={"myaccount"}>
                <MyAccount
                  decoded={decoded}
                  data={data.databankUser}
                  setPageId={setPageId}
                />
              </TabPanel>
              <TabPanel value={pageId} index={"subscriptions"}>
                <Security />
              </TabPanel>
            </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};

export default Account;

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  section: {
    "& .section-alternate__content": {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: "relative",
      zIndex: 1
    },
    "& .card-base__content": {
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3)
      }
    }
  },
  menu: {
    height: "auto"
  },
  list: {
    display: "inline-flex",
    overflow: "auto",
    flexWrap: "nowrap",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3)
    }
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: "2px solid transparent"
    }
  },
  listItemActive: {
    [theme.breakpoints.up("md")]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`
    },
    "& .menu__item": {
      color: theme.palette.text.primary
    }
  }
}));
