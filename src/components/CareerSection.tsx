import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { careerTimeline, type CareerTimeline } from "../constants";
import { theme } from "../theme";

const CareerSection = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      flexDirection="column"
      container
      py={{ xs: 2 }}
    >
      <Grid>
        <Box id="career">
          <Typography py={1} variant="h2" display={{ xs: "none", sm: "flex" }}>
            Career
          </Typography>
          <Typography py={1} variant="h3" display={{ xs: "flex", sm: "none" }}>
            Career
          </Typography>
        </Box>
      </Grid>
      <Grid>
        <Timeline
          position="alternate"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {[...careerTimeline]
            .reverse()
            .map((career: CareerTimeline, index: number) => {
              return (
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="h6"
                    color="text.secondary"
                  >
                    <Typography color="primary">{career.duration}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      <Avatar
                        src={career.logo}
                        sx={{ width: "100%", height: "100%" }}
                      />
                    </TimelineDot>
                    {careerTimeline.length - 1 !== index && (
                      <TimelineConnector sx={{ height: "10vh" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography
                      fontFamily="Bebas Neue"
                      variant="h3"
                      component="span"
                    >
                      {career.title}
                    </Typography>
                    <Typography color="text.secondary" variant="h6">
                      {career.subtitle}
                    </Typography>
                    <Typography color="text.secondary">
                      {career.period}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
        </Timeline>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            display: { xs: "flex", sm: "none" },
          }}
        >
          {[...careerTimeline]
            .reverse()
            .map((career: CareerTimeline, index: number) => {
              return (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{ backgroundColor: theme.palette.primary.main }}
                    >
                      <Avatar src={career.logo} />
                    </TimelineDot>
                    {careerTimeline.length - 1 !== index && (
                      <TimelineConnector sx={{ height: "8vh" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {career.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {career.subtitle}
                    </Typography>
                    <Typography color="text.secondary" variant="subtitle2">
                      {career.duration}
                    </Typography>
                    <Typography color="primary">{career.period}</Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default CareerSection;
