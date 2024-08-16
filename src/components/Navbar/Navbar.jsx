import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import { Bio } from "../../constants/constants";
import "./Navbar.css";
import logoVideo from "../../assets/logo-video.mp4";

const pages = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Education", href: "#education" },
];

const settings = ["Github", "LinkedIn"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (setting) => {
    handleCloseUserMenu();
    if (setting === "Github") {
      window.open(Bio.github, "_blank");
    } else if (setting === "LinkedIn") {
      window.open(Bio.linkedin, "_blank");
    }
  };

  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      <Grid item xs={12}>
        <AppBar
          position="fixed"
          sx={{
            width: "100%", paddingX: { md: "6.5rem" }, display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            boxShadow: "none",
            fontSize: "1.25rem",
            color: "#0d0d0d",
            height: "80px",
          }}
        >
          <Container maxWidth="none">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <video autoPlay loop muted className="navbar-video">
                  <source src={logoVideo} type="video/mp4" />
                </video>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="navbar-logo"
              >
                {Bio.name}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                      <a
                        href={page.href}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography textAlign="center">{page.text}</Typography>
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="navbar-logo"
              >
                {Bio.name}
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      sx={{
                        marginRight: '1rem',
                        textTransform: 'capitalize',
                        fontSize: '1rem',
                        border: 'none',
                        '&:hover': {
                          color: '#baa4ee',
                        },
                        my: 2, color: "inherit", display: "block"
                      }}
                    >
                      {page.text}
                    </Button>
                  </a>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleMenuClick(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Navbar;
