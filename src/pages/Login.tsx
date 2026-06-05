import {
  Grid,
  Box,
  Typography,
  Divider,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import expandedLogo from "../images/expandedLogo.jpg";
import { useLottie } from "lottie-react";
import jobflowLottie from "../assets/jobflowLottie.json";

const Login = () => {
  const navigate = useNavigate();
  const onDontHaveAccountClick = () => {
    navigate("/signup");
  };

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
    <>
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
            />
            <Paper
              sx={{ width: 500, height: 500, mt: "30px", ml: 20 }}
              elevation={3}
            >
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
                style={{ cursor: "pointer" }}
              >
                Don't have an account?
              </Typography>
            </Paper>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Login;
