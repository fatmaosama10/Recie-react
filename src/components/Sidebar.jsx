import React from "react";
import recieImage from "../assets/recie.png"; // تأكد من صحة المسار وفقًا لهيكلة المشروع
import "./Sidebar.scss"; // رابط ملف SCSS

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg p-4 flex flex-col items-center relative">
      <div className="w-full flex justify-center mb-4">
        <img src={recieImage} alt="Logo" className="w-32 h-32 object-contain" />
      </div>

      <div className="flex flex-col space-y-4 px-4 bottom-4 w-full">
        <button className="button blue">Meals</button>
        <button className="button gray">Ingredients</button>
        <button className="button gray">Area</button>
      </div>
    </div>
  );
};

export default Sidebar;

