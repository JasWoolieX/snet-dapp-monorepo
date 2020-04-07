import React from "react";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import { useStyles } from "./styles";

const ClaimsSuccessPopup = ({ classes, show, channelIdList, agiClaimed, escrowBalance, handleClose }) => {
  return (
    <Modal disableBackdropClick open={show}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={<Typography variant="h6">Claims Success Receipt</Typography>}
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <div>
          {channelIdList.map(channelId => (
            <span key={channelId}>{channelId}</span>
          ))}
        </div>
        <div className={classes.greyBox}>
          <div>
            <div className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <p>AGI Claimed</p>
            </div>
            <p>
              {agiClaimed}
              <span>AGI</span>
            </p>
          </div>
          <div>
            <div className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <p>Escrow Balance</p>
            </div>
            <p>
              {escrowBalance}
              <span>AGI</span>
            </p>
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default withStyles(useStyles)(ClaimsSuccessPopup);