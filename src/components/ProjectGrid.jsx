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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
