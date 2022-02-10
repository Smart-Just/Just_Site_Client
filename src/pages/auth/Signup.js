import {useNavigate} from "react-router-dom"
const Signup = () => {
  const naviage = useNavigate();

  return<>
    회원가입
    <button onClick={()=>naviage("/auth/signin")}> 로그인 </button>
  </>
}

export default Signup