import React from "react";
import Homes from "../page/Homes";
import Information from "../page/Information";
import Statistic from "../page/Statistic";
export default function Content({ content }) {
  return (
      <>
        {content === "home" && <Homes />}
        {content === "information" && <Information />}
        {content === "statistic" && <Statistic />}
      </>
  );
}
