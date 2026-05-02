// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   LayoutDashboard,
//   CheckCircle2,
//   Clock,
//   AlertCircle,
// } from "lucide-react";
// import TaskCard from "../components/TaskCard";
// import { useAuth } from "../context/useAuth";

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [filter, setFilter] = useState("All");

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: "Design REST API Schema",
//       description: "Create MongoDB schemas for User, Project models.",
//       status: "In Progress",
//       dueDate: "Today",
//       project: "SyncSpace App",
//     },
//     {
//       id: 2,
//       title: "Setup JWT Middleware",
//       description: "Implement role-based access control.",
//       status: "To Do",
//       dueDate: "Tomorrow",
//       project: "SyncSpace App",
//     },
//   ]);

//   const handleStatusChange = (id, newStatus) =>
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, status: newStatus } : task,
//       ),
//     );
//   const filteredTasks = tasks.filter((t) =>
//     filter === "All" ? true : t.status === filter,
//   );

//   const stats = [
//     {
//       label: "Total Tasks",
//       value: tasks.length,
//       icon: <LayoutDashboard className="w-5 h-5 text-rose-400" />,
//       bg: "bg-rose-500/10 border-rose-500/20",
//     },
//     {
//       label: "In Progress",
//       value: tasks.filter((t) => t.status === "In Progress").length,
//       icon: <Clock className="w-5 h-5 text-amber-400" />,
//       bg: "bg-amber-400/10 border-amber-400/20",
//     },
//     {
//       label: "Completed",
//       value: tasks.filter((t) => t.status === "Completed").length,
//       icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
//       bg: "bg-emerald-400/10 border-emerald-400/20",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-8"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <div className="md:col-span-1 flex flex-col justify-center">
//           <h1 className="text-3xl font-bold text-white tracking-tight">
//             My Workspace
//           </h1>
//           <p className="text-slate-400 mt-1 text-sm">Hello, {user.name} </p>
//         </div>
//         <div className="md:col-span-3 grid grid-cols-3 gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className={`p-4 rounded-xl border ${stat.bg} flex items-center justify-between`}
//             >
//               <div>
//                 <p className="text-slate-300 text-xs font-medium uppercase tracking-wider mb-1">
//                   {stat.label}
//                 </p>
//                 <p className="text-2xl font-bold text-white">{stat.value}</p>
//               </div>
//               <div className="p-2 rounded-lg bg-slate-950/50">{stat.icon}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-white">Assigned Tasks</h2>
//           <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
//             {["All", "To Do", "In Progress", "Completed"].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setFilter(status)}
//                 className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === status ? "bg-slate-950 text-rose-400 shadow-sm" : "text-slate-400 hover:text-white"}`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           <AnimatePresence>
//             {filteredTasks.length > 0 ? (
//               filteredTasks.map((task) => (
//                 <TaskCard
//                   key={task.id}
//                   task={task}
//                   onStatusChange={handleStatusChange}
//                 />
//               ))
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="col-span-full py-16 flex flex-col items-center justify-center text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50"
//               >
//                 <AlertCircle className="w-12 h-12 text-slate-500 mb-3" />
//                 <h3 className="text-lg font-medium text-white">
//                   No Tasks Found
//                 </h3>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Dashboard;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import TaskCard from "../components/TaskCard";
import { useAuth } from "../context/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState("All");

  // Note: Using _id here to match MongoDB format
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Design REST API Schema",
      description: "Create MongoDB schemas for User, Project models.",
      status: "In Progress",
      dueDate: new Date().toISOString(),
      project: "SyncSpace App",
    },
    {
      _id: "2",
      title: "Setup JWT Middleware",
      description: "Implement role-based access control.",
      status: "To Do",
      dueDate: new Date(Date.now() + 86400000).toISOString(),
      project: "SyncSpace App",
    },
  ]);

  const handleStatusChange = (id, newStatus) =>
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, status: newStatus } : task,
      ),
    );
  const filteredTasks = tasks.filter((t) =>
    filter === "All" ? true : t.status === filter,
  );

  const stats = [
    {
      label: "Total Tasks",
      value: tasks.length,
      icon: <LayoutDashboard className="w-5 h-5 text-rose-400" />,
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    {
      label: "In Progress",
      value: tasks.filter((t) => t.status === "In Progress").length,
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      bg: "bg-amber-400/10 border-amber-400/20",
    },
    {
      label: "Completed",
      value: tasks.filter((t) => t.status === "Completed").length,
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      bg: "bg-emerald-400/10 border-emerald-400/20",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            My Workspace
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Hello, {user?.name || "User"} 👋
          </p>
        </div>
        <div className="md:col-span-3 grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 rounded-xl border ${stat.bg} flex items-center justify-between`}
            >
              <div>
                <p className="text-slate-300 text-xs font-medium uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/50">{stat.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Assigned Tasks</h2>
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
            {["All", "To Do", "In Progress", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === status ? "bg-slate-950 text-rose-400 shadow-sm" : "text-slate-400 hover:text-white"}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onStatusChange={handleStatusChange}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 flex flex-col items-center justify-center text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/50"
              >
                <AlertCircle className="w-12 h-12 text-slate-500 mb-3" />
                <h3 className="text-lg font-medium text-white">
                  No Tasks Found
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
