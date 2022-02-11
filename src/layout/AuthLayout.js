import {Outlet} from "react-router-dom";
import LoginIllust from "../assets/resource/loginIllust.svg"
const AuthLayout = () =>{
  return <>
    <div className={"authBackground"}>
      <img src={LoginIllust} />
    </div>
    <div className={"loginForm"}>
      <img src={"/image/logo.png"} alt={"test"}/>
      <Outlet/>
    </div>
  </>
}

export default AuthLayout