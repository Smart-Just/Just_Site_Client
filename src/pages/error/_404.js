import {useNavigate} from "react-router-dom";

const _404 = () => {
  const naviage = useNavigate();

  return<>
    404 NOT FOUND
    <button onClick={()=>naviage("/")} > 홈으로 돌아가기 </button>
  </>
}

export default _404