import { useState } from "react";

const Sidebar = ({ setActiveTab }) => {
  const menuItems = ["Dashboard", "New Project", "Settings", "Help"];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-6">OneClick Setup</h2>
      <ul className="space-y-4">
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
