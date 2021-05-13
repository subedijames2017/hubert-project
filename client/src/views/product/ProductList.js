import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CImg
} from "@coreui/react";
import SearchFeature from "../../reusable/SearchFeature";

export default function ProductList() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);

  const [Filters, setFilters] = useState({
    continents: [],
    price: []
  });
  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit
    };

    getProducts(variables);
  }, []);
  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };
  const renderCards = Products.map((product, index) => {
    return (
      <CCol xs="12" sm="6" md="3">
        <CCard>
          <CCardBody>
            <CImg
              src={`http://localhost:5000/${product.images[0]}`}
              fluid
              className="mb-2"
              width="200"
              height="150"
            />
            <p>{product.title}</p>
            <strong>{`Rs.${product.price}`}</strong>
            <p>{product.description}</p>
          </CCardBody>
        </CCard>
      </CCol>
    );
  });
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <SearchFeature refreshFunction={updateSearchTerms} />
        </CCol>
      </CRow>
      <CRow>{renderCards}</CRow>
    </>
  );
}
