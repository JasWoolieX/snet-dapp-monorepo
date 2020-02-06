export const useStyles = MUITheme => ({
  serviceCreationContainer: {
    paddingTop: 40,
    "& h3": { lineHeight: "48px" },
    "& > div": {
      "&:nth-child(2)": {
        width: 700,
        [MUITheme.breakpoints.down("sm")]: { width: "90%" },
      },
    },
    "& ul": {
      "& li": {
        "&::before": {
          [MUITheme.breakpoints.down("xs")]: { width: 50 },
          "@media (max-width:470px)": { display: "none" },
        },
      },
    },
  },
  topSection: {
    padding: "0 10px",
    textAlign: "center",
  },
  description: {
    paddingTop: 15,
    color: MUITheme.palette.text.primary,
    fontSize: 20,
    fontWeight: 300,
    lineHeight: "28px",
  },
});
