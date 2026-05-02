import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Plus, Search } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { useAuth } from "../context/useAuth";

const Projects = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "SyncSpace App",
      description: "Full-stack MERN project management tool with RBAC.",
      progress: 65,
      members: 4,
      dueDate: "Oct 30",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal developer portfolio using React and Tailwind.",
      progress: 90,
      members: 1,
      dueDate: "Nov 15",
    },
    {
      id: 3,
      title: "E-commerce API",
      description: "Node.js/Express backend for a clothing store.",
      progress: 20,
      members: 3,
      dueDate: "Dec 01",
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-brand-500" />
            Active Projects
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Manage and track your collaborative workspaces.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-dark-card border border-dark-border text-white text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-brand-500 w-full md:w-64 transition-all"
            />
          </div>
          {user?.role === "Admin" && (
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-brand-500/20">
              <Plus className="w-4 h-4" /> New Project
            </button>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border border-dashed border-dark-border rounded-2xl bg-dark-card/30">
          <p className="text-slate-400 text-lg">
            No projects match your search.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
