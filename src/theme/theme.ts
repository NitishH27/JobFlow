import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#9c27b0",
        },
        background: {
            default: "#f5f7fb",
            paper: "#ffffff",
        },
        text: {
            primary: "#1e293b",
            secondary: "#64748b",
        },
    },

    typography: {
        fontFamily: `'Inter', sans-serif`,

        h4: {
            fontWeight: 700,
        },

        h5: {
            fontWeight: 600,
        },

        h6: {
            fontWeight: 600,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    paddingInline: 16,
                    paddingBlock: 8,
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    backgroundColor: "#ffffff",
                    color: "#1e293b",
                },
            },
        },
    },
});

export default theme;