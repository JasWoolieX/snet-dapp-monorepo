import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { serviceData } from "../../../constant";
import { useStyles } from "../styles";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";

const LaunchTable = ({ classes, handlePublishToBlockchain }) => {
  return (
    <Fragment>
      <Grid container className={classes.table}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableColumn}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Typography className={classes.th}>status</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography className={classes.th}>feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Typography className={classes.th}>actions</Typography>
          </Grid>
        </Grid>
        {serviceData.map(data => (
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableData} key={data.status}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography className={classes.mobileTH}>status:</Typography>
              <div>
                <DoneIcon className={classes.tickIcon} />
                <Typography className={classes.td}>{data.status}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography className={classes.mobileTH}>feedback:</Typography>
              <Typography className={classes.td}>{data.feedback}</Typography>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} className={classes.actionsColumn}>
              <Typography className={classes.mobileTH}>actions:</Typography>
              <ArrowDownIcon className={classes.downCaretIcon} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div className={classes.alertBoxBtnContainer}>
        <AlertBox
          type={alertTypes.SUCCESS}
          header="Your AI Service is Approved"
          icon={CheckCircleIcon}
          message="Please proceed to Launch to complete the final step."
        />
        <AlertBox
          type={alertTypes.WARNING}
          message="Final launch will require you to be logged into your Metamask and some ETH gas cost to activate the service."
          icon={ReportProblemIcon}
        />
        <SNETButton color="primary" variant="contained" children="Launch Service" onClick={handlePublishToBlockchain} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(LaunchTable);
