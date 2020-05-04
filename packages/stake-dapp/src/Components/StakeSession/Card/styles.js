import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  CardContainer: {
    width: "33%",
    display: "inline-block",
    "& > div": {
      display: "flex",
      alignItems: "baseline",
    },
    "& svg": {
      color: MUITheme.palette.text.disabled,
      fontSize: 18,
    },
    "&:first-of-type": { paddingBottom: 34 },
    "@media(max-width: 760px)": {
      width: "50%",
      "&:nth-child(3)": { paddingBottom: 34 },
    },
    [MUITheme.breakpoints.down("xs")]: {
      width: "100%",
      paddingBottom: 34,
      "&:last-of-type": { paddingBottom: 0 },
    },
  },
  title: {
    fontSize: 16,
    lineHeight: "20px",
  },
  value: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 28,
    lineHeight: "35px",
  },
  unit: {
    paddingLeft: 10,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  iconTooltipContainer: {
    display: "flex",
    alignItems: "center !important",
    justifyContent: "end !important",
    position: "relative",
  },
  toolTipContainer: {
    "& > svg": {
      padding: "0 12px 3px 0",
      color: MUITheme.palette.text.disabled,
      cursor: "pointer",
      fontSize: 22,
      verticalAlign: "middle",
    },
    "& p": {
      width: 377,
      padding: 16,
      borderRadius: 4,
      display: "none",
      position: "absolute",
      bottom: 45,
      left: "50%",
      background: MUITheme.palette.text.lightGrey,
      boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
      color: MUITheme.palette.text.white,
      fontSize: 16,
      lineHeight: "20px",
      transform: "translateX(-70%)",
      zIndex: 9999,
    },
    "&:hover": {
      "& svg": { color: MUITheme.palette.primary.main },
      "& p": { display: "block" },
    },
  },
}));
