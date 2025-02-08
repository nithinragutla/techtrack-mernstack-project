import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const CompanyloginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    companyEmail: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    companyEmail: "",
    password: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestLogin = () => {
    setLoginData({
      companyEmail: "guest@techtrack.com",
      password: "guest123",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://techtrack-backend-code-mangodb-node-js-express.vercel.app/company/login",
        loginData
      );
      if (response.status === 200) {
        const { message, token } = response.data;
        localStorage.setItem("authToken", token);
        setOpenSnackbar(true);
        setSnackbarSeverity("success");
        setSnackbarMessage(message);
        navigate("/Companydashboard");
      } else {
        setOpenSnackbar(true);
        setSnackbarSeverity("error");
        setSnackbarMessage("Invalid email or password.");
      }
    } catch (error) {
      setOpenSnackbar(true);
      setSnackbarSeverity("error");
      setSnackbarMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "rgb(228, 45, 64)" }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => navigate("/")}> <HomeIcon fontSize="large" /> </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}> TechTrack </Typography>
          <Button color="inherit" onClick={() => navigate("/Companylogin")} > Login </Button>
          <Button color="inherit" onClick={() => navigate("/Companyregistration")} > SignUp </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ maxWidth: 400, margin: "50px auto", padding: 4, border: "1px solid #ddd", borderRadius: 3, backgroundColor: "#fff" }}>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 2, textAlign: "center" }}> Login </Typography>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth required label="Email ID" name="companyEmail" value={loginData.companyEmail} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Password" type={showPassword ? "text" : "password"} name="password" value={loginData.password} onChange={handleChange} 
                InputProps={{ endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>) }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary" size="large" disabled={isLoading} style={{ backgroundColor: "rgb(228, 45, 64)" }}> 
                {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"} 
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button variant="outlined" color="secondary" onClick={handleGuestLogin}> Guest Login </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="body2"> New user? 
                <Button style={{ color: "blue" }} onClick={() => navigate("/Companyregistration")} > Signup </Button> 
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}> {snackbarMessage} </Alert>
      </Snackbar>
    </>
  );
};

export default CompanyloginPage;
