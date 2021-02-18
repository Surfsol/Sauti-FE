import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {},
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  switchTitle: {
    fontWeight: 700
  },
  titleCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  planText: {
    color: "#3f51b5",
    border: "1px solid rgba(63, 81, 181, 0.5)",
    padding: "0.25em",
    borderRadius: "4px",
    textTransform: "uppercase"
  },
  buttonPadding: {
    marginTop: "1.9em"
  },
  cardSubTitle: {
    minHeight: "6em",
    display: "block"
  }
}));

export { useStyles };
