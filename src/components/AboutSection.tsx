import {
  Avatar,
  Box,
  Chip,
  Collapse,
  Grid,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import { theme } from "../theme";

import { useState } from "react";
import {
  INTIAL_NUMBER_OF_SKILLS,
  marks,
  skills,
  type skill,
} from "../constants";

const SliderStyled = styled(Slider)(() => ({
  pointerEvents: "none",
  "& .MuiSlider-thumb": {
    pointerEvents: "auto",
    height: 16,
    width: 16,
    backgroundColor: "white",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 5,
    borderRadius: 3,
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiSlider-rail": {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
  "& .MuiSlider-mark": {
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
}));

const AboutSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialList = skills.slice(0, INTIAL_NUMBER_OF_SKILLS);
  const remaining = skills.slice(INTIAL_NUMBER_OF_SKILLS, skills.length);

  console.log(
    "skills",
    skills.length,
    INTIAL_NUMBER_OF_SKILLS,
    skills.length - INTIAL_NUMBER_OF_SKILLS
  );
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="start"
      flexDirection={{ xs: "column", md: "row" }}
      py={{ xs: 4, sm: 10 }}
    >
      <Grid flex={6}>
        <Typography py={1} variant="h2" display={{ xs: "none", sm: "flex" }}>
          About Me
        </Typography>
        <Typography py={1} variant="h3" display={{ xs: "flex", sm: "none" }}>
          About Me
        </Typography>
        <Grid py={2} container spacing={2}>
          <Grid>
            <Chip label={<Typography>👨‍💻 3.5+ Years Experience</Typography>} />
          </Grid>
          <Grid>
            <Chip
              label={
                <Typography>🏅 Master of Computer Applications</Typography>
              }
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
          <Typography variant="h5">
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
      </Grid>
      <Grid
        flex={6}
        px={{ xs: 2 }}
        py={{ xs: 4 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        flexDirection="column"
        width="100%"
      >
        {initialList.map((skill: skill) => {
          return (
            <Box
              component="span"
              key={skill.label}
              width={{ xs: "100%", md: "70%" }}
            >
              <Chip
                label={
                  <Typography
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    variant="body2"
                    component="span"
                  >
                    <Avatar
                      sx={{ height: "20px", width: "20px", mr: 1 }}
                      src={skill.logo}
                    />
                    {skill.label}
                  </Typography>
                }
              />
              <SliderStyled
                marks={marks}
                defaultValue={skill.proficiency}
                aria-label="Default"
                value={skill.proficiency}
                valueLabelDisplay="auto"
                onChange={() => {}}
                tabIndex={-1}
              />
            </Box>
          );
        })}
        <Collapse
          in={showAll}
          sx={{
            width: "100%",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={2}
          >
            {remaining.map((skill: skill) => {
              return (
                <Box
                  component="span"
                  key={skill.label}
                  width={{ xs: "100%", md: "70%" }}
                >
                  <Chip
                    label={
                      <Typography
                        component="span"
                        display="flex"
                        justifyContent="start"
                        alignItems="center"
                        variant="body2"
                      >
                        <Avatar
                          sx={{ height: "20px", width: "20px", mr: 1 }}
                          src={skill.logo}
                        />
                        {skill.label}
                      </Typography>
                    }
                  />
                  <SliderStyled
                    marks={marks}
                    defaultValue={skill.proficiency}
                    aria-label="Default"
                    value={skill.proficiency}
                    valueLabelDisplay="auto"
                    onChange={() => {}}
                    tabIndex={-1}
                  />
                </Box>
              );
            })}
          </Box>
        </Collapse>
        {remaining.length > 0 && (
          <Chip
            label={showAll ? "Show Less ▲" : "Show More ▼"}
            onClick={() => setShowAll((prev) => !prev)}
            sx={{ cursor: "pointer", fontWeight: 500 }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default AboutSection;
