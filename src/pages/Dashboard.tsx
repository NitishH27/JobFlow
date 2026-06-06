import { Grid } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import Layout from "../components/Layout";
import DashboardWidget from "../components/dahsboardWidget";
import GapPieChart from "../components/GapPieChart";

const Dashboard = () => {
  return (
    <Layout title="Dashboard" description="Welcome to your dashboard!">
      <Grid container spacing={2} sx={{ ml: 10, mt: 5 }} display={"flex"} flexDirection={"column"}>
       <Grid container spacing={2}  display={"flex"} flexDirection={"row"}> 
      <DashboardWidget text="Total Applications" icon={<FormatListBulletedIcon />} count={10} />
      <DashboardWidget text="Interview Calls" icon={<ContactPhoneRoundedIcon />} count={5} />
      </Grid>
      <Grid container spacing={2}  display={"flex"} flexDirection={"row"}>
      <DashboardWidget text="Rejected Applications" icon={<PlaylistRemoveRoundedIcon />} count={3} />
      <DashboardWidget text="Shortlisted Candidates" icon={<GroupRoundedIcon />} count={7} />
      </Grid>
      <GapPieChart />
      </Grid>
    </Layout>
  );
};

export default Dashboard;
