// import { motion } from "framer-motion";
// import { Clock, CheckCircle2, Circle, AlertCircle } from "lucide-react";
// import PropTypes from "prop-types";

// const TaskCard = ({ task, onStatusChange }) => {
//   const getStatusStyles = (status) => {
//     switch (status) {
//       case "Completed":
//         return {
//           color: "text-emerald-400",
//           bg: "bg-emerald-400/10",
//           border: "border-emerald-500/20",
//           icon: <CheckCircle2 className="w-4 h-4" />,
//         };
//       case "In Progress":
//         return {
//           color: "text-amber-400",
//           bg: "bg-amber-400/10",
//           border: "border-amber-500/20",
//           icon: <AlertCircle className="w-4 h-4" />,
//         };
//       default:
//         return {
//           color: "text-slate-300",
//           bg: "bg-slate-950",
//           border: "border-slate-800",
//           icon: <Circle className="w-4 h-4 text-slate-500" />,
//         };
//     }
//   };

//   const style = getStatusStyles(task.status);
//   const isCompleted = task.status === "Completed";

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       className={`bg-slate-900 border rounded-xl p-5 shadow-sm transition-all ${isCompleted ? "border-slate-800 opacity-75" : "border-slate-800 hover:border-slate-600"}`}
//     >
//       <div className="flex justify-between items-start gap-4 mb-3">
//         <div className="flex-1">
//           <h4
//             className={`text-base font-semibold leading-snug transition-colors ${isCompleted ? "text-slate-500 line-through" : "text-slate-100"}`}
//           >
//             {task.title}
//           </h4>
//         </div>
//         <select
//           value={task.status}
//           onChange={(e) => onStatusChange(task._id, e.target.value)}
//           className={`text-xs font-semibold px-3 py-1.5 rounded-full border outline-none cursor-pointer appearance-none transition-colors ${style.bg} ${style.color} ${style.border} focus:ring-2 focus:ring-rose-500/50`}
//         >
//           <option value="To Do" className="bg-slate-900 text-white">
//             To Do
//           </option>
//           <option value="In Progress" className="bg-slate-900 text-white">
//             In Progress
//           </option>
//           <option value="Completed" className="bg-slate-900 text-white">
//             Completed
//           </option>
//         </select>
//       </div>
//       <p
//         className={`text-sm mb-4 line-clamp-2 ${isCompleted ? "text-slate-600" : "text-slate-400"}`}
//       >
//         {task.description}
//       </p>
//       <div className="flex items-center justify-between text-xs font-medium border-t border-slate-800 pt-4">
//         <div className="flex items-center gap-2 text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md">
//           <Clock className="w-3.5 h-3.5" />
//           <span>{task.dueDate}</span>
//         </div>
//         <div
//           className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md ${style.bg} ${style.color}`}
//         >
//           {style.icon}
//           <span className="truncate max-w-[120px]">{task.project}</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// TaskCard.propTypes = {
//   task: PropTypes.object.isRequired,
//   onStatusChange: PropTypes.func.isRequired,
// };
// export default TaskCard;
import { motion } from "framer-motion";
import { Clock, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import PropTypes from "prop-types";

const TaskCard = ({ task, onStatusChange }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return {
          color: "text-emerald-400",
          bg: "bg-emerald-400/10",
          border: "border-emerald-500/20",
          icon: <CheckCircle2 className="w-4 h-4" />,
        };
      case "In Progress":
        return {
          color: "text-amber-400",
          bg: "bg-amber-400/10",
          border: "border-amber-500/20",
          icon: <AlertCircle className="w-4 h-4" />,
        };
      default:
        return {
          color: "text-slate-300",
          bg: "bg-slate-950",
          border: "border-slate-800",
          icon: <Circle className="w-4 h-4 text-slate-500" />,
        };
    }
  };

  const style = getStatusStyles(task.status);
  const isCompleted = task.status === "Completed";

  // Format the MongoDB Date string safely
  const formattedDate = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "No Date";

  // Safely extract project title whether it's populated or just a string
  const projectName =
    typeof task.project === "object" ? task.project.title : task.project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`bg-slate-900 border rounded-xl p-5 shadow-sm transition-all ${isCompleted ? "border-slate-800 opacity-75" : "border-slate-800 hover:border-slate-600"}`}
    >
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="flex-1">
          <h4
            className={`text-base font-semibold leading-snug transition-colors ${isCompleted ? "text-slate-500 line-through" : "text-slate-100"}`}
          >
            {task.title}
          </h4>
        </div>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task._id, e.target.value)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full border outline-none cursor-pointer appearance-none transition-colors ${style.bg} ${style.color} ${style.border} focus:ring-2 focus:ring-rose-500/50`}
        >
          <option value="To Do" className="bg-slate-900 text-white">
            To Do
          </option>
          <option value="In Progress" className="bg-slate-900 text-white">
            In Progress
          </option>
          <option value="Completed" className="bg-slate-900 text-white">
            Completed
          </option>
        </select>
      </div>
      <p
        className={`text-sm mb-4 line-clamp-2 ${isCompleted ? "text-slate-600" : "text-slate-400"}`}
      >
        {task.description}
      </p>
      <div className="flex items-center justify-between text-xs font-medium border-t border-slate-800 pt-4">
        <div className="flex items-center gap-2 text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md">
          <Clock className="w-3.5 h-3.5" />
          <span>{formattedDate}</span>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md ${style.bg} ${style.color}`}
        >
          {style.icon}
          <span className="truncate max-w-[120px]">{projectName}</span>
        </div>
      </div>
    </motion.div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TaskCard;
