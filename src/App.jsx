import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
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

  const handleAddTask = (text) => {
    const random = Math.random();
    const newTask = {
      text: text,
      projectId: projectsState.selectedProject,
      id: random,
    };
    setProjects((prev) => {
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjects((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleCancel = () => {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      };
    });
  };

  const handleSelect = (id) => {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProject: id,
      };
    });
  };

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

  const handleDelete = () => {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
      };
    });
  };

  console.log(projectsState);

  let Project = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  let content = (
    <SelectedProject
      project={Project}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        onAdd={handlePushProject}
        onCancel={handleCancel}
        setProjects={setProjects}
      />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProject onStartAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleAddProject}
        onSelect={handleSelect}
        projects={projectsState.projects}
        projectId={projectsState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
