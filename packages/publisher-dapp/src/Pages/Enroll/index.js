import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

import StyledButton from "shared/dist/components/StyledButton";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { OnboardingRoutes } from "../Onboarding/OnboardingRouter/Routes";

const selectState = state => ({
  isLoggedIn: state.user.isLoggedIn,
  orgUuid: state.organization.uuid,
  publisherTnC: state.user.publisherTnC,
});

const Enroll = ({ classes, history }) => {
  const { isLoggedIn, orgUuid, publisherTnC } = useSelector(selectState);

  useEffect(() => {
    if (isLoggedIn && (orgUuid || publisherTnC.accepted)) {
      history.push(GlobalRoutes.ONBOARDING.path);
    }
  }, [history, isLoggedIn, orgUuid, publisherTnC]);

  const handleContinue = () => {
    if (isLoggedIn) {
      return history.push(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path);
    }
    history.push(GlobalRoutes.SIGNUP.path);
  };

  return (
    <Grid container className={classes.enrollMainContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSectionContainer}>
        <Typography variant="h3">What You Need To Register</Typography>
        <Typography variant="span">Please keep these documents handy for seamless registration</Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h4">Registering as an Individual</Typography>
        <Typography variant="body2">
          If you are an individual or sole proprietor/single person business, get started by signing in with
          SingularityNET account. You’ll need to provide basic personal information, including your legal name and
          address.
        </Typography>
        <Typography variant="subtitle1" display="inline">
          Valid Documents:
        </Typography>
        <Typography variant="body2" display="inline">
          Passport, Driving Licence, National Identity Card
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.companyOrgReg}>
        <Typography variant="h4">Registering as Company Organization</Typography>
        <Typography variant="body2">
          If you’re enrolling your company organization, you’ll need to sign in with your SingularityNET account, as
          well as the following to get started:
        </Typography>
        <div>
          <Typography variant="subtitle1" display="inline">
            D-U-N-S Number:
          </Typography>
          <Typography variant="body2" display="inline">
            Your organization must have a D-U-N-S Number so that we can verify your organization’s identity and legal
            entity status. These unique nine-digit numbers are assigned by Dun & Bradstreet and are widely used as
            standard business identifiers. You can check to see if your organization already has a D-U-N-S Number and
            request one if necessary. They are free in most jurisdictions.&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.dnb.com/duns-number/get-a-duns.html">
              Learn more
            </a>
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" display="inline">
            Legal Binding Authority:
          </Typography>
          <Typography variant="body2" display="inline">
            As the person enrolling your organization in the SingularityNET Publisher, you must have the legal authority
            to bind your organization to legal agreements. You must be the organization’s owner/founder, executive team
            member, senior project lead, or have legal authority granted to you by a senior employee.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.metamask}>
        <Typography variant="h4">Metamask</Typography>
        <Typography variant="body2">
          In order to work with the publisher portal, you will need to use the Metamask plugin. It is necessary for you
          to &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://dev.singularitynet.io/docs/ai-consumers/wallet/">
            setup and install Metamask Wallet &nbsp;
          </a>
          account so that you can perform blockchain operations such as publishing the organization and services as well
          as collect AGI tokens that your AI services earns from customer purchases.
        </Typography>
        <Typography variant="body2">
          Publishing on SingularityNET platform is free, but there are minimal gas charges in ETH tokens that you will
          need to spend in order to complete certain actions on blockchain.
        </Typography>
        <ul>
          <Typography variant="subtitle1" display="inline">
            You will be required to use your Metamask Wallet to perform these actions:
          </Typography>
          <li>
            <Typography variant="body2">- Publishing your company or individual entity to the blockchain</Typography>
          </li>
          <li>
            <Typography variant="body2">
              - Collect AGI tokens that your published AI services gains from AI Marketplace users
            </Typography>
          </li>
          <li>
            <Typography variant="body2">- Publishing a new AI service </Typography>
          </li>
          <li>
            <Typography variant="body2">- Adding team members to your company’s blockchain</Typography>
          </li>
        </ul>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.website}>
        <Typography variant="h4">Website</Typography>
        <Typography variant="body2">
          Your company organization or individual entity must have a website URL that is publicly available and the
          domain name must be associated with your organization. Your company orgnaization or individual entity will
          have your website URL displayed on the AI Marketplace.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.joiningTeamMember}>
        <Typography variant="h4">Joining Team Members</Typography>
        <Typography variant="body2">
          Joining team members will be required to provide their Metamask address in order to securely gain permissions
          to company organization or individual enttiy’s blockchain. They will NOT be charged ETH gas cost to join. The
          owner of the company or individual entity will be responsible for adding team members to the blockchain.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <StyledButton btnText="continue" type="blue" onClick={handleContinue} />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Enroll);
