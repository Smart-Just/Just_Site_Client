import React from "react";
import TopContent from "../../components/home/TopContent";
const Home =  () => {

  return <React.Fragment>
    <div className={"dash-TopBox"}>
      <TopContent title={"현재 동아리 인원"} number={10} countType={"명"} />
      <TopContent title={"여태 동아리 인원"} number={50} countType={"명"} />
    </div>
  </React.Fragment>
}

export default Home