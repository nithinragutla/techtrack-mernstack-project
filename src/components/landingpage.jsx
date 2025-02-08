
import { AppBar,Avatar, Toolbar, Typography, Button, Container, Grid, Box, IconButton, Paper,useMediaQuery,Card, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { LocationOn, Email, Phone, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const LandingPage = () => {
  const navigate = useNavigate();
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
     const [currentIndex, setCurrentIndex] = useState(0);
     const [open, setOpen] = useState(false);
     const toggleDrawer = (open) => {
      setOpen(open);
    };
    
     const handleChange = (step) => {
       setCurrentIndex((prevIndex) =>
        (prevIndex + step + testimonials.length) % testimonials.length
      );
    };
    
    const stats = [
    { value: 1000, label: "Industries" },{ value: 20000, label: "Business Owners" },{ value: 2000, label: "Collaborations" },{ value: 1500, label: "Cups of Coffee" },
    ];
      const [counts, setCounts] = useState(stats.map(() => 0));
      useEffect(() => {
        const updateCounts = () => {
          stats.forEach((stat, index) => {
            let count = 0;
            const step = Math.ceil(stat.value / 100);
            const interval = setInterval(() => {
              count += step;
              if (count >= stat.value) {
                count = stat.value;
                clearInterval(interval);
              }
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                newCounts[index] = count;
                return newCounts;
              });
            }, 30);
          });
        };
        updateCounts();
      }, []);
  const slides = [
    {
        image: "https://www.betterup.com/hubfs/Marketing-manager-presenting-charts-on-screen-at-team-meeting-best-jobs-with-business-degree.jpg",
        text: "Welcome to Tech Track—where careers take off",
      },
      {
        image: "https://images.businessnewsdaily.com/app/uploads/2022/04/04081920/1554239632.jpeg",
        text: "Browse thousands of jobs, apply instantly!",
      },
      {
        image: "https://cssanimation.io/blog/wp-content/uploads/2023/09/Teamwork-And-Collaboration-How-To-Improve-Both-At-Work-1.jpg",
        text: "Connecting talent with the right opportunities.",
      },
  ];
  const features = [
    {
        title: "Search Jobs",
        description: "Explore thousands of job openings tailored for your skills.",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995578.png",
        bg: "#e6f7ff",
        iconBg: "#bfe7ff",
      },
      {
        title: "Company Insights",
        description: "Get detailed reviews and ratings from current employees.",
        img: "https://cdn-icons-png.flaticon.com/512/2942/2942975.png",
        bg: "#fff4e6",
        iconBg: "#ffd8a8",
      },
      {
        title: "Career Guidance",
        description: "Empowering choices for a successful and fulfilling career.",
        img: "https://cdn-icons-png.flaticon.com/512/1009/1009750.png",
        bg: "#f3e9ff",
        iconBg: "#dab6ff",
      },
  ];

  const testimonials = [
    {
      name: "SMRITHI",
      title: "CEO",
      message: "I had the pleasure of attending the ConnectLocal Business Mixer organized by Busitron...",
      image: "https://img.freepik.com/premium-photo/ai-generated-image_425671-1024.jpg",
    },
    {
      name: "SHAIK ZOBAIN",
      title: "Director",
      message: "I've been a member of Busitron, and I've watched it evolve into a dynamic community...",
      image: "https://photogov-com.akamaized.net/examples/original/US.webp",
    },
    {
      name: "ROBERT KEN",
      title: "Entrepreneur",
      message: "As a business owner, I understand the importance of networking...",
      image: "https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg",
    },
    {
        name: "STELLA",
        title: "CHAIR MAN",
        message: "I had the pleasure of attending the ConnectLocal Business Mixer organized by Busitron...",
        image: "https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_passport_photo_maker_s1_img_B_03_e36320bb65.jpg",
      },
      {
        name: "DAVID",
        title: "MANAGER",
        message: "I've been a member of Busitron, and I've watched it evolve into a dynamic community...",
        image: "https://img.freepik.com/premium-photo/passport-photo-man-caucasian-businessman-professional-attire-with-smile_817921-61353.jpg",
      },
      {
        name: "VICTORIA",
        title: "HR",
        message: "As a business owner, I understand the importance of networking...",
        image: "https://t3.ftcdn.net/jpg/09/32/35/34/360_F_932353445_OIRADHDiBnifmdIbL0EhuqjHT8wlnaME.jpg",
      },
  ];


  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" style={{ backgroundColor: "rgb(228, 45, 64)", marginBottom: "10px", marginTop: "-15px" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: "Times New Roman" }}>TechTrack</Typography>

          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'block', sm: 'none' } }} // Show only on mobile
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Buttons */}
          <Button
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'block' } }} // Hide on mobile
            onClick={() => navigate('/Companylogin')}
          >
            Become a Partner
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'block' } }} // Hide on mobile
            onClick={() => navigate('/Userlogin')}
          >
            Apply for Job
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => navigate('/Companylogin')}>
            <ListItemText primary="Become a Partner" />
          </ListItem>
          <ListItem button onClick={() => navigate('/Userlogin')}>
            <ListItemText primary="Apply for Job" />
          </ListItem>
        </List>
      </Drawer>


      {/* Slider */}
      <Carousel >
      {slides.map((s,i) => (
            <Carousel.Item key={i}>
              <img src={s.image} alt={`Slide ${i + 1}`} style={{ width: "100%", height: "60vh" }} />
              <Carousel.Caption style={{color:"white",fontSize:"20px",textShadow:"2px 2px 5px black"}}>{s.text.toLocaleUpperCase()}</Carousel.Caption>
            </Carousel.Item>
          ))}
    </Carousel>

      {/* Features */}
      
      <Container style={{ marginTop: "40px", textAlign: "center" ,paddingBottom:"30px"}}>
        <Typography variant="h4" gutterBottom sx={{ animation: "colorChange 3s infinite",}}>Explore Career Opportunities</Typography>
        <style>
        {`
          @keyframes colorChange {
            0% {color: rgb(71, 221, 255)}
            50% {color:rgb(255, 151, 71); /* Change to a different color (e.g., Tomato) */}
            100% {color:rgb(212, 55, 230);
          }
        `}
      </style>
        <Typography variant="body1" paragraph>
          Discover exciting job openings and career insights to take your professional journey to the next level.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {features.map((f, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper elevation={3} sx={{ py: 4, px: 2, backgroundColor: f.bg, borderRadius: 4, textAlign: "center" }}>
                <Box sx={{ width: 60, height: 60, backgroundColor: f.iconBg, borderRadius: "50%", mx: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={f.img} alt={f.title} style={{ width: "40px" }} />
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>{f.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{f.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container >

      <Container sx={{ py: 6, backgroundColor: '#f8f9fa' ,marginBottom:"20px"}}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          fontFamily: "'Roboto', sans-serif",
          color: '#333',
        }}
      >
        What We Are
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <img
              src="https://www.mckissock.com/wp-content/uploads/2018/04/blog_image_career-opportunities-real-estate@2x.jpg"
              alt="What We Do"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 'bold',
              color: '#555',
              mb: 2,
            }}
          >
            Comprehensive TechTrack Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: '16px',
              fontFamily: "'Roboto', sans-serif",
              color: '#555',
            }}
          >
We are a leading job portal dedicated to connecting job seekers and employers across diverse industries, including Software & Digital careers, HR, and Non-IT sectors. Our platform serves as a bridge between talented professionals and businesses seeking to build exceptional teams. With a mission to empower careers and strengthen organizations, we provide a seamless and intuitive experience for users to explore job opportunities, post vacancies, and access valuable career insights.<br></br>

Our advanced search tools and AI-driven algorithms efficiently match candidates with the right roles, ensuring Software & Digital professionals find cutting-edge opportunities, HR specialists connect with dynamic teams, and Non-IT professionals secure positions in industries like healthcare, manufacturing, and finance. Employers gain access to a diverse pool of qualified candidates, helping them find the perfect fit for their teams.<br></br>
At our core, we are committed to fostering a transparent, efficient, and supportive ecosystem where:<br></br>

<b>Software & Digital</b> professionals can advance in tech-driven roles.<br></br>
<b>HR</b> experts can connect with top companies and lead recruitment strategies.<br></br>
<b>Non-IT</b> professionals can explore diverse career paths in thriving industries.<br></br>
Whether you're a fresh graduate stepping into the job market, an experienced professional looking for a career change, or an organization seeking top-tier talent, we are here to make your journey smoother, faster, and more rewarding.
          </Typography>
        </Grid>
      </Grid>
    </Container>
     {/* WHAT CUSTOMERS SAY */}
     <Box textAlign="center" py={5} sx={{ backgroundColor: "rgb(224, 156, 157)" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 3,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 2,
            backgroundColor: "#FFD700",
          },
        }}
      >
        WHAT CUSTOMERS SAY
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? 0 : 2,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {[-1, 0, 1].map((offset) => {
          const index = (currentIndex + offset + testimonials.length) % testimonials.length;
          return (
            <Card
              key={index}
              elevation={3}
              sx={{
                maxWidth: 300,
                p: 3,
                textAlign: "center",
                borderRadius: "12px",
                transform: offset === 0 ? "scale(1.1)" : isMobile ? "scale(1)" : "scale(0.9)",
                boxShadow: offset === 0 ? "0px 6px 20px rgba(0,0,0,0.3)" : undefined,
                opacity: offset === 0 || isMobile ? 1 : 0.6,
                transition: "all 0.3s",
                display: isMobile && offset !== 0 ? "none" : "block",
              }}
            >
              <Avatar
                src={testimonials[index].image}
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {testimonials[index].name}
              </Typography>
              <Typography sx={{ color: "#FFD700", mb: 2 }}>{testimonials[index].title}</Typography>
              <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#555" }}>
                {testimonials[index].message}
              </Typography>
            </Card>
          );
        })}
      </Box>
      <Box mt={3} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {[-1, 1].map((step) => (
          <IconButton
            key={step}
            onClick={() => handleChange(step)}
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "#000",
              color: "#FFF",
              "&:hover": { backgroundColor: "#FFD700" },
            }}
          >
            {step === -1 ? <ArrowBack /> : <ArrowForward />}
          </IconButton>
        ))}
      </Box>
    </Box>

    {/* blackbar */}
    <Box sx={{ backgroundColor: "#222", py: 5, marginBottom: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#fff", fontSize: { xs: "24px", sm: "32px" } }}
            >
              {counts[index]}+
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#ccc", fontSize: { xs: "16px", sm: "18px" } }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
           {/* Header */}
           <Box
             sx={{
               textAlign: "center",
            //    backgroundColor: "#f5f5f5",
               padding: "16px",
               borderRadius: "8px",
            //    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
             }}
           >
             <Typography
               variant="h4"
               sx={{
                 fontWeight: "bold",
                 fontFamily: "Arial, sans-serif",
                 color: "#333",
                 animation: "colorChange 3s infinite", // Apply animation
               }}
             >
               About Us
             </Typography>
             <style>
        {`
          @keyframes colorChange {
            0% {color: rgb(71, 221, 255)}
            50% {color:rgb(255, 71, 135); /* Change to a different color (e.g., Tomato) */}
            100% {color:orange ;}
          }
        `}
      </style>
           </Box>
     
           {/* Content Section */}
           <Box sx={{ mt: 4, textAlign: "center" }}>
             <Typography
               variant="body1"
               sx={{
                 fontSize: "18px",
                 lineHeight: "1.8",
                 fontFamily: "'Roboto', sans-serif",
                 color: "#555",
               }}
             >
               
             </Typography>
           </Box>
     
           {/* Yellow Shaded Box */}
           <Box
             sx={{
               mt: 4,
               marginTop:"-20px",
               marginBottom:"10px",
            //    backgroundColor: "#fff9c4",
               padding: "16px",
               borderRadius: "8px",
               textAlign: "center",
            //    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
             }}
           >
             <Typography
               variant="body2"
               sx={{
                 mt: 1,
                 fontFamily: "'Georgia', serif", // Changed font style
                 color: "#666",
                 lineHeight: "1.8",
               }}
             >
TechTrack is a dynamic and innovative career platform dedicated to connecting job seekers with top employers across Software & Digital, HR, and Non-IT industries. With a deep commitment to empowering careers and businesses, we offer a wide range of services, including job postings, resume-building, career consultation, and skill development resources.
Our team of industry experts ensures a personalized and seamless experience, helping professionals navigate the job market efficiently. Whether you are an IT professional seeking the latest tech roles, an HR specialist looking for strategic opportunities, or a Non-IT expert exploring diverse career paths, we provide the right tools and insights to support your journey.
             </Typography>
           </Box>
 {/* footer */}
 <Box sx={{backgroundColor: "rgb(228, 45, 64)", color: "#fff", py: 4, px: 2 }}>
    <Grid container justifyContent="space-evenly" alignItems="flex-start">
      {/* Company Details */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Company Details
        </Typography>
        <Typography>TechTrack Co.</Typography>
        <Typography>Building Dreams, for correct job.</Typography>
        <Typography>www.TechTrack.com</Typography>
      </Grid>

      {/* Contact Info */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Info
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn sx={{ mr: 1 }} /> <Typography>123 TechTrack Ave, City, Country</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Email sx={{ mr: 1 }} /> <Typography>contact@TechTrack.com</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Phone sx={{ mr: 1 }} /> <Typography>+1 234-567-8900</Typography>
        </Box>
      </Grid>

      {/* Social Links */}
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Social Links
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: 2,
          }}
        >
          {[
            { icon: <Facebook />, link: "https://facebook.com", color: "#1877F2" },
            { icon: <Twitter />, link: "https://twitter.com", color: "#1DA1F2" },
            { icon: <Instagram />, link: "https://instagram.com", color: "linear-gradient(45deg, #FF0099, #FF9933)" },
            { icon: <LinkedIn />, link: "https://linkedin.com", color: "#0077B5" },
          ].map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  backgroundColor: platform.color.includes("gradient") ? undefined : platform.color,
                  background: platform.color.includes("gradient") ? platform.color : undefined,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: "#fff",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.2)",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                {platform.icon}
              </Box>
            </a>
          ))}
        </Box>
      </Grid>
    </Grid>

    {/* Footer Text */}
    <Typography variant="body2" sx={{ textAlign: "center", mt: 4 }}>
      © 2023 All Rights Reserved By TechTrack Co.
    </Typography>
  </Box>

    </>
  );
};

export default LandingPage;