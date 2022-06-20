import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "light",

    primary: {
      main: "#131313",
    },

    beginner: { main: "#FFB7B2" },
    intermediate: { main: "#FFDAC1" },
    expert: { main: "#B5EAD7" },

    background: {
      default: "##FEFDFB",
      secondary: "#F5F4EF",
      tertiary: "#E7E3DC",
    },

    divider: "#E7E3DC",

    text: {
      primary: "#131313",
      secondary: "#1D1D1D",
      tertiary: "#282828",
      disabled: "#13131340",
      hint: "#e08a44",
    },
  },
  typography: {
    fontFamily: ["DM Mono", "monospace"].join(","),

    title: {
      fontSize: 25,
      fontWeight: 600,
      display: "inline",
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:hover": { backgroundColor: "transparent" },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "transparent" },
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  shape: {
    borderRadius: 4,
  },

  spacing: 5,
};

let theme = createTheme(themeOptions);

theme = responsiveFontSizes(theme);

export default theme;
