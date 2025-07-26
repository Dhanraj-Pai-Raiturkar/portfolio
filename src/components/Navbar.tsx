import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import WorkIcon from "@mui/icons-material/Work";
import LayersIcon from "@mui/icons-material/Layers";
// import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
// import BookIcon from "@mui/icons-material/Book";
// import CallIcon from "@mui/icons-material/Call";
import type { ReactNode } from "react";

type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon fontSize="small" />,
  },
  {
    id: "about",
    label: "About",
    icon: <FeedIcon fontSize="small" />,
  },
  {
    id: "career",
    label: "Career",
    icon: <WorkIcon fontSize="small" />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <LayersIcon fontSize="small" />,
  },
  //   {
  //     id: "testimonials",
  //     label: "testimonials",
  //     icon: <MicExternalOnIcon fontSize="small" />,
  //   },
  //   {
  //     id: "blog",
  //     label: "Blog",
  //     icon: <BookIcon fontSize="small" />,
  //   },
  //   {
  //     id: "contact",
  //     label: "Contact",
  //     icon: <CallIcon fontSize="small" />,
  //   },
];

const Navbar = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      px={{ xs: 2, sm: 4 }}
      py={2}
    >
      <Grid
        container
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Grid>
          <Typography
            sx={{ opacity: 0.75, cursor: "pointer" }}
            fontWeight={900}
            fontFamily="Bebas Neue"
            variant="h4"
          >
            Dev Dhanraj
          </Typography>
        </Grid>
        <Grid>
          <List component="nav" sx={{ display: "flex" }}>
            {navItems.map((navItem: NavItem) => {
              return (
                // <ListItem
                //   sx={{
                //     px: { xs: 1, sm: 1.4, md: 2, lg: 3 },
                //     cursor: "pointer",
                //   }}
                // >
                <ListItemButton
                  sx={{
                    px: { xs: 1, sm: 1.4, md: 2, lg: 3 },
                    cursor: "pointer",
                  }}
                >
                  {navItem.icon}
                  <Typography
                    sx={{ opacity: 0.75 }}
                    variant="subtitle2"
                    ml={0.3}
                  >
                    {navItem.label}
                  </Typography>
                </ListItemButton>
                // </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
