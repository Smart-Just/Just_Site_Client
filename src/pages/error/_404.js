import {useNavigate} from "react-router-dom";

const _404 = () => {
  const naviage = useNavigate();

  return<>
    404 NOT FOUND<br/>
    준비중이거나 없는 페이지 입니다.<br/>
    <button onClick={()=>naviage("/")} > 홈으로 돌아가기 </button>
  </>
}

export default _404