import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

import termsMarkDown from './markdown/History.md'

const Event = () => {
  const [isMarkDown , setMarkDown] = useState(null )

  useEffect(()=>{
    fetch(termsMarkDown).then((response)=>response.text()).then((text)=>{
      setMarkDown(text);
    })
  },[])

  return<article className={"markdown"}>
    <ReactMarkdown>
      {isMarkDown}
    </ReactMarkdown>
  </article>
}

export default Event;