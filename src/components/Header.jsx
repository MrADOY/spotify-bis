import * as React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Path from "../constantes/Path";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = [
  { nom: "Musique", path: Path.MUSIQUE_PATH, secured: true },
  { nom: "Playlist", path: Path.MUSIQUE_PATH, secured: true },
  { nom: "Profil", path: Path.PROFIL, secured: true },
];
const titre = "SPOTIFY";

function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <PlayCircleOutlineIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {titre}
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages
                .filter(
                  (page) => !page.secured || (page.secured && isAuthenticated)
                )
                .map((page) => (
                  <MenuItem key={page?.nom} onClick={handleCloseNavMenu}>
                    <Button onClick={() => navigate(page?.path)}>
                      {page?.nom}
                    </Button>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <PlayCircleOutlineIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {titre}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter(
                (page) => !page.secured || (page.secured && isAuthenticated)
              )
              .map((page) => (
                <Button
                  key={page?.nom}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page?.path);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page?.nom}
                </Button>
              ))}
          </Box>

          {isAuthenticated ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Avatar alt={user?.name} src={user?.picture} />
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <LogoutIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => loginWithRedirect()}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Se connecter
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
