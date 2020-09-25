import React from "react";
import { useParams, Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem, Grid, Typography } from "@material-ui/core";
import { SectionAlternate, CardBase } from "../../Components/organisms";
import { Hero, General, Security, Notifications, Billing } from "./components";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";

const subPages = [
  {
    id: "general",
    href: "/account/general",
    title: "General"
  },
  {
    id: "security",
    href: "/account/security",
    title: "Security"
  },
  {
    id: "notifications",
    href: "/account/notifications",
    title: "Notifications"
  },
  {
    id: "billing",
    href: "/account/billing",
    title: "Billing Information"
  }
];

const TabPanel = props => {
  const { tier, children, value, index, ...other } = props;

  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};

const Account = ({ decoded, tier }) => {
  const classes = useStyles();

  let { pageId } = useParams();
  if (!pageId) {
    pageId = "general";
  }

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
    console.log("fetching", fetching);
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
    return <h1>ERROR!</h1>;
  }

  console.log("data", data);

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={item.href}
                    className={clsx(
                      classes.listItem,
                      pageId === item.id ? classes.listItemActive : {}
                    )}
                    disableGutters
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color="textSecondary"
                      className="menu__item"
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={"general"}>
                <General decoded={decoded} data={data.databankUser} />
              </TabPanel>
              <TabPanel value={pageId} index={"security"}>
                <Security />
              </TabPanel>
              <TabPanel value={pageId} index={"notifications"}>
                <Notifications />
              </TabPanel>
              <TabPanel value={pageId} index={"billing"}>
                <Billing />
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
