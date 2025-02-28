import { useState } from "react";

const NewProjectForm = ({ onCreateProject }) => {
  const [projectName, setProjectName] = useState("");
  const [directory, setDirectory] = useState("");
  const [stack, setStack] = useState("React Vite");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProject({ projectName, directory, stack });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Create a New Project</h2>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          className="p-2 border rounded w-full"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Project Directory"
          className="p-2 border rounded w-full"
          value={directory}
          onChange={(e) => setDirectory(e.target.value)}
          required
        />
        <select
          className="p-2 border rounded w-full"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        >
          <option value="React Vite">React Vite</option>
          <option value="Next.js">Next.js</option>
        </select>
        <button className="bg-blue-500 px-4 py-2 rounded text-white" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default NewProjectForm;
