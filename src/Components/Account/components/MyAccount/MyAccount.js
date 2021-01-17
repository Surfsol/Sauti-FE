import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider
} from "@material-ui/core";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import swal from "sweetalert";

const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  changePlanButton: {
    marginTop: "-0.5em",
    float: "right"
  }
}));

const EDIT = gql`
  mutation editUserData($editUser: newEditUserInput!) {
    editUser(input: $editUser) {
      ... on DatabankUser {
        id
        email
        interest
        tier
        organization
        job_position
        country
        organization_type
        password
      }
      ... on Error {
        message
      }
    }
  }
`;

const MyAccount = props => {
  const { data, decoded, className, setPageId, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const [account, setAccount] = useState({
    id: decoded.id,
    email: decoded.email,
    interest: data.interest,
    organization: data.organization,
    job_position: data.job_position,
    country: data.country,
    tier: decoded.tier
  });

  let planName = account.tier;
  switch (planName) {
    case "FREE":
      planName = "Free Trial";
      break;
    case "PAID":
      planName = "Premium Access";
      break;
  }
  const [createUser, editUser, refetch] = useMutation(EDIT);

  const handleChange = event => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, input) => {
    event.preventDefault();
    createUser({
      variables: { editUser: input }
    });
    swal({ title: "", text: "Success!", icon: "success" });
  };

  if (editUser.loading) {
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

  if (editUser.error) {
    return <p>ERROR!</p>;
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Basic Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" color="textPrimary">
            {"E-mail: " + account.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" color="textPrimary">
            {"Subscription: " + planName}
            <Button
              onClick={() => setPageId("subscriptions")}
              variant="contained"
              color="secondary"
              size="medium"
              className={clsx(classes.changePlanButton)}
            >
              Change Plan
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Organization
          </Typography>
          <TextField
            placeholder={account.organization}
            variant="outlined"
            size="medium"
            name="organization"
            fullWidth
            type="text"
            value={account.organization}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
            default={account.email}
          >
            Job Position
          </Typography>
          <TextField
            placeholder={account.job_position}
            variant="outlined"
            size="medium"
            name="job_position"
            fullWidth
            type="text"
            value={account.job_position}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
            default={account.email}
          >
            Interest
          </Typography>
          <TextField
            placeholder={account.interest}
            variant="outlined"
            size="medium"
            name="interest"
            fullWidth
            type="text"
            value={account.interest}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Country
          </Typography>
          <TextField
            placeholder={account.country}
            variant="outlined"
            size="medium"
            name="country"
            fullWidth
            type="text"
            value={account.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item container justify="flex-start" xs={12}>
          <Button
            onClick={e => handleSubmit(e, account)}
            variant="contained"
            type="submit"
            color="primary"
            size="large"
          >
            SAVE CHANGES
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

MyAccount.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default MyAccount;
