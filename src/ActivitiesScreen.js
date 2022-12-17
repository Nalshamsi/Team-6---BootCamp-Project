import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "./Provider/ActivityCard";

function ActivitiesScreen() {
  const url = "https://dummyjson.com/products?limit=10";
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
      .get(url)
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
    content = products.data.products.map((product) => (
      <div key={product.id}>
        <ActivityCard product={product} />
      </div>
    ));
  }
  return (
    <React.Fragment>
      <header className="d-flex justify-content-center py-3 mb-5"></header>

      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Activities</h1>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">{content}</div>
        </div>
      </main>

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

export default ActivitiesScreen;
