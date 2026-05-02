// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, Plus, Calendar, Target } from "lucide-react";
// import TaskCard from "../components/TaskCard";
// import { useAuth } from "../context/useAuth";

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const { user } = useAuth();

//   const project = {
//     id,
//     title: "SyncSpace MERN App",
//     description:
//       "Full-stack project management tool with role-based access control, built using React, Node.js, and MongoDB.",
//     dueDate: "Oct 30",
//     progress: 45,
//   };

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: "Build Database Schema",
//       description: "Create User, Project, and Task models.",
//       status: "Completed",
//       dueDate: "Yesterday",
//       project: "SyncSpace",
//     },
//     {
//       id: 2,
//       title: "Implement JWT Auth",
//       description: "Setup login, register, and protected routes.",
//       status: "In Progress",
//       dueDate: "Today",
//       project: "SyncSpace",
//     },
//   ]);

//   const handleStatusChange = (taskId, newStatus) => {
//     setTasks(
//       tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6 max-w-5xl mx-auto"
//     >
//       <div className="flex items-center justify-between">
//         <Link
//           to="/projects"
//           className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-medium text-sm bg-dark-card border border-dark-border px-3 py-1.5 rounded-lg"
//         >
//           <ArrowLeft className="w-4 h-4" /> Back to Projects
//         </Link>
//         {user?.role === "Admin" && (
//           <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm shadow-md">
//             <Plus className="w-4 h-4" /> Add Task
//           </button>
//         )}
//       </div>

//       <div className="bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl" />
//         <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
//           <div className="max-w-2xl">
//             <h1 className="text-3xl font-bold text-white tracking-tight">
//               {project.title}
//             </h1>
//             <p className="text-slate-400 mt-3 text-base leading-relaxed">
//               {project.description}
//             </p>
//           </div>
//           <div className="flex flex-row md:flex-col gap-3 text-sm font-medium text-slate-300">
//             <div className="flex items-center gap-2 bg-dark-bg px-4 py-2.5 rounded-xl border border-dark-border w-full md:w-auto">
//               <Calendar className="w-4 h-4 text-brand-400" /> Due{" "}
//               {project.dueDate}
//             </div>
//             <div className="flex items-center gap-2 bg-dark-bg px-4 py-2.5 rounded-xl border border-dark-border w-full md:w-auto">
//               <Target className="w-4 h-4 text-emerald-400" /> {project.progress}
//               % Complete
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-2">
//         <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
//           Project Tasks{" "}
//           <span className="bg-dark-card border border-dark-border text-slate-400 text-xs py-1 px-2.5 rounded-full">
//             {tasks.length}
//           </span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {tasks.map((task) => (
//             <TaskCard
//               key={task.id}
//               task={task}
//               onStatusChange={handleStatusChange}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectDetail;
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Calendar, Target } from "lucide-react";
import TaskCard from "../components/TaskCard";
import { useAuth } from "../context/useAuth";

const ProjectDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const project = {
    _id: id,
    title: "SyncSpace MERN App",
    description:
      "Full-stack project management tool with role-based access control, built using React, Node.js, and MongoDB.",
    dueDate: "Oct 30",
    progress: 45,
  };

  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Build Database Schema",
      description: "Create User, Project, and Task models.",
      status: "Completed",
      dueDate: new Date(Date.now() - 86400000).toISOString(),
      project: "SyncSpace",
    },
    {
      _id: "2",
      title: "Implement JWT Auth",
      description: "Setup login, register, and protected routes.",
      status: "In Progress",
      dueDate: new Date().toISOString(),
      project: "SyncSpace",
    },
  ]);

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(
      tasks.map((t) => (t._id === taskId ? { ...t, status: newStatus } : t)),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-between">
        <Link
          to="/projects"
          className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-medium text-sm bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        {user?.role === "Admin" && (
          <button className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm shadow-md">
            <Plus className="w-4 h-4" /> Add Task
          </button>
        )}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-slate-400 mt-3 text-base leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-3 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 w-full md:w-auto">
              <Calendar className="w-4 h-4 text-rose-400" /> Due{" "}
              {project.dueDate}
            </div>
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 w-full md:w-auto">
              <Target className="w-4 h-4 text-emerald-400" /> {project.progress}
              % Complete
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          Project Tasks{" "}
          <span className="bg-slate-900 border border-slate-800 text-slate-400 text-xs py-1 px-2.5 rounded-full">
            {tasks.length}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
