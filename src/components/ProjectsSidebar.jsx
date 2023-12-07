import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  onSelect,
  projects,
  projectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold md:text-xl text-stone-200 mb-8 uppercase">
        My projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let css =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

          if (projectId === project.id) {
            css += " bg-stone-800 text-stone-200";
          } else {
            css += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button onClick={() => onSelect(project.id)} className={css}>
                {project.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
