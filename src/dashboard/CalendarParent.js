import React from "react";
import styled from "styled-components";
import CalendarModal from "./CalendarModal";
import CalendarDemographics from "./CalendarDemographics";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const CalendarParent = ({
  newSub,
  filterBoxStartDate,
  setFilterBoxStartDate,
  filterBoxEndDate,
  setFilterBoxEndDate,
  changeYear,
  changeQuarter,
  getCurrentYear,
  open,
  tier,
  setOpenCal,
  filters
}) => {
  const classes = useStyles();

  const [openDemo, setOpenDemo] = React.useState(true);

  const handleClose = () => {
    setOpenDemo(false);
  };

  if (tier === "FREE" || tier === "EXPIRED") {
    return <CalendarModal setOpenCal={setOpenCal} />;
  } else if (open === "bar" && filters[0].selectedTable != "Users") {
    return (
      <>
        <Grid container style={{ paddingRight: "10px" }}>
          <Grid container>
            <Grid item xs={6} style={{ fontSize: "12px" }}>
              <TextField
                id="date"
                label="Start"
                type="date"
                defaultValue={filterBoxStartDate}
                value={filterBoxStartDate}
                className={classes.textField}
                style={{ margin: "2%", width: "95%" }}
                onChange={e => setFilterBoxStartDate(e.target.value)}
                InputLabelProps={{
                  // shrink: true

                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  }
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="End"
                type="date"
                name="endData"
                value={filterBoxEndDate}
                id="today"
                defaultValue={filterBoxEndDate}
                className={classes.textField}
                style={{ margin: "2%", width: "95%" }}
                onChange={e => setFilterBoxEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  }
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <MonthButtons onClick={changeQuarter("Q1")}>Q1</MonthButtons>
            <MonthButtons onClick={changeQuarter("Q2")}>Q2</MonthButtons>
            <MonthButtons onClick={changeQuarter("Q3")}>Q3</MonthButtons>
            <MonthButtons onClick={changeQuarter("Q4")}>Q4</MonthButtons>
            <YearButtons
              onClick={changeYear((getCurrentYear() - 3).toString())}
            >
              {(getCurrentYear() - 3).toString()}
            </YearButtons>
            <YearButtons
              onClick={changeYear((getCurrentYear() - 2).toString())}
            >
              {(getCurrentYear() - 2).toString()}
            </YearButtons>
            <YearButtons
              onClick={changeYear((getCurrentYear() - 1).toString())}
            >
              {(getCurrentYear() - 1).toString()}
            </YearButtons>
            <YearButtons onClick={changeYear(getCurrentYear().toString())}>
              {getCurrentYear().toString()}
            </YearButtons>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openDemo}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openDemo}>
          <CalendarDemographics
            setOpenCal={setOpenCal}
            handleClose={handleClose}
          />
        </Fade>
      </Modal>
    );
  }
};
export default CalendarParent;

const useStyles = makeStyles(theme => ({
  inputRoot: {
    fontSize: 14
  },
  labelRoot: {
    fontSize: 16,

    "&$labelFocused": {
      color: "red"
    }
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "20px"
  }
}));

const YearButtons = styled.button`
  padding: 5px;
  width: 25%;
  background-color: grey;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  border: 0.5px solid darkgrey;
  border-radius: 5px;
  opacity: 0.75;
  &:hover {
    opacity: 1
    cursor: pointer;
  }
`;
const MonthButtons = styled.button`
  padding: 5px;
  width: 25%;
  margin: 2% 0;
  background-color: silver;
  color: #212121;
  font-size: 1rem;
  font-weight: bold;
  border: 0.5px solid darkgrey;
  border-radius: 5px;
  opacity: 0.75;
  &:hover {
    opacity: 1
    cursor: pointer;
  }
`;
