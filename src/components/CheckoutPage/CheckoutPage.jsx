import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
import useStyles from "./styles";
import Box from "@mui/material/Box";
import Total from "../Total/Total";
import { useStateValue } from "../../StateProvider";
import logo from "../../assets/img/mlogo.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const CheckoutPage = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <Fragment>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            {basket?.map((item) => (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CheckoutCard key={item.id} product={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fragment>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div className={classes.title}>
          <div className={classes.cart}>
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
          </div>
          <div>
            <Typography align="center" gutterBottom variant="h2">
              Shopping Cart
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={8} container spacing={2}>
        <FormRow />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align="center" gutterBottom variant="h4">
          <Total />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
