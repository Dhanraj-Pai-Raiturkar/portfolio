import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          html: {
            margin: 0,
            padding: 0,
            overflowX: "hidden",
          },
          body: {
            margin: 0,
            padding: 0,
            overflowX: "hidden",
          },
        }}
      />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
