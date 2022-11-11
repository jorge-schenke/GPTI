//components/ProductList.js

import React from "react";
import ProductRow from "./ProductRow";

function ProductList({ remedios }) {
  return (
    <div className="container main-content" id="product-list">
      {remedios.map((remedio, index) => {
        if (remedio.price) {
          return (
            <ProductRow
              key={index}
              title={remedio?.title}
              source={remedio?.source}
              price={remedio?.price}
              image={remedio?.image}
              link={remedio?.link}
            />
          );
        }
      })}
    </div>
  );
}

export default ProductList;
