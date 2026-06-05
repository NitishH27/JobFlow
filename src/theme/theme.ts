import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#152039",
      light: "#7ca0cd",
      // dark: "#1d4ed8",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#7c3aed",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },

    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },

    divider: "#e2e8f0",

    success: {
      main: "#16a34a",
    },

    warning: {
      main: "#f59e0b",
    },

    error: {
      main: "#dc2626",
    },

    info: {
      main: "#0284c7",
    },
  },

  typography: {
    fontFamily: `'Inter', sans-serif`,

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.95rem",
    },

    body2: {
      color: "#64748b",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f8fafc",
          margin: 0,
          padding: 0,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #e2e8f0",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px rgba(15, 23, 42, 0.05)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 18,
          paddingBlock: 10,
          boxShadow: "none",
        },

        contained: {
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#ffffff",

          "& fieldset": {
            borderColor: "#e2e8f0",
          },

          "&:hover fieldset": {
            borderColor: "#94a3b8",
          },

          "&.Mui-focused fieldset": {
            borderWidth: "1px",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          boxShadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
          borderBottom: "1px solid #e2e8f0",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export default theme;