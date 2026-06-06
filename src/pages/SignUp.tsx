import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import expandedLogo from "../images/expandedLogo.jpg";
import { useLottie } from "lottie-react";
import jobflowLottie from "../assets/jobflowLottie.json";

const SignUp = () => {
  const lottieOptions = {
    animationData: jobflowLottie,
    loop: true,
    autoplay: true,
  };

  const { View: LottieAnimation } = useLottie(lottieOptions, {
    height: "60%",
    width: "90%",
    zIndex: 2,
    marginTop: "70px",
  });

  return (
    <Grid container display={"flex"} width={"100%"} flexDirection={"row"}>
      <Box sx={{ width: "36%", height: "100vh", bgcolor: "primary.main" }}>
        {LottieAnimation}
        <Typography variant="h4" color={"white"} sx={{ ml: 5, mt: 5 }}>
          · Work · Track · Flow
        </Typography>
      </Box>
      <Box sx={{ width: "64%", height: "100vh" }}>
        <Grid container display={"flex"} width={"100%"} flexDirection={"row"}>
          <img
            src={expandedLogo}
            alt="LOGO"
            width={"20%"}
            height={"20%"}
            style={{ marginLeft: "40%", marginTop: "20px" }}
          />{" "}
          <Paper
            sx={{ width: 500, height: 500, mt: "30px", ml: 20 }}
            elevation={3}
          >
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
        </Grid>
      </Box>
    </Grid>
  );
};

export default SignUp;
