import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import swal from "sweetalert";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const EDIT = gql`
  mutation editUserData($resetPassword: newEditUserInput!) {
    resetPassword(input: $resetPassword) {
      ... on DatabankUser {
        id
        email
        password
      }
      ... on Error {
        message
      }
    }
  }
`;

const ResetPasswordFinalStyles = styled.div``;

const useStyles = makeStyles(theme => ({
  inputRoot: {
    fontSize: 20
  },
  labelRoot: {
    fontSize: 20,
    color: "black",
    "&$labelFocused": {
      color: "black"
    }
  },
  labelFocused: {},
  button: {
    fontFamily: "Montserrat",
    margin: "2vw",
    height: "3rem",
    width: "18rem",
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#eb5e52",
    background:
      "linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6))",
    border: "2px solid #eb5e52",
    textDecoration: "none",
    transition: "0.5s ease",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      color: "#ffff",
      background: "#eb5e52"
    }
  },
  notMatched: {
    color: "red",
    fontSize: "2rem"
  },
  match: {
    display: "none"
  }
}));

const ResetPasswordFinal = props => {
  const [password, setPassword] = useState({
    password: "",
    confirm: ""
  });
  const [noMatch, setNoMatch] = useState(false);
  const [gettingAccount] = useMutation(EDIT);
  const history = useHistory();
  const classes = useStyles();

  const handleChange = event => {
    event.preventDefault();
    setPassword({
      ...password,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password.confirm === password.password) {
      setNoMatch(false);
      await gettingAccount({
        variables: {
          resetPassword: {
            id: props.props.id,
            email: props.props.email,
            password: password.password
          }
        }
      });
      localStorage.clear();
      swal({ title: "", text: "Password has been changed!", icon: "success" });
      history.push("/login");
    } else {
      setNoMatch(true);
    }
  };

  return (
    <ResetPasswordFinalStyles>
      <form className={classes.root} validate onSubmit={e => handleSubmit(e)}>
        <TextField
          required
          variant="outlined"
          placeholder="********"
          margin="normal"
          fullWidth
          size="large"
          id="password"
          type="password"
          label="Password"
          name="password"
          autoComplete="Password"
          autoFocus
          onChange={handleChange}
          value={password.password}
          InputProps={{ classes: { root: classes.inputRoot } }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused
            }
          }}
        />
        <TextField
          required
          variant="outlined"
          placeholder="********"
          margin="normal"
          fullWidth
          size="large"
          id="confirm"
          type="password"
          label="Confirm Password"
          name="confirm"
          autoComplete="Password"
          autoFocus
          onChange={handleChange}
          value={password.confirm}
          InputProps={{ classes: { root: classes.inputRoot } }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused
            }
          }}
        />
        <button
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Change Password
        </button>
        <div className={noMatch ? classes.notMatched : classes.match}>
          Password and Confirm Password must match.
        </div>
      </form>
    </ResetPasswordFinalStyles>
  );
};

export default ResetPasswordFinal;
