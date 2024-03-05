import React from "react";
import { products } from "../data";
import { SingleProduct } from "./SingleProduct";

export const Products = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-evenly gap-2 p-3 bg-light">
        <h3 className="w-100 text-center m-3">Our Products</h3>
        {products.map((obj) => (
          <SingleProduct key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};
