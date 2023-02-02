import accounting from "accounting";
import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";

const Total = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Total items:
      </Typography>
      <Typography gutterBottom variant="h4">
        3
      </Typography>
      <Typography gutterBottom variant="h4">
      {accounting.formatMoney(50, "€")}
      </Typography>
      <Button className={classes.button} variant="contained" color="secondary">
        Checkout
      </Button>
    </div>
  );
};

export default Total;
