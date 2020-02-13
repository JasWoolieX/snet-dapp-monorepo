import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { relatedContentData } from "./content";
import Working from "./Working";
import RelatedContent from "./RelatedContent";
import { useStyles } from "./styles";

const HowItWorks = ({ classes }) => {
  return (
    <Grid container className={classes.howItWorksContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSection}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2">A Comprehensive AI Publishing Infrastructure</Typography>
          <Typography className={classes.description}>
            <span>
              Publishing AI services in today’s online world is not an easy task. Thats why we made it easier for you.
            </span>
            <span>
              Our Publishing infrastructure provides both the central hub for creating, editing, and managing your AI
              services, and the tools to launch everywhere.
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} />
      </Grid>
      <Working />
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.relatedContentContainer}>
        <Typography variant="h2">Related content you might like</Typography>
        <div className={classes.cardGroup}>
          {relatedContentData.map(item => (
            <RelatedContent
              key={item.cardTitle}
              cardTitle={item.cardTitle}
              cardMedia={item.cardMedia}
              cardDescription={item.cardDescription}
              cardAction={item.cardAction}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(HowItWorks);
