import React from "react";
import "./Sidebar.css";

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string; // ✅ Allow extra class from parent (like "open")
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, className }) => {
  const tabs = ["Dashboard", "Scheduler", "Candidates", "Engineers"];

  return (
    <div className={`sidebar ${className || ""}`}>
      <div className="sidebar-title">Scheduler App</div>
      <ul className="sidebar-menu">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
