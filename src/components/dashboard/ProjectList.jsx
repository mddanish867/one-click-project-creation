const ProjectList = ({ projects }) => {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Your Projects</h2>
        <ul className="mt-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <li key={index} className="p-2 border rounded mb-2">
                {project.projectName} - {project.stack}
              </li>
            ))
          ) : (
            <p>No projects found</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default ProjectList;
  