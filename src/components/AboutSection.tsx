import { Box, Chip, Grid, Typography } from "@mui/material";
import { theme } from "../theme";

const AboutSection = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems={{ xs: "start", md: "center" }}
      flexDirection="column"
      py={{ xs: 4, md: 6 }}
      px={{ lg: 30 }}
    >
      {/* <Grid flex={6}> */}
      <Box id="about">
        <Typography py={1} variant="h2" display={{ xs: "none", sm: "flex" }}>
          About Me
        </Typography>
        <Typography py={1} variant="h3" display={{ xs: "flex", sm: "none" }}>
          About Me
        </Typography>
      </Box>
      <Grid py={2} container spacing={2}>
        <Grid>
          <Chip label={<Typography>👨‍💻 3.5+ Years Experience</Typography>} />
        </Grid>
        <Grid>
          <Chip
            label={<Typography>🏅 Master of Computer Applications</Typography>}
          />
        </Grid>
        <Grid>
          <Chip label={<Typography>🌍 Based in Bangalore</Typography>} />
        </Grid>
        <Grid>
          <Chip label={<Typography>🚀 Loves to Code</Typography>} />
        </Grid>
        <Grid>
          <Chip label={<Typography>☕ Runs on coffee & code</Typography>} />
        </Grid>
      </Grid>
      <Box
        my={2}
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          paddingLeft: 2,
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography variant="h5" color="textSecondary">
          "Code is the closest thing to magic we have. I build to solve,
          simplify, and serve."
        </Typography>
      </Box>
      <Box
        my={2}
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          paddingLeft: 2,
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Typography variant="h5">
          "Code is the closest thing to magic we have. I build to solve,
          simplify, and serve."
        </Typography>
      </Box>
      <Box>
        <Typography pt={2}>
          I’m deeply curious about how great products are built and love
          translating complex ideas into elegant, intuitive user experiences. My
          journey in tech began with a strong foundation in Computer Science
          Engineering, and over the years, I’ve honed my skills through hands-on
          experience in both startups and product-based companies.
        </Typography>
        <Typography pt={2}>
          I thrive in collaborative environments, enjoy pair programming, and am
          always looking to learn something new — whether it’s a design system,
          a better testing strategy, or an emerging frontend framework. Outside
          of work, you’ll often find me reading about software architecture,
          exploring minimal design, or sketching out ideas for my next side
          project.
        </Typography>
      </Box>
      {/* </Grid> */}
    </Grid>
  );
};

export default AboutSection;
