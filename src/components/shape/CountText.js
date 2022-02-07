import React, {useEffect, useRef, useState} from "react";
const CountText = ({number, countType}) => {

  const [parentHeight, setParentHeight] = useState("");
  const textRef = useRef(null);

  useEffect(()=>{
    const parentHeight = parseInt(textRef.current.parentNode.style.height.toString().replace("px",""))
    setParentHeight(parentHeight.toString() + "px")
  },[])
  return <React.Fragment>
    <p style={{lineHeight:parentHeight}} ref={textRef} className={"countTypeText"}> <b>{number}</b>{countType} </p>
  </React.Fragment>
}

export default CountText;