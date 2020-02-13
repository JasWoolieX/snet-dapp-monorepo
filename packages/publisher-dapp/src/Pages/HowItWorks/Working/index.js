import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const HowItWorks = ({ classes }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.workingContainer}>
      <Typography variant="h2">How it works?</Typography>
      <SNETButton children="get started" color="primary" variant="contained" />
    </Grid>
  );
};

export default withStyles(useStyles)(HowItWorks);
