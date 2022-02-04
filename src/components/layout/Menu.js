import {Link} from "react-router-dom";
import { Users, Briefcase , Edit3 , Activity} from "react-feather";

const Menu = () => {
  return <nav>
    <Link to={"/"}> <p>Just</p> </Link>
    <ul className={"DefaultSideMenu"}>
      <li><div><Users /> </div>
        <ul>
          <li> <Link to={"/"}> 목적 </Link> </li>
          <li> <Link to={"/"}> 역대 활동 </Link> </li>
          <li> <Link to={"/"}> 멤버 소개 </Link> </li>
        </ul>
      </li>
      <li><div><Briefcase /> </div>
        <ul>
          <li> <Link to={"/"}> IT 대기업 </Link> </li>
          <li> <Link to={"/"}> 중소 & 스타트업 </Link> </li>
        </ul>
      </li>
      <li><div><Edit3 /> </div>
        <ul>
          <li> <Link to={"/"}> 정보공유 </Link> </li>
          <li> <Link to={"/"}> 대회 팀원 모집 </Link> </li>
          <li> <Link to={"/"}> Q&A </Link> </li>
        </ul>
      </li>
      <li><div><Activity /> </div>
        <ul>
          <li> <Link to={"/"}> 진행 프로젝트 </Link> </li>
          <li> <Link to={"/"}> 스터디 일정 </Link> </li>
          <li> <Link to={"/"}> 취업 현황 </Link> </li>
        </ul>
      </li>
    </ul>
  </nav>
}

/*
*
* 위에서부터
* 메인
* 소개
* 기업정보
* 커뮤니티
* 활동
* */

export default Menu;