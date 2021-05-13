import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Product = React.lazy(() => import("./views/product/Product"));
const ProductList = React.lazy(() => import("./views/product/ProductList"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/product/list", name: "Route List", component: Product },
  { path: "/product/add", name: "Add Route", component: ProductList }
];

export default routes;
