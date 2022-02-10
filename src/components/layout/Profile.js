import {useState} from "react";
import {Link} from "react-router-dom";

const Profile = () => {

  const [loginState, setLoginState] = useState(false)
  const authData = {
    uid: 1,
    stuNumber: "202062010",
    stuName: "김남규"
  }

  return <div className={"loginUser"}>
    {
      loginState ? <LoginTrue data={authData}/> : <LoginFalse/>
    }
  </div>
}

const LoginFalse = () => {
  return <div className={"loginFalse"}>
    <Link to={"auth/signin"}>로그인</Link>
  </div>
}

const LoginTrue = ({data}) => {
  return <div className={"loginTrue"}>
    <Link to={"profile/"}>
      <img
        src={"https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o="}
        alt={"기본프로필"}/>
      <div>
        <p>202062010</p>
        <p>{data.stuName}</p>
      </div>
    </Link>
  </div>
}

export default Profile