import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/styles";

import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useStyles } from "./styles";

const ServiceSortOptions = ({ pagination, updatePagination, fetchService }) => {
  const [activeSortItem, setActiveSortItem] = useState("default");
  const classes = useStyles();

  const handleSortChange = async event => {
  };

  return (
    <Fragment>
      <span className={classes.sortbyTxt}>Sort by:</span>
      <StyledDropdown value="value" labelTxt="select" onChange={handleSortChange} />
    </Fragment>
  );
};

export default withStyles(useStyles)(ServiceSortOptions);
