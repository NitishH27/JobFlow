import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Layout from "../components/Layout";

const user = {
  firstName: "Nitish",
  lastName: "H",
  email: "nitish@example.com",
  activeDays: 42,
};

const MyProfile = () => {
  const [newPassword, setNewPassword] = useState("");

  return (
    <Layout title="My Profile" description="Manage your personal information and security.">
      <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", px: { xs: 2, sm: 4 }, py: 5 }}>
        <Paper sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
            <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>NH</Avatar>
            <Box>
              <Typography variant="h5">{user.firstName} {user.lastName}</Typography>
              <Typography variant="body2">Your profile details</Typography>
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="First name" value={user.firstName} fullWidth InputProps={{ readOnly: true }} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Last name" value={user.lastName} fullWidth InputProps={{ readOnly: true }} />
            </Grid>
            <Grid size={12}>
              <TextField label="Email address" value={user.email} fullWidth InputProps={{ readOnly: true }} />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, py: 2.5, px: 3, bgcolor: "secondary.main", borderRadius: 2 }}>
            <Typography variant="body2">Active days</Typography>
            <Typography variant="h4" color="primary.main">{user.activeDays}</Typography>
          </Box>

          <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: "divider" }}>
            <Typography variant="h6" sx={{ mb: 0.5 }}>Set a new password</Typography>
            <Typography variant="body2" sx={{ mb: 2.5 }}>Choose a secure password for your account.</Typography>
            <TextField
              label="New password"
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              fullWidth
              slotProps={{ input: { startAdornment: <LockOutlinedIcon color="action" sx={{ mr: 1 }} /> } }}
            />
            <Button variant="contained" sx={{ mt: 2 }} disabled={!newPassword}>
              Update password
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default MyProfile;
