import React from "react";
import CsvDownloader from "react-csv-downloader";
import DownloadModal from "../dashboard/DownloadModal";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import ClipboardJS from "clipboard";
import swal from "sweetalert";

//need to bring in data, for 109
const SocialMedia = () => {
  const access = useSelector(state => state.tierReducer.access);
  const chartDataReducer = useSelector(
    state => state.chartDataReducer.chart.chart
  );
  let csvData;
  let keys;
  let sampleSize;
  if (chartDataReducer) {
    csvData = chartDataReducer.dataStructure;
    keys = chartDataReducer.keys;
    sampleSize = chartDataReducer.sampleSize;
  }

  const classes = useStyles();

  const socialMediaLink = useHistory().location.search;

  const barSelector = useSelector(
    state => state.barDownloadReducer.barDownload
  );
  const columnsRedux = barSelector.columns;
  const makeValuesRedux = barSelector.makeValues;
  const fileName = barSelector.fileName;
  const suffix = barSelector.suffix;
  const track = barSelector.track;

  function openTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=https://www.databank.sautiafrica.org/data${socialMediaLink}`,
      "",
      "width=600,height=600"
    );
  }

  function openFace() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=https://www.databank.sautiafrica.org/data${socialMediaLink}&amp;src=sdkpreparse`,
      "",
      "width=600,height=600"
    );
  }

  const clipboard = new ClipboardJS(".urlclip", {
    text: function() {
      return document.location.href;
    }
  });
  clipboard.on("success", function(e) {
    swal({ title: "", text: "copied url!", icon: "success" });
  });

  if (columnsRedux !== undefined) {
    return (
      <>
        {access !== "free" ? (
          <>
            <Grid item style={{ cursor: "pointer" }}>
              <CsvDownloader
                track={track}
                datas={makeValuesRedux}
                columns={columnsRedux}
                filename={fileName}
                suffix={suffix}
              >
                <Tooltip
                  title="Download"
                  arrow
                  classes={{ tooltip: classes.customWidth }}
                >
                  <GetAppIcon className={classes.socialMediaLink}></GetAppIcon>
                </Tooltip>
              </CsvDownloader>
            </Grid>

            <Grid item className="urlclip">
              <Tooltip
                title="Copy URL"
                arrow
                classes={{ tooltip: classes.customWidth }}
              >
                <LinkIcon className={classes.socialMediaLink}></LinkIcon>
              </Tooltip>
            </Grid>
            <Grid item>
              <a
                // className="twitter-share-button"
                onClick={() => openTwitter()}
              >
                <Tooltip
                  title="Twitter"
                  arrow
                  classes={{ tooltip: classes.customWidth }}
                >
                  <TwitterIcon
                    className={classes.socialMediaLink}
                  ></TwitterIcon>
                </Tooltip>
              </a>
            </Grid>

            <Grid item>
              <a onClick={() => openFace()}>
                <Tooltip
                  title="Facebook"
                  arrow
                  classes={{ tooltip: classes.customWidth }}
                >
                  <FacebookIcon
                    className={classes.socialMediaLink}
                  ></FacebookIcon>
                </Tooltip>
              </a>
            </Grid>
          </>
        ) : (
          <>
            <DownloadModal />

            <Grid item className="urlclip">
              <Tooltip
                title="Copy URL"
                arrow
                classes={{ tooltip: classes.customWidth }}
              >
                <LinkIcon className={classes.socialMediaLink}></LinkIcon>
              </Tooltip>
            </Grid>
            <Grid item>
              <a onClick={() => openTwitter()}>
                <Tooltip
                  title="Twitter"
                  arrow
                  classes={{ tooltip: classes.customWidth }}
                >
                  <TwitterIcon
                    className={classes.socialMediaLink}
                  ></TwitterIcon>
                </Tooltip>
              </a>
            </Grid>
            <Grid item>
              <a onClick={() => openFace()}>
                <Tooltip
                  title="Facebook"
                  arrow
                  classes={{ tooltip: classes.customWidth }}
                >
                  <FacebookIcon
                    className={classes.socialMediaLink}
                  ></FacebookIcon>
                </Tooltip>
              </a>
            </Grid>
          </>
        )}
      </>
    );
  } else {
    return <></>;
  }
};
export default SocialMedia;

const useStyles = makeStyles(theme => ({
  download: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "20px"
  },
  customWidth: {
    fontSize: "16px"
  },
  socialMediaLink: {
    fontSize: "2.5rem",
    color: "rgb(159, 28, 15)",
    cursor: "pointer",
    opacity: "0.75",
    "&:hover": {
      opacity: 1
    }
  }
}));
