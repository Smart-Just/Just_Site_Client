import React from "react";
import {postApi} from "../../util/ApiCallTest";
import {signup} from "../../util/dummydata/auth";
const Home =  () => {
  const handleCallApi = () => {
    postApi("/api/user", signup).then((doc)=> console.log(doc))
  }
  return <React.Fragment>
    <p> Home </p>
    <button onClick={handleCallApi}> apiCallTest </button>
  </React.Fragment>
}

export default Home