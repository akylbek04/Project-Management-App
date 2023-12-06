import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    console.log("sbfkjs");
    setProjects((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  const handlePushProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: projectsState.projects.length + 1,
    };
    setProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  let content;

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject onAdd={handlePushProject} setProjects={setProjects} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProject onStartAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
