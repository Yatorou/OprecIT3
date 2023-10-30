import React from "react";
import Content1 from "./content/Information/Content1";
import Content2 from "./content/Information/Content2";
import Content3 from "./content/Information/Content3";
export default function Information() {
  return (
    <div className=" bg-base-100 h-full w-full rounded-md carousel">
      <div className="carousel-item w-full">
        <Content1></Content1>
      </div>
      <div className="carousel-item w-full">
        <Content2></Content2>
      </div>
      <div className="carousel-item w-full">
        <Content3></Content3>
      </div>
    </div>
  );
}
