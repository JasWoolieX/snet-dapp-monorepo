export const useStyles = MUITheme => ({
  howItWorksContainer: {
    padding: "63px 60px 88px",
  },
  description: {
    marginTop: 32,
    color: MUITheme.palette.text.primary,
    fontSize: 20,
    lineHeight: "28px",
    "& span": {
      display: "block",
      "&:last-of-type": { marginTop: 28 },
    },
  },
  relatedContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardGroup: {
    paddingTop: 56,
    display: "flex",
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },
});
