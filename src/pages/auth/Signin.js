import {useNavigate} from "react-router-dom"
const Signin = () => {
  const naviage = useNavigate();

  return<>
    로그인
    <button onClick={()=>naviage("/auth/signup")}> 회원가입 </button>
  </>
}

export default Signin