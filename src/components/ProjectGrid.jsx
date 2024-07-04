import React, { useEffect, useRef, useCallback } from 'react';
import { PropCard } from './Project_popup/ProjectPopup'; // Ensure this is correctly exported

const ProjectGrid = ({ projects, loadMoreProjects, totalProjects }) => {
  const observer = useRef();

  const lastProjectElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && projects.length < totalProjects) {
        loadMoreProjects();
      }
    });

    if (node) observer.current.observe(node);
  }, [loadMoreProjects, projects.length, totalProjects]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 ml-4 mr-4">
      {projects.map((project, index) => (
        <div
          key={project['Internal ID']}
          ref={projects.length === index + 1 ? lastProjectElementRef : null}
          className="mb-4"
        >
          <PropCard project={project} />
        </div>
      ))}
      {projects.length >= totalProjects && (
        <div className="col-span-full text-center">
          <p>No more projects to load</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
