import { useState } from "react";

const Sidebar = ({ setActiveTab }) => {
  const menuItems = ["Overview", "New Project", "Settings", "Help"];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6">
      <span className="text-2xl font-extralight tracking-[0.2em] text-white">
                ScaffoldX<span className="text-rose-400 text-5xl">.</span>
              </span>
      <ul className="space-y-4 mt-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(item)}
            className="cursor-pointer hover:text-gray-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
