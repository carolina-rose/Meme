import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, NavLink } from "react-router-dom";
import { FcCommandLine } from "react-icons/fc";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  Navlink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold"
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IT MeMes <FcCommandLine />
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick("/hot")}>Hot</MenuItem>
                <MenuItem onClick={() => handleMenuClick("/regular")}>
                  Regular
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/favourites")}>
                  Favourites
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <NavLink
                className={classes.Navlink}
                to="/hot"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                HOT
              </NavLink>
              <NavLink
                className={classes.Navlink}
                to="/regular"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                REGULAR
              </NavLink>
              <NavLink
                className={classes.Navlink}
                to="/favourites"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                FAVOURITES
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
