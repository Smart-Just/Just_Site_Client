import {useEffect, useState} from "react";
import {memberList} from "../../../util/dummydata/MemberList";
import InfoMemeberCard from "../../../components/home/info/InfoMemeberCard";

const Member = () => {

  const [isMemberList , setMemberList] = useState([]);

  useEffect(()=>{
    setMemberList(memberList)
  },[])

  return<>
    <div className={"memberList"}>
      {
        isMemberList.map((member,idx)=>{
          return <InfoMemeberCard member={member} key={idx} />
        })
      }
    </div>
  </>
}
export default Member;