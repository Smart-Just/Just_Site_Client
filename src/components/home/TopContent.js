import RoundCardBox from "../shape/RoundCardBox";
import CountText from "../shape/CountText";
import React from "react";

const TopContent = ({
  title,
  number,
  countType
                    }) => {
  return<div>
    <p> {title} </p>
    <RoundCardBox height={50}>
      <CountText number={number} countType={countType} />
    </RoundCardBox>
  </div>
}
export default TopContent