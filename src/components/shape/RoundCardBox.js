const RoundCardBox = ({children, width, height}) => {

  const styled = {
    height : height.toString() + "px"
  }

  return <div className={"roundCardBox"} style={styled} >
    {children}
  </div>
}

export default RoundCardBox;