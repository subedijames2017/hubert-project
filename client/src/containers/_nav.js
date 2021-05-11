import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Route",
    route: "/route",
    icon: "route",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add route",
        to: "/route/add",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List routes",
        to: "/route/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bulk import",
        to: "/route/import",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Vaichel",
    route: "/bus",
    icon: "bus",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Vaichel",
        to: "/vaichel/add",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Bust",
        to: "/vaichel/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bulk import",
        to: "/vaichel/import",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Hotel and resturent",
    route: "/hotel",
    icon: "hotel",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Hotels",
        to: "/hotel/add",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Hotels",
        to: "/hotel/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Bulk import",
        to: "/hotel/import",
      },
    ],
  },
];

export default _nav;
