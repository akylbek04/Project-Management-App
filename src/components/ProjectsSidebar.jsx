import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold md:text-xl text-stone-200 mb-8 uppercase">
        My projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
