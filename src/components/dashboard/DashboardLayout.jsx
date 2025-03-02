import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import NewProjectForm from "./NewProjectForm";
import ProjectList from "./ProjectList";
import Settings from "./Settings";
import Help from "./Help";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [projects, setProjects] = useState([]);

  const handleCreateProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} />
      <main className="flex-1 p-6">
        {activeTab === "Overview" && <DashboardHome />}
        {activeTab === "New Project" && <NewProjectForm onCreateProject={handleCreateProject} />}
        {activeTab === "Settings" && <Settings />}
        {activeTab === "Help" && <Help />}
        <ProjectList projects={projects} />
      </main>
    </div>
  );
};

export default DashboardLayout;
