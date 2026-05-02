import { motion } from "framer-motion";
import {
  ShieldAlert,
  Users,
  FolderKanban,
  MoreHorizontal,
  UserCheck,
} from "lucide-react";

const AdminPanel = () => {
  // Mock Data
  const users = [
    {
      id: 1,
      name: "Yashom",
      email: "admin@syncspace.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Vanshika",
      email: "vanshika@example.com",
      role: "Member",
      status: "Active",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      role: "Member",
      status: "Offline",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-brand-500" /> System Admin
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Manage user roles, platform health, and security.
        </p>
      </header>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-brand-500/10 rounded-lg text-brand-500">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Total Users
            </p>
            <p className="text-2xl font-bold text-white">24</p>
          </div>
        </div>
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Active Projects
            </p>
            <p className="text-2xl font-bold text-white">12</p>
          </div>
        </div>
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Online Admins
            </p>
            <p className="text-2xl font-bold text-white">2</p>
          </div>
        </div>
      </div>

      {/* User Management Table */}
      <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-dark-border flex justify-between items-center bg-dark-card/50">
          <h2 className="text-lg font-bold text-white">
            User Access Management
          </h2>
          <button className="text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors">
            Invite User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="text-xs text-slate-400 uppercase bg-dark-bg/50 border-b border-dark-border">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr
                  key={u.id}
                  className={`border-b border-dark-border hover:bg-dark-bg/50 transition-colors ${i === users.length - 1 ? "border-0" : ""}`}
                >
                  <td className="px-6 py-4 font-medium text-white">{u.name}</td>
                  <td className="px-6 py-4 text-slate-400">{u.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${u.role === "Admin" ? "bg-brand-500/10 text-brand-400 border-brand-500/20" : "bg-slate-800 text-slate-300 border-slate-700"}`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span
                        className={`w-2 h-2 rounded-full ${u.status === "Active" ? "bg-emerald-500" : "bg-slate-600"}`}
                      ></span>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-500 hover:text-white p-1 rounded transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
