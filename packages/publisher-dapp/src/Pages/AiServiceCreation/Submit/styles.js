export const useStyles = MUITheme => ({
  submitContainer: {
    width: 845,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 25px",
    },
  },
  box: {
    borderRadius: 4,
    marginBottom: 27,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& > h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      fontWeight: 400,
      lineHeight: "50px !important",
    },
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  wrapper: { padding: "16px 24px 42px" },
  submitDescription: {
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "24px",
  },
  reviewProcessDescription: {
    padding: " 16px 21px 22px",
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "24px",
  },
  metamaskAddText: {
    padding: "31px 0 16px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    letterSpacing: 0.29,
    lineHeight: "20px",
  },
  commentField: { padding: "32px 0 0" },
  btnContainer: {
    marginTop: 12,
    display: "flex",
    justifyContent: "center",
    "& button": {
      "&:last-of-type": {
        marginLeft: 30,
        [MUITheme.breakpoints.down("xs")]: {
          marginTop: 15,
          marginLeft: 0,
        },
      },
    },
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
  table: {
    padding: "0 21px",
    "& > div": { display: "flex" },
  },
  tableColumn: {
    [MUITheme.breakpoints.down("xs")]: { display: "none !important" },
  },
  th: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 13,
    textTransform: "uppercase",
    lineHeight: "16px",
  },
  tableData: {
    padding: "28px 0",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.grey,
    "& > div": {
      "& > div": { display: "flex" },
    },
    "& div": {
      [MUITheme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
  td: {
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "21px",
  },
  mobileTH: {
    display: "none",
    paddingRight: 10,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 13,
    textTransform: "uppercase",
    [MUITheme.breakpoints.down("xs")]: { display: "flex" },
  },
  tickIcon: {
    padding: "0 12px 0 8px",
    color: MUITheme.palette.success.main,
  },
  hourglassIcon: {
    padding: "0 17px 0 8px",
    color: MUITheme.palette.warning.main,
  },
  downCaretIcon: { color: MUITheme.palette.text.lightGrey },
  alertBoxBtnContainer: {
    textAlign: "center",
    "& p": { margin: "25px 32px 30px" },
    "& button": {
      padding: "13px 135px 13px",
      marginBottom: 32,
    },
  },
  messageReviewContainer: {
    "& h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
    "& > div": {
      padding: "26px 38px",
      "& div": { width: "100%" },
    },
    "& button": { margin: "0 0 17px 38px" },
  },
  actionsColumn: {
    paddingRight: 16,
    textAlign: "right",
  },
  configTitle: {
    marginTop: 16,
    border: "none !important",
    fontWeight: "normal",
  },
  configFooter: {
    marginTop: 16,
    border: "none !important",
    color: MUITheme.palette.text.primary,

    fontWeight: "normal",
  },
  configList: {
    "& li": {
      paddingLeft: 10,
      paddingBottom: 5,
      listStyleType: "none",
    },
    "& strong": {
      fontWeight: "normal",
      color: MUITheme.palette.text.darkGrey,
      paddingRight: 10,
      "&::after": {
        content: `":"`,
      },
    },
    "& span": {
      color: MUITheme.palette.text.lightGrey,
    },
  },
  configBtnContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  alertText: {
    paddingTop: 5,
    lineHeight: 2,
  },
  grayBox: {
    padding: "6px 16px 6px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
  },
  launchServiceContainer: {
    width: 845,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 25px",
    },
  },
  rejectedAlertAndBtnContainer: {
    padding: "0 30px 25px",
    textAlign: "center",
    "& button": { marginTop: 25 },
  },
  approvalCommentSection: {
    marginTop: 25,
    "& h6": {
      textAlign: "left",
    },
    "& p": {
      padding: "10px 15px",
      borderRadius: 4,
      marginTop: 10,
      backgroundColor: MUITheme.palette.background.mainContent,
      fontSize: 16,
      textAlign: "left",
    },
  },
  changesReqAlertContainer: { padding: "0 25px" },
  changeReqTextarea: {
    margin: 25,
    "& h6": {
      "&:last-of-type": { margin: "20px 0" },
    },
    "& p": {
      padding: "10px 15px",
      borderRadius: 4,
      marginTop: 10,
      backgroundColor: MUITheme.palette.background.mainContent,
      fontSize: 16,
    },
    "& > div": {
      "& > div": { width: "100%" },
    },
  },
  changeReqBtnContainer: {
    paddingBottom: 30,
    textAlign: "center",
    "& button": {
      "&:first-of-type": { marginRight: 25 },
    },
  },
  validateConfigContainer: {
    marginTop: 35,
    "& h6": {
      paddingBottom: 16,
      fontSize: 18,
      lineHeight: "23px",
      fontWeight: 400,
      "& + p": {
        marginBottom: 24,
        "& span": { fontWeight: "bold" },
      },
    },
    "& button": { marginTop: 16 },
  },
  alertBoxContainer: { marginTop: 10 },
  statusBannerContainer: {
    width: 845,
    margin: "40px auto",
    "@media(max-width:800px)": {
      boxSizing: "border-box",
      width: "100%",
      padding: "0 25px",
    },
  },
});
