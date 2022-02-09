import React from "react";
import TopContent from "../../components/home/TopContent";
const Home =  () => {

  return <React.Fragment>
    <div className={"welcome"}>
      Just,<br/>
    </div>
    <div className={"dash-TopBox"}>
      <TopContent title={"현재 동아리 인원"} number={10} countType={"명"} />
      <TopContent title={"여태 동아리 인원"} number={50} countType={"명"} />
    </div>
    <div className={"dash-TopBox"}>
      <TopContent title={"이번 주 활동"} number={4} countType={"개"} />
      <TopContent title={"개설된 스터디"} number={2} countType={"팀"} />
    </div>
    <div className={"dash-TopBox"}>
      <TopContent title={"가장 가까운 행사"}/>
      <TopContent title={"IT대기업 취업 정보"} number={50} countType={"명"} />
    </div>

  </React.Fragment>
}

export default Home