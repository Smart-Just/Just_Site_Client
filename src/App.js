import {useRoutes} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/default/Home";
function App() {
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
