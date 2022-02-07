import {useRoutes} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/default/Home";
import {useEffect} from "react";
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
        {index : true , element:<Home />}
      ]
    }
  ])
}

export default App;
