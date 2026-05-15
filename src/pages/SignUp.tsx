import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const SignUp = () => {
  return (
    <Grid container display={"flex"} width={"100%"} flexDirection={"row"}>
      <Box sx={{ width: "36%", height: "100vh", bgcolor: "primary.main" }} />
      <Box>
        <Paper sx={{ width: 500, height: 500, mt: 15, ml: 20 }} elevation={3} gap={2}>
          <Typography
            variant="h5"
            color={"primary.main"}
            sx={{ mt: 5, ml: 16 }}
          >
            Lets create your account!
          </Typography>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ width: 400, mt: 3, ml: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: 400, mt: 3, ml: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 400, mt: 3, ml: 5 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            sx={{ width: 400, mt: 3, ml: 5 }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 400, mt: 5, ml: 5 }}
          >
            Sign Up
          </Button>
        </Paper>
      </Box>
    </Grid>
  );
};

export default SignUp;
