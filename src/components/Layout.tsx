import { useState, type MouseEvent } from "react";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
const Layout = ({ children, title, description }: LayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => setProfileMenuAnchor(null);

  const handleProfileNavigation = () => {
    handleProfileMenuClose();
    navigate("/my-profile");
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    navigate("/login");
  };
  return (
    <>
      <Grid container display={"flex"} width={"100%"} flexDirection={"column"}>
        <AppBar
          position="sticky"
          elevation={3}
          sx={{ backgroundColor: "primary.main" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon sx={{ mr: 2, color: "primary.contrastText" }} />
            </IconButton>
            <Grid
              container
              display={"flex"}
              width={"100%"}
              flexDirection={"column"}
            >
              <Typography
                variant="h6"
                color="primary.contrastText"
                sx={{ textTransform: "uppercase" }}
              >
                {title}
              </Typography>
              <Typography variant="subtitle2" color="primary.contrastText">
                {description}
              </Typography>
            </Grid>
            <Avatar
              aria-controls={profileMenuAnchor ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-label="Open profile menu"
              onClick={handleProfileMenuOpen}
              sx={{
                ml: 2,
                bgcolor: "primary.contrastText",
                color: "primary.main",
                cursor: "pointer",
              }}
            >
              NH
            </Avatar>
            <Menu
              id="profile-menu"
              anchorEl={profileMenuAnchor}
              open={Boolean(profileMenuAnchor)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem onClick={handleProfileNavigation}>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon fontSize="small" />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Grid
          container
          display={"flex"}
          width={"100%"}
          flexDirection={"row"}
        >
        {children}</Grid>
        <Sidebar isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </Grid>
    </>
  );
};

export default Layout;
