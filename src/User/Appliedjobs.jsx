import React, { useEffect, useState } from "react";
import {AppBar,Toolbar,Typography,IconButton,Button,Menu,MenuItem,List,Card,CardContent,CircularProgress,Box,Drawer,ListItem,ListItemText,} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

const AppliedJobsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch applied jobs
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const authToken = localStorage.getItem("token");
        console.log(authToken)
        if (!authToken) {
            navigate("/Userlogin");
        }
        const response = await axios.get("https://techtrack-backend-code-mangodb-node-js-express.vercel.app/application/user-appliedJobs", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        console.log("Fetched applied jobs:", response.data.application[0].job);
        setJobs(response.data.application); 
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    navigate("/Userprofile");
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/Userlogin");
    setAnchorEl(null);
  };

  // Handle Mobile Drawer Open/Close
  const toggleDrawer = (open) => {
    setMobileOpen(open);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ background: "rgb(228, 45, 64)" }}>
        <Toolbar>
          {/* TechTrack Branding */}
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, textAlign: "left", fontFamily: "Times New Roman", cursor: "pointer" }}
            onClick={() => navigate("/Userdashboard")}
          >
            TechTrack
          </Typography>

          {/* Mobile Menu Icon (Visible only on mobile) */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: "block", sm: "none" } }} // Show only on mobile
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Desktop View Buttons */}
          <IconButton
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ display: { xs: "none", sm: "block" }, marginRight: 1 }}
          >
            <ArrowCircleLeftIcon fontSize="large" />
          </IconButton>

          <Button
            color="inherit"
            onClick={() => navigate("/listed-applied")}
            sx={{ display: { xs: "none", sm: "block" }, marginRight: 2 }}
          >
            Listed U Applied
          </Button>

          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>

          {/* Account Menu (Desktop) */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => { navigate(-1); toggleDrawer(false); }}>
            <ArrowCircleLeftIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="Back" />
          </ListItem>
          <ListItem button onClick={() => { navigate("/listed-applied"); toggleDrawer(false); }}>
            <ListItemText primary="Listed U Applied" />
          </ListItem>
          <ListItem button onClick={handleProfile}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Content Section */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom sx={{animation: "colorChange 3s infinite",}}>
          Applied Jobs
        </Typography>
        <style>
          {`
          @keyframes colorChange {
            0% {color: rgb(71, 221, 255)}
              25% {color:rgb(237, 96, 80); /* Change to a different color (e.g., Tomato) */}
            50% {color:rgb(241, 145, 71); /* Change to a different color (e.g., Tomato) */}
            75% {color:rgb(125, 124, 123); /* Change to a different color (e.g., Tomato) */}
            100% {color:rgb(212, 55, 230);
          }
        `}
        </style>

        {loading ? (
          <CircularProgress />
        ) : jobs.length === 0 ? (
          <Typography variant="body1">No applied jobs found.</Typography>
        ) : (
          <List>
            {jobs.map((job,ind) => (
              <Card key={job.id} sx={{ marginBottom: 2,backgroundColor:"#fff4e6" }} >
                <CardContent>
                  <Typography variant="h4" style={{fontFamily: "Times New Roman",}}>{job.job?.title}</Typography>
                  <Typography variant="h6" color="secondary">
                    Company: {job.job?.company==null?"my company":job.job?.company.companyName}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    Location: {job.job?.location}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    Employment Type: {job.job?.employementType}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </List>
        )}
      </Box>
    </div>
  );
};

export default AppliedJobsPage;