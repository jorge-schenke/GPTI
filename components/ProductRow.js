//components/ProductRow.js

import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from 'next/image';

const ProductRow = ({ image, title, source, price, link }) => {
  let priceFinal = "$" + price?.toString()
  return (
    <div className="row product">
      <div className="col-md-2">
        <Image src={image} alt={title} height="80" width="100" data-cy="image"/>
      </div>
      <div className="col-md-8 product-detail" data-cy="title">
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: source }} />
      </div>
      <div className="col-md-2 product-price" style={{ textAlign: "center" }} data-cy="price">
        {priceFinal}
        <br />
        <Link href={link} passHref data-cy="link">
          <Button variant="contained" color="secondary">
            Revisar remedio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductRow;
