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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
interface SidebarProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  width?: string;
}

const listItemStyle = {
  pX: "6px",
  paddingY: "4px",
  textWrap: "nowrap",
  " &:focus, &:hover": {
    background: ` linear-gradient(0deg, rgba(33, 150, 243, 0.08) 0%, rgba(33, 150, 243, 0.08) 100%), #0b0236`,
    ".MuiButtonBase-root.MuiListItemButton-root .MuiListItemIcon-root": {
      color: "primary.contrastText",
    },
    ".MuiButtonBase-root": {
      background: `none`,
      color: "secondary.main",
    },
  },
  "&.active": {
    background: "primary.main",
    color: "secondary.main",
    ".MuiButtonBase-root.MuiListItemButton-root .MuiListItemIcon-root": {
      color: "secondary.main",
    },
    ".MuiButtonBase-root": {
      background: `none`,
      color: "secondary.main",
    },
  },
};

const Sidebar = ({ width, isOpen, setIsOpen }: SidebarProps) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {[
          "My Applications",
          "Saved Jobs",
          "Tasks",
          "Documents",
          "Analytics",
        ].map((text, index) => (
          <ListItem key={text} disablePadding sx={listItemStyle}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "primary.main",
                  ".MuiListItemButton-root:hover &": {
                    color: "primary.contrastText",
                  },
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText color="primary" primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Settings", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding sx={listItemStyle}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "primary.main",
                  ".MuiListItemButton-root:hover &": {
                    color: "primary.contrastText",
                  },
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText color="primary" primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      sx={{
        width,
        transition: "width 0.5s",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          transition: "width 0.5s",
          boxSizing: "border-box",
          backgroundColor: "primary.contrastText",
          top: "64px",
          color: "primary.main",
          "& .MuiListItemIcon-root": {
            color: "primary.main",
          },

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
