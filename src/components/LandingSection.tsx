import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ProfilePic from "../assets/profilePic.png";
import { socialMediaLinks, type SocialMediaLink } from "../constants";
import { theme } from "../theme";

const LandingSection = () => {
  const handleContactMeNav = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      container
      flexDirection={{ xs: "column-reverse", md: "row" }}
      py={{ xs: 4, sm: 10 }}
      gap={2}
    >
      <Grid flex={6} display="flex" flexDirection="column">
        <Grid>
          <Typography variant="subtitle1">Hi I am</Typography>
        </Grid>
        <Grid>
          <Typography fontWeight={800} variant="h5" color="primary">
            Dhanraj Pai Raiturkar
          </Typography>
        </Grid>
        <Grid>
          <Typography
            display={{ xs: "flex", sm: "none" }}
            justifyContent="start"
            variant="h2"
          >
            Full Stack
          </Typography>
          <Typography
            display={{ xs: "none", sm: "flex" }}
            justifyContent="start"
            variant="h1"
          >
            Full Stack
          </Typography>
        </Grid>
        <Grid>
          <Typography
            display={{ xs: "flex", sm: "none" }}
            justifyContent="end"
            variant="h2"
          >
            Developer
          </Typography>
          <Typography
            display={{ xs: "none", sm: "flex" }}
            justifyContent="end"
            variant="h1"
          >
            Developer
          </Typography>
        </Grid>
        <Grid py={2}>
          <Typography>
            A passionate software engineer based in Bangalore, India. I
            specialize in building clean, responsive, and high-performance web
            applications using modern technologies like React, TypeScript, and
            Node.js.
          </Typography>
        </Grid>
        <Grid gap={2} display="flex" justifyContent="start" alignItems="center">
          <Button
            onClick={handleContactMeNav}
            variant="contained"
            color="primary"
          >
            Let’s Connect
          </Button>
          <Button
            href="/resume.pdf"
            variant="outlined"
            color="primary"
            component="a"
            download
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
      <Grid
        flex={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          width={{ xs: "250px", md: "350px" }}
          height={{ xs: "250px", md: "350px" }}
          sx={{
            borderRadius: "50%",
            background: `conic-gradient(from 180deg at 50% 50%, #ffffff, ${theme.palette.primary.light}, ${theme.palette.primary.main}, #ffffff)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* White separator layer */}
          <Box
            width={{ xs: "240px", md: "340px" }}
            height={{ xs: "240px", md: "340px" }}
            sx={{
              borderRadius: "50%",
              backgroundColor: "#ffffff", // thin white separator
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={ProfilePic}
              sx={{
                width: { xs: "230px", md: "330px" },
                height: { xs: "230px", md: "330px" },
                objectFit: "cover",
                objectPosition: "center top",
                // backgroundColor: theme.palette.primary.main,
                background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              }}
            />
          </Box>
        </Box>
        <Grid p={2}>
          {socialMediaLinks.map((socialMediaLink: SocialMediaLink) => {
            return (
              <IconButton target="_blank" href={socialMediaLink.link}>
                {socialMediaLink.icon}
              </IconButton>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingSection;
