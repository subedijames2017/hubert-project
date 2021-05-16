import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CSpinner } from "@coreui/react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import ProductImage from "../../reusable/ProductImage";
import ProductInfo from "../../reusable/ProductInfo";
import { addToCart } from "../../_actions/user_actions";

export default function ProductDetail() {
  let params = useParams();
  const dispatch = useDispatch();
  const productId = params.productId;
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  return (
    <div className="postPage">
      {Product ? (
        <ProductImage detail={Product} />
      ) : (
        <CSpinner color="primary" className="spiner" />
      )}
    </div>
  );
}
