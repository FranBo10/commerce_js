import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@material-ui/core";
import useStyles from "./styles";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "@mui/material";
import logo from "../../assets/img/mlogo.png";
import { useStateValue } from "../../StateProvider";

const handleLink = (e) => {
  console.log(e.target.value);
};

const Navbar = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img className={classes.logo} src={logo} />
            </IconButton>
          </Link>
          <Typography
            className={classes.title}
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ flexGrow: 1 }}
          >
            <div className={classes.grow} />
            Hello guest !
          </Typography>
          <div className="classes.button">
            <Button variant="outlined">
              <strong>Sign In</strong>
            </Button>
            <Link onClick={handleLink} to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
