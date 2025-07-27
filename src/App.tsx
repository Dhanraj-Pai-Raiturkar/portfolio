import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import CareerSection from "./components/CareerSection";

function App() {
  return (
    <Grid
      width="100vw"
      display="flex"
      flexDirection="column"
      px={{ xs: 2, sm: 4, lg: 8, xl: 12 }}
    >
      <Navbar />
      <LandingSection />
      <AboutSection />
      <CareerSection />
    </Grid>
  );
}

export default App;
