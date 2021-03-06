import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const Agreement = ({ details, autoRenewal, handleChange, disableAutoRenewal }) => {
  const classes = useStyles();
  if (details) {
    return (
      <div className={classes.checkboxContent}>
        <FormControlLabel
          control={
            <Checkbox
              checked={autoRenewal === undefined ? true : autoRenewal}
              disabled={disableAutoRenewal}
              onClick={handleChange}
              color="primary"
            />
          }
          label={details.label}
        />
        <Typography>{details.description}</Typography>
      </div>
    );
  }

  return null;
};

export default Agreement;
