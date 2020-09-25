import React from "react";
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

const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  }
}));

const General = props => {
  const { data, decoded, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Basic Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            // className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            placeholder={decoded.email}
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            // className={classes.inputTitle}
          >
            Subscription Level
          </Typography>
          <TextField
            placeholder={decoded.tier}
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
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
            placeholder={data.organization}
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
            default={decoded.email}
          >
            Job Position
          </Typography>
          <TextField
            placeholder={data.job_position}
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
            default={decoded.email}
          >
            Interest
          </Typography>
          <TextField
            placeholder={data.interest}
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Bio
          </Typography>
          <TextField
            placeholder="Your bio"
            variant="outlined"
            name="bio"
            fullWidth
            multiline
            rows={4}
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <Divider />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Country
          </Typography>
          <TextField
            placeholder={data.country}
            variant="outlined"
            size="medium"
            name="country"
            fullWidth
            type="text"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            City
          </Typography>
          <TextField
            placeholder="City"
            variant="outlined"
            size="medium"
            name="city"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Full Address
          </Typography>
          <TextField
            placeholder="Your address"
            variant="outlined"
            size="medium"
            name="address"
            fullWidth
            type="text"
          />
        </Grid> */}
        <Grid item container justify="flex-start" xs={12}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="large"
          >
            save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default General;
