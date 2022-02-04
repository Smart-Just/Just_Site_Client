import React from "react";
import {Outlet} from "react-router-dom"
import Menu from "../components/layout/Menu";

const DefaultLayout =  () => {
  return <React.Fragment>
    <Menu />
    <div className={"defaultWarp"}>
      <Outlet />
    </div>
  </React.Fragment>
}

export default DefaultLayout