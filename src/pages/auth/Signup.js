import {useNavigate} from "react-router-dom"
import {ArrowLeft} from "react-feather";

const Signup = () => {
  const naviage = useNavigate();

  const handleSignIn = () => {

  }

  return<div className={"signupWrap"}>
    <ArrowLeft className={"ArrowLeft"} onClick={()=>naviage("/auth/signin")}/>
    <p>
      아래 폼을 작성해주시기 바랍니다.
    </p>
    <form className={'authInput'}>
      <input type={"text"} placeholder={"학번"} />
      <input type={"text"} placeholder={"이름"} />
      <input type={"password"} placeholder={"비밀번호"} />
      <input type={"password"} placeholder={"비밀번호 확인"} />
    </form>
    <div className={"signUpArea"}>
      <p><a onClick={handleSignIn}>회원가입</a></p>
    </div>
  </div>
}

export default Signup