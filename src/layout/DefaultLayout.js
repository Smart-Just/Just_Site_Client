import React from "react";
import {Outlet} from "react-router-dom"
import Menu from "../components/layout/Menu";

const DefaultLayout =  () => {
  return <React.Fragment>
    <Menu />
    <Outlet />
  </React.Fragment>
}

export default DefaultLayout