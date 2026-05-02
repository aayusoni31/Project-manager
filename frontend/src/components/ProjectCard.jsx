// import { motion } from "framer-motion";
// import { MoreVertical, Calendar, Users, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// const ProjectCard = ({ project }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -6, transition: { duration: 0.2 } }}
//       className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-lg hover:shadow-brand-500/5 hover:border-brand-500/30 transition-colors group flex flex-col h-full"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">
//             {project.title}
//           </h3>
//           <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
//             {project.description}
//           </p>
//         </div>
//         <button className="text-slate-500 hover:text-slate-300 transition-colors p-1 rounded-md hover:bg-dark-bg">
//           <MoreVertical className="w-5 h-5" />
//         </button>
//       </div>

//       <div className="mt-auto space-y-5">
//         <div className="flex items-center gap-4 text-sm text-slate-400">
//           <div className="flex items-center gap-1.5 bg-dark-bg px-2.5 py-1 rounded-md border border-dark-border">
//             <Calendar className="w-4 h-4 text-brand-500" />
//             <span>{project.dueDate}</span>
//           </div>
//           <div className="flex items-center gap-1.5 bg-dark-bg px-2.5 py-1 rounded-md border border-dark-border">
//             <Users className="w-4 h-4 text-brand-500" />
//             <span>{project.members}</span>
//           </div>
//         </div>

//         <div>
//           <div className="flex justify-between text-xs mb-2 font-medium">
//             <span className="text-slate-400">Project Progress</span>
//             <span className="text-brand-400">{project.progress}%</span>
//           </div>
//           <div className="w-full bg-dark-bg rounded-full h-2.5 border border-dark-border overflow-hidden">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: `${project.progress}%` }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="bg-gradient-to-r from-brand-600 to-brand-400 h-full rounded-full"
//             />
//           </div>
//         </div>

//         <Link
//           to={`/projects/${project.id}`}
//           className="flex items-center justify-center gap-2 w-full bg-dark-bg hover:bg-brand-600 hover:text-white border border-dark-border hover:border-transparent text-slate-300 py-2.5 rounded-xl text-sm font-medium transition-all group/btn"
//         >
//           View Workspace
//           <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// ProjectCard.propTypes = {
//   project: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     dueDate: PropTypes.string.isRequired,
//     members: PropTypes.number.isRequired,
//     progress: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default ProjectCard;
import { motion } from "framer-motion";
import { MoreVertical, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-rose-500/5 hover:border-rose-500/30 transition-colors group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        <button className="text-slate-500 hover:text-slate-300 transition-colors p-1 rounded-md hover:bg-slate-950">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-auto space-y-5">
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>{project.dueDate}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            <Users className="w-4 h-4 text-rose-500" />
            <span>{project.members}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-2 font-medium">
            <span className="text-slate-400">Project Progress</span>
            <span className="text-rose-400">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2.5 border border-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full"
            />
          </div>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="flex items-center justify-center gap-2 w-full bg-slate-950 hover:bg-rose-600 hover:text-white border border-slate-800 hover:border-transparent text-slate-300 py-2.5 rounded-xl text-sm font-medium transition-all group/btn"
        >
          View Workspace{" "}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
ProjectCard.propTypes = { project: PropTypes.object.isRequired };
export default ProjectCard;
