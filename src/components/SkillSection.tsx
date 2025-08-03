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
import { INTIAL_NUMBER_OF_SKILLS, skills, type skill } from "../constants";
import { useState } from "react";
import { theme } from "../theme";

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

const SkillSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialList = skills.slice(0, INTIAL_NUMBER_OF_SKILLS);
  const remaining = skills.slice(INTIAL_NUMBER_OF_SKILLS, skills.length);

  const handleCollapseClick = () => {
    setShowAll((prev) => {
      const newValue = !prev;
      if (!newValue) {
        const element = document.getElementById("skills");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return newValue;
    });
  };
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
      <Box id="skills">
        <Typography py={1} variant="h2" display={{ xs: "none", sm: "flex" }}>
          Skill Set
        </Typography>
        <Typography py={1} variant="h3" display={{ xs: "flex", sm: "none" }}>
          Skill Set
        </Typography>
      </Box>
      {initialList.map((skill: skill) => {
        return (
          <Box
            component="span"
            key={skill.label}
            width={{ xs: "100%", md: "70%" }}
            sx={{ scrollMarginTop: "100px" }}
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
          alignItems={{ xs: "start", md: "center" }}
          flexDirection="column"
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
                  // marks={marks}
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
        <Grid display="flex" justifyContent="center" width="100%">
          <Chip
            label={showAll ? "Show Less ▲" : "Show More ▼"}
            onClick={handleCollapseClick}
            sx={{ cursor: "pointer", fontWeight: 500 }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default SkillSection;
