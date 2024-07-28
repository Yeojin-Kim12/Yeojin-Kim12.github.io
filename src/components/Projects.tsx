import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "../../public/projects/projectData";
import { ProjectDataType } from "../types/type";
import Modal from "./Modal";

const Projects = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectDataType | null>(null);

  const filterProjects = filter === "ALL" ? projectData : projectData.filter((project) => project.type === filter);

  return (
    <div id="Projects" className="mt-28">
      <h1 className="text-3xl text-center text-primary font-wavvePADO heading-underline">Projects</h1>
      <div className="mt-2 inline-block">
        <ul className="flex gap-6 bg-gray-400 text-white py-3 px-6 rounded-3xl items-center text-center">
          <li className={filter === "ALL" ? "text-text cursor-pointer" : "cursor-pointer"} onClick={() => setFilter("ALL")}>
            ALL
          </li>
          <li className={filter === "TEAM" ? "text-text cursor-pointer" : "cursor-pointer"} onClick={() => setFilter("TEAM")}>
            TEAM
          </li>
          <li className={filter === "SINGLE" ? "text-text cursor-pointer" : "cursor-pointer"} onClick={() => setFilter("SINGLE")}>
            SINGLE
          </li>
        </ul>
      </div>
      <motion.section id="projects" className="mx-auto p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4">
          {filterProjects.map((project) => (
            <motion.div key={project.title} className="p-4 border rounded" whileHover={{ scale: 1.05 }} onClick={() => setSelectedProject(project)}>
              <img src={project.previewUrl} alt={project.title} className="w-full h-56 object-cover rounded" />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="flex gap-2 mt-4">
                {project.badges.map((badge, index) => (
                  <p key={index} className="p-1 rounded-2xl text-xs" style={{ backgroundColor: badge.color }}>
                    {badge.text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <AnimatePresence>{selectedProject && <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />}</AnimatePresence>
    </div>
  );
};

export default Projects;
