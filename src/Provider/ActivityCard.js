import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { format } from "date-fns";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  description: {
    color: "#39393A",
    marginBottom: 10,
  },
  titles: {
    fontWeight: "bold",
    color: "#297373",
  },
  texts: {
    paddingLeft: "5px",
  },
  button: {
    color: "white",
    backgroundColor: "#297373",
    opacity: "70%",
  },
});

function ActivityCard(props) {
  const classes = useStyles();

  var date = new Date(props.product.date);
  var formattedDate = format(date, "dd/MM/yyyy");
  return (
    <Card className={classes.root}>
      {/* <CardMedia
          className={classes.media}
          image={null}
          title="Contemplative Reptile"
        /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.product.title}
        </Typography>
        <Typography
          variant="body3"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {props.product.description}
        </Typography>
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.titles}
          >
            City:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.texts}
          >
            {props.product.city}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.titles}
          >
            Location:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.texts}
          >
            {props.product.location}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.titles}
          >
            Duration:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.texts}
          >
            {props.product.duration}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.titles}
          >
            Date:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.texts}
          >
            {formattedDate}
          </Typography>
        </div>
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" className={classes.button}>
          Apply
        </Button>
        {/* <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          View Applicants
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default ActivityCard;
