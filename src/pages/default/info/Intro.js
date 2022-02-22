import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";

import termsMarkDown from './markdown/Intro.md';

const Intro = () => {

  const [isMarkDown , setMarkDown] = useState(null )

  useEffect(()=>{
    fetch(termsMarkDown).then((response)=>response.text()).then((text)=>{
      setMarkDown(text);
    })
  },[])

  return <article className={"markdown"}>
    <ReactMarkdown>
      {isMarkDown}
    </ReactMarkdown>
  </article>
}

export default Intro;