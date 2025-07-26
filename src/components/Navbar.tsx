import { Grid, List, ListItemButton, Typography } from "@mui/material";
import { navItems, type NavItem } from "../constants";

const Navbar = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
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
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
