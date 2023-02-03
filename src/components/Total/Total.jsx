import accounting from "accounting";
import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Total items:
      </Typography>
      <Typography gutterBottom variant="h4">
        {basket?.length}
      </Typography>
      <Typography gutterBottom variant="h4">
        {accounting.formatMoney(getBasketTotal(basket), "€")}
      </Typography>
      <Button className={classes.button} variant="contained" color="secondary">
        Checkout
      </Button>
    </div>
  );
};

export default Total;
