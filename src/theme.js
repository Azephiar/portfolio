import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "dark",

    primary: {
      main: "#131313",
    },

    secondary: {
      main: "#a6bfa7",
    },

    expert: {
      main: "#a6bfa7",
    },

    intermediate: {
      main: "#bfb1a6",
    },

    beginner: {
      main: "#bfa8a6",
    },

    background: {
      default: "##FEFDFB",
      secondary: "#F5F4EF",
      tertiary: "#E7E3DC",
    },

    error: {
      main: "#f44335",
    },
    warning: {
      main: "#ff9801",
    },
    info: {
      main: "rgba(154,154,154,1)",
    },
    success: {
      main: "#4caf51",
    },

    divider: "rgba(154,154,154,1)",

    text: {
      primary: "#131313",
      secondary: "#1D1D1D",
      tertiary: "#282828",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "gba(255, 255, 255, 0.5)",
    },
  },
  typography: {
    fontFamily: ["DM Mono", "monospace"].join(","),

    title: {
      fontSize: 25,
      fontWeight: 600,
      display: "inline",
      marginBottom: "15px",
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
