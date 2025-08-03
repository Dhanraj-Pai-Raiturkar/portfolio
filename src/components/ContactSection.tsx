import { Email } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { socialMediaLinks, type SocialMediaLink } from "../constants";

const ContactSection = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems={{ xs: "start", md: "center" }}
      flexDirection="column"
      py={{ xs: 4, md: 6 }}
      gap={2}
    >
      <Box id="contact">
        <Typography py={1} variant="h2" display={{ xs: "none", sm: "flex" }}>
          Let’s Connect
        </Typography>
        <Typography py={1} variant="h3" display={{ xs: "flex", sm: "none" }}>
          Let’s Connect
        </Typography>
      </Box>
      <Typography variant="h5" color="textSecondary">
        Send me a message below, or reach out via email or LinkedIn — I’d love
        to hear from you.
      </Typography>
      <Grid gap={2} display="flex" flexDirection="column">
        <TextField placeholder="Write your message here…" />
        <Button size="large" variant="contained">
          Send Message
        </Button>
      </Grid>
      <Box>
        <IconButton target="_blank" href="mailto:dhanraj.raiturkar@gmail.com">
          <Email />
        </IconButton>
        <>
          {socialMediaLinks
            .filter((socialMediaLink: SocialMediaLink) =>
              socialMediaLink.link.includes("linkedin")
            )
            .map((socialMediaLink: SocialMediaLink) => (
              <IconButton target="_blank" href={socialMediaLink.link}>
                {socialMediaLink.icon}
              </IconButton>
            ))}
        </>
      </Box>
    </Grid>
  );
};

export default ContactSection;
