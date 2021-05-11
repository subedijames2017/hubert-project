import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Vaichel = React.lazy(() => import("./views/vaichel/Vaichel"));
const VaichelList = React.lazy(() => import("./views/vaichel/VaichelList"));

const VaichelImport = React.lazy(() => import("./views/vaichel/VaichelImport"));

const TravellRoute = React.lazy(() =>
  import("./views/travell-route/TravellRoute")
);
const RouteList = React.lazy(() => import("./views/travell-route/RouteList"));
const RouteBulkImport = React.lazy(() =>
  import("./views/travell-route/RouteBulkImport")
);

const HotelResturant = React.lazy(() =>
  import("./views/hotel-resturant/HotelResturant")
);
const HotelResturantList = React.lazy(() =>
  import("./views/hotel-resturant/HotelResturantList")
);
const HotelResturantImport = React.lazy(() =>
  import("./views/hotel-resturant/HotelResturantImport")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/route/list", name: "Route List", component: RouteList },
  { path: "/route/add", name: "Add Route", component: TravellRoute },
  { path: "/route/import", name: "Import Routes", component: RouteBulkImport },
  { path: "/vaichel/list", name: "Vaichels List", component: VaichelList },
  { path: "/vaichel/add", name: "Addd Vaichel", component: Vaichel },
  {
    path: "/vaichel/import",
    name: "Import Vaichels",
    component: VaichelImport,
  },
  { path: "/hotel/add", name: "Add Hotel", component: HotelResturant },
  { path: "/hotel/list", name: "Hotel List", component: HotelResturantList },
  {
    path: "/hotel/import",
    name: "Import Hotels",
    component: HotelResturantImport,
  },
];

export default routes;
