import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";

import StatusBanner from "./StatusBanner";
import RelatedLinks from "./RelatedLinks";
import { useStyles } from "./styles";

const OrgSetupStatus = ({ classes }) => {
  return (
    <Grid container spacing={24} className={classes.OrgSetupStatusContainer}>
      <Grid item xs={12} sm={3} md={3} lg={3} className={classes.titleContainer}>
        <Typography variant="h3"> My AI Apps</Typography>
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9} className={classes.descriptionContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.description}>
          <Typography variant="h5">Welcome to the AI Publisher</Typography>
          <Typography>With this pubilsher portal, you can publish and manage yourAI services. You will be able to edit your services, demos, and tutorial content.</Typography>
        </Grid>
        <StatusBanner />
        <RelatedLinks />
      </Grid>
    </Grid>    
  );
};

export default withStyles(useStyles)(OrgSetupStatus);