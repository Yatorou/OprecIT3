import React from "react";
import Content1 from "./content/Homes/content1";
import Content2 from "./content/Homes/content2";
import Content3 from "./content/Homes/Content3";
import Content4 from "./content/Homes/Content4";
import Content5 from "./content/Homes/Content5";
export default function Homes() {
  return (
    <div className="w-full h-full carousel rounded-box overflow-x-hidden ">
      <div id="1" className="carousel-item w-full">
        <Content1></Content1>
      </div>
      <div id="2" className="carousel-item w-full">
        <Content2></Content2>
      </div>
      <div id="3" className="carousel-item w-full">
        <Content3></Content3>
      </div>
      <div id="4" className="carousel-item w-full">
        <Content4></Content4>
      </div>
      <div id="5" className="carousel-item w-full">
        <Content5></Content5>
      </div>
    </div>
  );
}
