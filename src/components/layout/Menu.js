import {Link} from "react-router-dom";
import { Users, Briefcase , Edit3 , Activity, AlignJustify} from "react-feather";
import {useState} from "react";

const Menu = () => {
  const [menuWidth, setMenuWidth] = useState({
    "state" : false,
    "line-1" : "30px",
    "line-2" : "30px",
    "line-3" : "30px",
    "line-4" : "30px",
    "line-5" : "30px",
  })
  const [menuHeight , setMenuHeight] = useState("80px")
  const handleMenuClick = () => {
    if (menuWidth.state){
      setMenuWidth({
        "state" : false,
        "line-1" : "30px",
        "line-2" : "30px",
        "line-3" : "30px",
        "line-4" : "30px",
        "line-5" : "30px",
      })
      setMenuHeight("80px")
    }else{
      setMenuWidth({
        "state" : true,
        "line-1" : "25px",
        "line-2" : "10px",
        "line-3" : "20px",
        "line-4" : "15px",
        "line-5" : "23px",
      })
      setMenuHeight("550px")
    }
  }

  return <nav style={{height:menuHeight}}>
    <div className={"menuBtn"} onClick={handleMenuClick}>
      <div style={{width:menuWidth["line-5"]}}/>
      <div style={{width:menuWidth["line-4"]}}/>
      <div style={{width:menuWidth["line-3"]}}/>
      <div style={{width:menuWidth["line-2"]}}/>
      <div style={{width:menuWidth["line-1"]}}/>
    </div>
    <Link to={"/"}> <img src={"image/logo.png"} width={"80px"}/> </Link>
    <ul className={"DefaultSideMenu"}>
      <li><div><Users /> </div> <p>스터디 소개</p>
        <ul>
          <li> <Link to={"/"}> 목적 </Link> </li>
          <li> <Link to={"/"}> 역대 활동 </Link> </li>
          <li> <Link to={"/"}> 멤버 소개 </Link> </li>
        </ul>
      </li>
      <li><div><Briefcase /> </div> <p>기업 정보</p>
        <ul>
          <li> <Link to={"/"}> IT 대기업 </Link> </li>
          <li> <Link to={"/"}> 중소 & 스타트업 </Link> </li>
        </ul>
      </li>
      <li><div><Edit3 /> </div> <p>커뮤니티</p>
        <ul>
          <li> <Link to={"/"}> 정보공유 </Link> </li>
          <li> <Link to={"/"}> 대회 팀원 모집 </Link> </li>
          <li> <Link to={"/"}> Q&A </Link> </li>
        </ul>
      </li>
      <li><div><Activity /> </div> <p>활동</p>
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