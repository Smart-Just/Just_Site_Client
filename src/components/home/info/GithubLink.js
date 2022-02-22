const GithubLink = ({github}) => {

  const handleGoGithub = ()=>{
    window.open(github.link)
  }

  return<div className={"githubLink"} onClick={handleGoGithub}>
    <img src={"/image/github.png"} />
    <div>
      <p>{github.name} - Overview</p>
      <p>Hello, {github.name} has {github.repo} repositories. Follow their code on Github</p>
      <p>{github.link}</p>
    </div>
  </div>
}
export default GithubLink;