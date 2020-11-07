import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 50,
        zIndex: "1300",
        boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.2)",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        marginTop: 50,
        paddingTop: 20,
        borderRight: 0,
        minWidth: 180,
        backgroundColor: "rgb(51,129,247)",
        background:
          "linear-gradient(180deg, rgba(51,129,247,1) 0%, rgba(82,177,244,1) 100%)",
      },
    },
    MuiMenuItem: {
      root: {
        color: "white",
        borderLeft: "3px",
        borderColor: "transparent",
        borderStyle: "solid",
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        "&:hover, &:visited": {
          color: "white",
        },
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          marginRight: 10,
        },
        "&$selected": {
          borderColor: "white",
          backgroundColor: "transparent",
        },
      },
      gutters: {
        paddingLeft: 32,
      },
      selected: {
        borderLeft: "3px solid #ffffff",
      },
    },
  },
});

export default theme;
