
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TaskIcon from "@mui/icons-material/Task";
import DescriptionIcon from "@mui/icons-material/Description";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const SIDEBAR_MENU = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "My Applications",
    path: "/my-applications",
    icon: WorkIcon,
  },
  {
    label: "Saved Jobs",
    path: "/saved-jobs",
    icon: BookmarkIcon,
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: TaskIcon,
  },
  {
    label: "Documents",
    path: "/documents",
    icon: DescriptionIcon,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: AnalyticsIcon,
  },
];

export const SIDEBAR_BOTTOM_MENU = [
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
  {
    label: "Logout",
    path: "/logout",
    icon: LogoutIcon,
  },
];