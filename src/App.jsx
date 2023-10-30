import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import BottomNavbar from "./components/layout/BottomNavbar";
export default function App() {
  
  const [content, setContent] = useState("home");
  const handleNavClick = (page) => {
    setContent(page);
  };
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setIsDarkTheme(isChecked);
  };
  return (
    <div
      className="h-screen bg-base-200 p-3 overflow-y-hidden"
      data-theme={isDarkTheme ? "dark" : "light"}
    >
      <div className=" h-[calc(100vh-1.5rem)] flex flex-col">
        <Navbar onCheckboxChange={handleCheckboxChange} />
        <div className="flex-grow min-h-0 w-full max-w-3xl mx-auto bg-base-100 m-2 rounded-lg p-3">
          <Content content={content}></Content>
        </div>
        <BottomNavbar
          handleNavClick={handleNavClick}
          content={content}
        ></BottomNavbar>
      </div>
    </div>
  );
}
