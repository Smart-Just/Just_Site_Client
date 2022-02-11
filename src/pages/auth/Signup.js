import {useNavigate} from "react-router-dom"
const Signup = () => {
  const naviage = useNavigate();

  return<div className={"signupWrap"}>
    회원가입
    <button onClick={()=>naviage("/auth/signin")}> 로그인 </button>
  </div>
}

export default Signup