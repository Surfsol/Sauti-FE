import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider
} from "@material-ui/core";

import SectionHeader from "../themeStyledComponents/molecules/SectionHeader";
import Image from "../themeStyledComponents/atoms/Image/";
import Section from "../themeStyledComponents/organisms/Section";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import swal from "sweetalert";
import imgContact from "../../assets/images/SautiBusia_62_2.jpg";
import { fromNav } from "../../Components/redux-actions/fromNavAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative"
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0
    }
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "47vw",
      maxWidth: 740,
      height: "100%",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0
    }
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      maxWidth: "100%",
      height: "100%"
    }
  },
  content: {
    flex: "0 0 100%",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      flex: "0 0 50%",
      maxWidth: "50%"
    }
  }
}));

const NodeMail = gql`
  mutation contactEmail($email: emailContactInput!) {
    emailByContact(input: $email) {
      email
    }
  }
`;

const ContactPageCover = () => {
  const [messageC, setMessage] = useState({
    nature: "Please Select an Option"
  });
  console.log("messageC.natuer", messageC.nature);
  const [createMail] = useMutation(NodeMail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fromNav(true));
  }, []);

  const handleSubmit = async (event, input) => {
    const { email, message } = messageC;
    event.preventDefault();
    if (email === "" || message === "") {
      swal({
        title: "Error",
        text: "Please include your email and a message.",
        icon: "warning",
        dangerMode: true
      });
    } else {
      const sentEmail = await createMail({
        variables: { email: input }
      });
      setMessage({ name: "", email: "", message: "" });
      swal({ title: "Success", text: "Message Sent!", icon: "success" });
      setMessage({ nature: "Please Select an Option" });
    }
  };

  function handleChange(e) {
    setMessage({ ...messageC, [e.target.name]: e.target.value });
  }

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image src={imgContact} alt="Contact" className={classes.image} />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Contact us for anything"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="center"
            />
            <div className={classes.form}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Full name
                  </Typography>
                  <TextField
                    placeholder="Your full name"
                    variant="outlined"
                    size="medium"
                    name="name"
                    fullWidth
                    type="text"
                    onChange={handleChange}
                    value={messageC.name}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    E-mail
                  </Typography>
                  <TextField
                    placeholder="Your e-mail address"
                    variant="outlined"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                    onChange={handleChange}
                    value={messageC.email}
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Nature of Inquiry
                  </Typography>

                  <select
                    style={{
                      width: "100%",
                      height: "40%",
                      marginTop: "5%",
                      paddingBottom: "1.2%",
                      border: "none",
                      fontSize: "1.6rem",
                      borderBottom: "1px solid black"
                    }}
                    defaultValue="-1"
                    name="nature"
                    value={messageC.nature}
                    onChange={handleChange}
                  >
                    <option hidden value="-1"></option>
                    <option value={"SALES"}>SALES</option>
                    <option value={"DATA"}>DATA</option>
                    <option value={"TECHNICAL"}>TECHNICAL</option>
                    <option value={"OTHER"}>OTHER</option>
                  </select>
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Message
                  </Typography>
                  <TextField
                    placeholder="Your question about our services"
                    variant="outlined"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={messageC.message}
                  />
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={event => handleSubmit(event, messageC)}
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageCover;
