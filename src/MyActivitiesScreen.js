import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from "@mui/material/Fab";
import { Grid } from "@material-ui/core";
import MyActivityCard from "./Provider/MyActivityCard";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    // color: "white",
    backgroundColor: "#297373",
    opacity: "70%",
  },
});

function MyActivitiesScreen() {
  const classes = useStyles();
  const url = "http://localhost:3001/activities/findMy";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .post(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    // content = <Loader></Loader>;
    content = <p>Loading...</p>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <Grid item xs={12} sm={6} md={3}>
        <div key={product.id}>
          <MyActivityCard product={product} />
        </div>
      </Grid>
    ));
  }
  const history = useHistory();
  function goToAddActivity() {
    history.push("/activity/add");
  }
  return (
    <React.Fragment>
      <header className="d-flex justify-content-center py-3 mb-5"></header>

      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">My Activities</h1>
              <Fab variant="extended" onClick={goToAddActivity}>
                <AddIcon sx={{ mr: 1 }} />
                Add New
              </Fab>
            </div>
          </div>
        </section>
        <Grid container spacing={1}>
          {content}
        </Grid>
      </main>

      {/* <Fab color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Fab> */}

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p className="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
            <a href="/docs/5.2/getting-started/introduction/">
              getting started guide
            </a>
            .
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default MyActivitiesScreen;
