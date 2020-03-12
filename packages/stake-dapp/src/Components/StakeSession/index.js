import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
import moment from "moment";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

import IncubationProgressDetails from "./IncubationProgressDetails";
import Agreement from "./Agreement";
import InfoBox from "./InfoBox";
import Card from "./Card";
import Button from "./Button";
import { useStyles } from "./styles";
import { LoaderContent } from "../../Utils/Loader";
import { loaderActions } from "../../Services/Redux/actionCreators";
import { waitForTransaction, updateAutoRenewal } from "../../Utils/BlockchainHelper";

const StakeSession = ({
  cardDetails,
  incubationProgressDetails,
  agreementDetails,
  btnDetails,
  handleClick,
  stakeDetails,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // The default options is to be checked
  const [autoRenewal, setAutoRenewal] = useState(stakeDetails.userExist ? stakeDetails.autoRenewal : true);
  const [alert, setAlert] = useState({ type: alertTypes.ERROR, message: undefined });

  const metamaskDetails = useSelector(state => state.metamaskReducer.metamaskDetails);

  const stakeStartDate = moment.unix(stakeDetails.startPeriod).format("MMM YYYY");
  const stakeMapIndex = stakeDetails.stakeMapIndex;

  const currentTimestamp = moment().unix();

  const disableAutoRenewal = () => {
    // Check for Metamask Connection
    if (!metamaskDetails.isTxnsAllowed) {
      return true;
    }

    // Wait till the Stake Window is Opened
    if (currentTimestamp < stakeDetails.startPeriod) {
      return true;
    }

    // Check if the Stake is in Submission Phase and Not Open For external
    if (
      currentTimestamp >= stakeDetails.startPeriod &&
      currentTimestamp <= stakeDetails.submissionEndPeriod &&
      stakeDetails.openForExternal === false
    ) {
      return true;
    }

    // Check for Non Auto Renewal Period
    if (
      (currentTimestamp > stakeDetails.submissionEndPeriod &&
        currentTimestamp < stakeDetails.requestWithdrawStartPeriod) ||
      currentTimestamp > stakeDetails.endPeriod
    ) {
      return true;
    }

    return false;
  };

  const disableUserStakeActions = () => {
    // Check for Metamask Connection
    if (!metamaskDetails.isTxnsAllowed) {
      return true;
    }

    // Wait for the Stake Window to Open
    if (currentTimestamp < stakeDetails.startPeriod) {
      return true;
    }

    // Check if the Stake is in Submission Phase and Not Open For external
    if (
      currentTimestamp > stakeDetails.startPeriod &&
      currentTimestamp < stakeDetails.submissionEndPeriod &&
      stakeDetails.openForExternal === false
    ) {
      return true;
    }

    // Check for the Claim Actions
    const gracePeriod = stakeDetails.endPeriod + (stakeDetails.endPeriod - stakeDetails.requestWithdrawStartPeriod);

    if (currentTimestamp > stakeDetails.endPeriod && currentTimestamp < gracePeriod) {
      return true;
    }

    return false;
  };

  const handleAutoRenewalChange = async event => {
    // TODO - Check in case of Open Stake or Incubating - condition might change
    if (
      stakeDetails.myStake === 0 &&
      currentTimestamp > stakeDetails.startPeriod &&
      currentTimestamp < stakeDetails.submissionEndPeriod
    ) {
      setAutoRenewal(event.target.checked);
      return;
    }

    try {
      const selectedAutoRenewal = event.target.checked;

      let txHash;
      // Initiate the Auto Renewal Flag Update
      txHash = await updateAutoRenewal(metamaskDetails, stakeDetails.stakeMapIndex, selectedAutoRenewal);

      dispatch(loaderActions.startAppLoader(LoaderContent.UPDATE_STAKE_AUTO_RENEWAL));

      setAlert({ type: alertTypes.INFO, message: "Transaction is in progress" });

      await waitForTransaction(txHash);

      setAlert({ type: alertTypes.SUCCESS, message: "Transaction has been completed successfully" });

      dispatch(loaderActions.stopAppLoader());

      // set the checkbox only when the transaction is allowed otherwise revert it
      setAutoRenewal(selectedAutoRenewal);

      // TODO - Update the Auto Renewal flag in the Redux store accordingly...
    } catch (err) {
      setAlert({ type: alertTypes.ERROR, message: "Transaction has failed." });
      dispatch(loaderActions.stopAppLoader());
    }
  };

  return (
    <div className={classes.StakeSessionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">
          Stake Session - {stakeStartDate} #{stakeMapIndex}
        </Typography>
      </div>
      <div className={classes.content}>
        <IncubationProgressDetails details={incubationProgressDetails} />
        <div className={classes.cards}>
          {cardDetails.map(item => (
            <Card key={item.title} title={item.title} value={item.value} unit={item.unit} />
          ))}
        </div>
        <Agreement
          details={agreementDetails}
          autoRenewal={autoRenewal}
          handleChange={handleAutoRenewalChange}
          disableAutoRenewal={disableAutoRenewal()}
        />
        <div className={classes.infoBox}>
          <InfoBox stakeDetails={stakeDetails} />
        </div>
        <AlertBox type={alert.type} message={alert.message} />
        <Button
          details={btnDetails}
          handleClick={handleClick}
          autoRenewal={autoRenewal}
          disableUserStakeActions={disableUserStakeActions()}
        />
      </div>
    </div>
  );
};

export default StakeSession;
