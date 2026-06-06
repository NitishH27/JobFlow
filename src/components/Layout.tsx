import { useState } from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
const Layout = ({ children, title, description }: LayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  console.log(isDrawerOpen);
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
          </Toolbar>
        </AppBar>
        <Grid
          container
          display={"flex"}
          width={"100%"}
          flexDirection={"row"}
        ></Grid>
        {children}
        <Sidebar isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </Grid>
    </>
  );
};

export default Layout;
