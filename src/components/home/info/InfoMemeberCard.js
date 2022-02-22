import GithubLink from "./GithubLink";

const InfoMemeberCard = ({member}) => {
  return<div className={'infoMemberCard'}>
    <img src={member.member_image} alt={"profileImage"} />
    <p className={"memberName"}> {member.member_name} </p>
    <div className={"jokey_permission"}>
      <p> {member.member_jockey}기 <span>{member.member_permission}</span> </p>
    </div>
    <p className={"memberEmail"}> {member.member_email} </p>
    <GithubLink github={member.member_github}/>
  </div>
}

export default InfoMemeberCard