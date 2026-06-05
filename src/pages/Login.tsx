import {
  Grid,
  Box,
  Typography,
  Divider,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import expandedLogo from '../images/expandedLogo.jpg';

const Login = () => {
  const onDontHaveAccountClick = () => {
    window.location.href = "/signup";
  };
  return (
    <>
      <Grid container display={"flex"} width={"100%"} flexDirection={"row"}>
        <Box sx={{ width: "36%", height: "100vh", bgcolor: "primary.main" }} />
    <img src={expandedLogo} alt="LOGO"  width={"20%"} height={'20%'} style={{marginLeft:'50px'}} />
        <Box>
          <Paper sx={{ width: 500, height: 500, mt: 20, ml: 20 }} elevation={3}>
            <Typography
              variant="h5"
              color={"primary.main"}
              sx={{ mt: 10, ml: 22 }}
            >
              Welcome Back!
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: 400, mt: 5, ml: 5 }}
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
              Login
            </Button>
            <Divider sx={{ mt: 3 }} />
            <Typography
              variant="body2"
              color={"primary.main"}
              sx={{ mt: 3, ml: 22 }}
              onClick={() => {
                onDontHaveAccountClick();
              }}
            >
              Don't have an account?
            </Typography>
          </Paper>
        </Box>
      </Grid>
    </>
  );
};

export default Login;
