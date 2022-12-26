import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard";

function Activites() {
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
    <div>
      <h1 className="font-bold text-2xl mb-3">My Activites</h1>
      {content}
    </div>
  );
}
export default Activites;

// id } = useParams
// const
// const url = 'https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/${id}'
// const [product, setProduct ] - useState({
// loading: false,
// data: null,
// error: false
// })
// let content = null
// useEffect(()
// setProduct ({
// loading: true,
// data: null,
// error: false
// })
// axios.get(url)
//  then( (response =
//     setProduct ({
//         loading: false,
//         data: response. data,
//         error: false
//     })
// })
//  .catch(()
//     setProduct
//         loading: false,
//         data: null,
