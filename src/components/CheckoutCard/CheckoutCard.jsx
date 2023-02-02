import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useStyles from "../CheckoutCard/styles";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";


export default function CheckoutCard({
  product: { id, name, productType, price, rating, image },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        style={{ minHeight: "40px", paddingTop: "56%" }}
        image={image}
        alt={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton aria-label="Delete Item">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
