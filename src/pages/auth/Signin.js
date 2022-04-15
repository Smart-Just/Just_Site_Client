import {useNavigate} from "react-router-dom"
import {ArrowLeft} from "react-feather";
import {useRef} from "react";
const Signin = () => {
  const naviage = useNavigate();
  const wrapRef = useRef(null);

  const handleLogin = () => {
    console.log("123123")
  }
  const handleGoSignUp = () =>{
    wrapRef.current.style.animation = "SignIntoSignup 1s forwards"
     setTimeout(()=>{
       naviage("/auth/signup")
     },1000)
  }
  return<div ref={wrapRef} className={"signinWrap"}>
    <ArrowLeft className="ArrowLeft" onClick={()=>naviage("/")}/>
    <p><b>JUST</b> 동아리 페이지에 오신걸 환영합니다.</p>
    <form className={"authInput"} onSubmit={handleLogin}>
      <input type={"text"} placeholder={"학번"} />
      <input type={"password"} placeholder={"비밀번호"} />
      <input type={"submit"} value={"로그인"} />
    </form>
    <div className={"signinArea"}>
      <p>아직 회원이 아니신가요? <a onClick={handleGoSignUp}>회원가입</a>하러가기 </p>
    </div>
  </div>
}

export default Signin