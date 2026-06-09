import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Divider,
  Box,
} from "@mui/material";
import { type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import {
  SIDEBAR_MENU,
  SIDEBAR_BOTTOM_MENU,
} from './constants/SidebarMenu';

interface SidebarProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  width?: string;
}

const listItemStyle = {
  pX: "6px",
  paddingY: "4px",
  textWrap: "nowrap",
  "&:focus, &:hover": {
    background:
      "linear-gradient(0deg, rgba(33, 150, 243, 0.08) 0%, rgba(33, 150, 243, 0.08) 100%), #0b0236",
    ".MuiListItemIcon-root": {
      color: "primary.contrastText",
    },
    ".MuiListItemText-primary": {
      color: "primary.contrastText",
    },
  },
};

const Sidebar = ({
  width = '250px',
  isOpen,
  setIsOpen,
}: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen?.(false);
  };

  const DrawerList = (
    <Box sx={{ width }} role="presentation">
      <List>
        {SIDEBAR_MENU.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.label}
              disablePadding
              sx={listItemStyle}
            >
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
              >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <Icon />
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />

      <List>
        {SIDEBAR_BOTTOM_MENU.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              key={item.label}
              disablePadding
              sx={listItemStyle}
            >
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
              >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <Icon />
                </ListItemIcon>

                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          backgroundColor: "primary.contrastText",
          top: "64px",
          overflow: "hidden",
        },
      }}
      anchor="left"
      open={isOpen}
      variant="temporary"
      onClose={() => setIsOpen?.(false)}
    >
      {DrawerList}
    </Drawer>
  );
};

export default Sidebar;