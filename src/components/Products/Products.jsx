import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "../Product/Product";
import useStyles from "./styles";
import products from "../../product-data";

export default function Products() {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
