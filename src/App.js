import {useRoutes} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/default/Home";
import {useEffect} from "react";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import _404 from "./pages/error/_404";

function App() {
  useEffect(()=>{
    if(navigator.userAgent.toUpperCase().indexOf("CHROME") === -1){
      console.log("해당 사이트는 크롬에 최적화되어있습니다. 크롬을 이용해주세요.")
    }
  },[])

  return useRoutes([
    {
      path:"/",
      element: <DefaultLayout />,
      children : [
        {index : true , element:<Home />},
        {
          path : "intro",
          element: <Home />,
          children: [
            {index : true , element:<Home />},
          ]
        },
        {
          path : "company",
          element: <Home />,
          children: [
            {index : true , element:<Home />},
          ]
        },
        {
          path : "talk",
          element: <Home />,
          children: [
            {index : true , element:<Home />},
          ]
        },
        {
          path : "activity",
          element: <Home />,
          children: [
            {index : true , element:<Home />},
          ]
        },
      ]
    },
    {
      path : "auth",
      element : <AuthLayout />,
      children: [
        {path: "signin", element: <Signin />},
        {path: "signup", element: <Signup />}
      ]
    },
    {path:"*", element: <_404 />}
  ])

}

export default App;
