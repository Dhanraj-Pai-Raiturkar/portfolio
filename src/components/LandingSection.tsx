import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import ProfilePic from "../assets/profilePic.png";

const LandingSection = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      container
      flexDirection={{ xs: "column-reverse", md: "row" }}
      px={{ xs: 2, sm: 4 }}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            reiciendis a consectetur laborum maiores sunt eius eaque debitis
            atque iste delectus, deserunt nobis voluptatibus incidunt doloribus
            cupiditate enim illum aliquid!
          </Typography>
        </Grid>
        <Grid gap={2} display="flex" justifyContent="start" alignItems="center">
          <Button variant="contained" color="primary">
            Contact Me
          </Button>
          <Button variant="outlined" color="primary">
            Download CV
          </Button>
        </Grid>
      </Grid>
      <Grid flex={6} display="flex" justifyContent="center" alignItems="center">
        <Box
          width={{ xs: "250px", md: "350px" }}
          height={{ xs: "250px", md: "350px" }}
          sx={{
            borderRadius: "50%",
            background:
              "conic-gradient(from 180deg at 50% 50%, #ffffff, #ffa726, #ff5722, #ffffff)",
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
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingSection;
