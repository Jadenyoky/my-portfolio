import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AlternateEmail,
  ArrowBackIos,
  BarChart,
  Brightness4,
  Brightness7,
  Collections,
  Equalizer,
  Facebook,
  Home,
  Instagram,
  MenuOpen,
  Twitter,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Quran from "./Images/quran.png";
import Poke from "./Images/pokemon.png";
import Yugi from "./Images/yugi.png";
import todo from "./Images/todolist.png";
import _ from "lodash";
import { useLocation } from "react-router-dom";

const App = () => {
  // Store mode in localstorage
  const [mode, setmode] = useState(
    localStorage.getItem("mode") === null
      ? "light"
      : localStorage.getItem("mode") === "light"
      ? "light"
      : "dark"
  );

  // change mode and create custom colors
  const theme = createTheme({
    palette: {
      mode: mode,

      ...(mode === "light"
        ? {
            primary: {
              main: "#4A235A",
            },
          }
        : {
            secondary: {
              main: "#2d3033",
            },
            primary: {
              main: "#272727",
            },
          }),
    },
  });

  // Array of Objects For Navigator List
  const navList = [
    {
      name: "Home",
      to: "#home",
      icon: <Home />,
    },
    {
      name: "Skills",
      to: "#skills",
      icon: <BarChart />,
    },
    {
      name: "Portfolio",
      to: "#portfolio",
      icon: <Collections />,
    },
    {
      name: "Contact",
      to: "#contact",
      icon: <AlternateEmail />,
    },
  ];

  // Array of Objects For Portfolio List
  const portfolioList = [
    {
      name: "Quran",
      to: "https://quran-114.web.app",
      pic: Quran,
      eff: "quran",
    },
    {
      name: "Pokemon Api",
      to: "https://poke-242.web.app",
      pic: Poke,
      eff: "poke",
    },
    {
      name: "Yugi Api",
      to: "https://yugi-0.web.app",
      pic: Yugi,
      eff: "yugi",
    },
    {
      name: "To Do List",
      to: "https://todolist44024.web.app",
      pic: todo,
      eff: "todo",
    },
  ];

  // Array of Objects For Social List
  const socialList = [
    {
      icon: (
        <Facebook
          sx={{
            fontSize: "40px",
          }}
        />
      ),
      to: "https://www.facebook.com/jaden.yoky2014",
    },
    {
      icon: (
        <Twitter
          sx={{
            fontSize: "40px",
          }}
        />
      ),
      to: "https://twitter.com/JadenYoky",
    },
    {
      icon: (
        <Instagram
          sx={{
            fontSize: "40px",
          }}
        />
      ),
      to: "https://www.instagram.com/jadenyoky",
    },
  ];

  // Use to Scroll to Section in The Page
  const location = useLocation();

  // Use to Change Menu Icon From Width 800 px
  const [changeIcon, setchangeIcon] = useState(false);

  // Use to Print The Current Year
  const year = new Date().getFullYear();

  //Scroll to Top
  window.onscroll = () => {
    const toTop = document.querySelector(".toTop");
    const skills = document.querySelector(".skillNumber");
    const portfolio = document.querySelector(".portfolioNumber");

    if (window.scrollY === 0) {
      toTop.style.transform = "translateY(200%)";
    } else if (window.scrollY > 200) {
      toTop.style.transform = "translate(0)";
    }

    if (window.scrollY + 600 > skills.offsetTop) {
      skills.style.transform = "translateX(0)";
      skills.style.opacity = "1";
    } else {
      skills.style.transform = "translateX(-50%)";
      skills.style.opacity = "0";
    }

    if (window.scrollY + 600 > portfolio.offsetTop) {
      portfolio.style.transform = "translateX(0)";
      portfolio.style.opacity = "1";
    } else {
      portfolio.style.transform = "translateX(50%)";
      portfolio.style.opacity = "0";
    }
  };

  return (
    // For The Theme Get Full All Sections in The Page
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* The NavBar Section and Menu */}
      <Box>
        <AppBar color="secondary">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              className="menuButton"
              color="warning"
              variant="contained"
              onClick={() => {
                if (changeIcon === false) {
                  const menuHidden = document.querySelector(".menuHidden");
                  const highlight = document.querySelector(".highlight");

                  setchangeIcon(!changeIcon);

                  menuHidden.classList.add("menuShow");
                  highlight.classList.add("highlightShow");

                  menuHidden.classList.remove("menuHidden2");
                  highlight.classList.remove("highlightHidden");
                } else {
                  const menuHidden = document.querySelector(".menuHidden");
                  const highlight = document.querySelector(".highlight");

                  menuHidden.classList.add("menuHidden2");
                  highlight.classList.add("highlightHidden");

                  setchangeIcon(!changeIcon);
                }
              }}
            >
              {changeIcon === true ? (
                <MenuOpen
                  sx={{
                    fontSize: "30px",
                    transform: "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              ) : (
                <MenuOpen
                  sx={{
                    fontSize: "30px",
                    transform: "rotate(180deg)",
                    transition: "0.3s",
                  }}
                />
              )}
            </Button>

            <Typography
              noWrap
              variant="h5"
              sx={{
                flexGrow: "1",
              }}
            >
              MY PORTFOLIO
            </Typography>

            {/* Menu To Width > 800 px */}
            {navList.map((e, k) => {
              return (
                <Link key={k} href={e.to} className="navLink">
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid transparent",
                      bgcolor: location.hash === e.to ? "white" : null,
                      color: location.hash === e.to ? "black" : "white",
                      "&:hover": {
                        border: "1px solid white",
                        bgcolor: "white",
                        color: "black",
                      },
                    }}
                    startIcon={e.icon}
                    size="large"
                  >
                    {e.name}
                  </Button>
                </Link>
              );
            })}

            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                setmode(theme.palette.mode === "light" ? "dark" : "light");
              }}
            >
              {mode === "light" ? (
                <Brightness4
                  sx={{
                    fontSize: "30px",
                  }}
                />
              ) : (
                <Brightness7
                  sx={{
                    fontSize: "30px",
                  }}
                />
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Menu and Highlight To Width < 800 px */}
      <div
        className="highlight"
        onClick={() => {
          const menuHidden = document.querySelector(".menuHidden");
          const highlight = document.querySelector(".highlight");
          menuHidden.classList.add("menuHidden2");
          highlight.classList.add("highlightHidden");
          setchangeIcon(!changeIcon);
        }}
      ></div>
      <div className="menuHidden">
        {navList.map((e, k) => {
          return (
            <Link key={k} href={e.to} style={{}}>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "0",
                  bgcolor: location.hash === e.to ? "white" : null,
                  color: location.hash === e.to ? "black" : "white",
                  "&:hover": {
                    border: "1px solid white",
                    bgcolor: "white",
                    color: "black",
                  },
                }}
                startIcon={e.icon}
                size="large"
              >
                {e.name}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* The Home Section */}
      <Box id="home">
        <Container
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100% !important",
            color: "white",
            bgcolor: "secondary.main",
          }}
        >
          <Typography variant="h3" textAlign="center">
            Hello There!
            <br /> <br />
            <span
              style={{
                color: "yellow",
              }}
            >
              I'm Jaden ,
            </span>
            <br />
            <span
              style={{
                color: "yellow",
              }}
            >
              Front-End DEV ,
            </span>
          </Typography>
          <Grid
            sx={{
              position: "absolute",
              bottom: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            component={Link}
            href="#skills"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                color: "white",
                opacity: "0.5",
              }}
            >
              Scroll
            </Button>
            <ArrowBackIos className="scrollingOne" />
            <ArrowBackIos className="scrollingTwo" />
          </Grid>
        </Container>
      </Box>

      {/* The Skills Section */}
      <Box
        id="skills"
        sx={{
          minHeight: "100vh",
          bgcolor: "secondary.main",
          padding: "30px 20px",
        }}
      >
        <Toolbar />
        <Typography
          className="skills"
          mb={2}
          variant="h3"
          textAlign="center"
          color="white"
          sx={{
            overflow: "hidden",
          }}
        >
          S K I L L S
        </Typography>
        <Divider
          sx={{
            bgcolor: "white",
            opacity: "0.4",
          }}
        />
        <Container
          className="skillNumber"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
            gap: "20px",
            transform: "translateX(-50%)",
            opacity: "0",
          }}
        >
          <Typography
            className="skillOne"
            variant="h4"
            sx={{
              bgcolor: "#FF4F00",
              color: "white",
              padding: "20px",
              borderRadius: "100px",
            }}
          >
            HTML
          </Typography>
          <Typography
            className="skillTwo"
            variant="h4"
            sx={{
              bgcolor: "#FFB800",
              color: "white",
              padding: "20px",
              borderRadius: "100px",
            }}
          >
            CSS
          </Typography>
          <Typography
            className="skillThree"
            variant="h4"
            sx={{
              bgcolor: "#7F00FF",
              color: "white",
              padding: "20px",
              borderRadius: "100px",
            }}
          >
            JavaScript
          </Typography>
          <Typography
            className="skillFour"
            variant="h4"
            sx={{
              bgcolor: "#00D2FF",
              color: "white",
              padding: "20px",
              borderRadius: "100px",
            }}
          >
            React
          </Typography>
          <Typography
            className="skillFive"
            variant="h4"
            textAlign="center"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              padding: "20px",
              borderRadius: "100px",
            }}
          >
            Still Learning More!
          </Typography>
        </Container>
      </Box>

      {/* The Portfolio Section */}
      <Box
        id="portfolio"
        sx={{
          padding: "30px 20px",
          bgcolor: "primary.main",
          overflow: "hidden",
        }}
      >
        <Toolbar />
        <Typography
          className="portfolio"
          mb={2}
          variant="h3"
          textAlign="center"
          color="white"
        >
          P O R T F O L I O
        </Typography>
        <Divider
          sx={{
            bgcolor: "white",
            opacity: "0.4",
          }}
        />
        <Box
          className="portfolioNumber"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "40px ",
            transform: "translateX(50%)",
            opacity: "0",
          }}
        >
          {/* Use Lodash to Shuffle The Objects in Portfolio List */}
          {_.shuffle(portfolioList).map((e, k) => {
            return (
              <Container
                key={k}
                className={e.eff}
                sx={{
                  height: "350px",
                  width: "350px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "20px",
                  borderRadius: "50px 50px",
                  boxShadow: "inset 0px 0px 20px ",
                  textShadow: "0 0 10px black",
                }}
              >
                <Typography variant="h5" color="white">
                  {e.name}
                </Typography>
                <img
                  src={e.pic}
                  alt="Portfolio Pics"
                  height="200px"
                  width="200px"
                />
                <Link href={e.to} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      transition: "0.1s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    className={e.eff}
                  >
                    Preview Live
                  </Button>
                </Link>
              </Container>
            );
          })}
        </Box>
      </Box>

      {/* The Contact Section and Social Links */}
      <Box
        id="contact"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150px",
          bgcolor: "secondary.main",
          gap: "20px",
        }}
      >
        {socialList.map((e, k) => {
          return (
            <Link key={k} href={e.to} target="_blank">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                }}
              >
                {e.icon}
              </Button>
            </Link>
          );
        })}
      </Box>

      <Typography
        variant="h6"
        bgcolor="primary.main"
        color="white"
        textAlign="center"
        padding={1}
      >
        Jaden Yoky © {year}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        className="toTop"
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        <ArrowBackIos
          sx={{
            transform: "rotate(90deg)",
            fontSize: "30px",
          }}
        />
      </Button>
    </ThemeProvider>
    // Here It's End Of The Page .. See You Later , Gone Away ..
  );
};

export default App;
