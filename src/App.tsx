import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <Grid px={{ xs: 0, lg: 4 }} width="100vw">
      <Navbar />
      <LandingSection />
    </Grid>
  );
}

export default App;
