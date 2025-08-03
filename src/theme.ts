import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // or 'light' based on Figma
    primary: {
      main: "#f09100", // original
      // main: "#93DA97", // green
      // main: "#EA5B6F", // pink
      // main: "#8CCDEB", // light blue
    },
    secondary: {
      main: "#212121", // Deep black/grey
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    body1: { fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});
