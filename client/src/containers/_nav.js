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
      text: "NEW"
    }
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Product",
    route: "/product",
    icon: "route",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Product",
        to: "/product/list"
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Products",
        to: "/product/add"
      }
    ]
  }
];

export default _nav;
