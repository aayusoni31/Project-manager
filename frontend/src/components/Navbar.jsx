// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/useAuth";
// import {
//   LayoutDashboard,
//   ShieldAlert,
//   LogOut,
//   Briefcase,
//   Menu,
//   X,
// } from "lucide-react";
// import { useState } from "react";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const isActive = (path) => location.pathname.startsWith(path);

//   if (!user) return null;

//   return (
//     <nav className="bg-dark-card/80 backdrop-blur-md border-b border-dark-border sticky top-0 z-50 transition-all">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo & Desktop Links */}
//           <div className="flex items-center gap-8">
//             <Link
//               to="/dashboard"
//               className="flex items-center gap-2 text-brand-400 hover:text-brand-300 font-bold text-xl tracking-tight transition-colors"
//             >
//               <Briefcase className="w-6 h-6" />
//               <span>SyncSpace</span>
//             </Link>

//             <div className="hidden md:flex items-center space-x-1">
//               <Link
//                 to="/dashboard"
//                 className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/dashboard") ? "bg-dark-bg text-brand-400 border border-dark-border" : "text-slate-400 hover:text-white hover:bg-dark-bg"}`}
//               >
//                 <LayoutDashboard className="w-4 h-4" /> Dashboard
//               </Link>
//               <Link
//                 to="/projects"
//                 className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/projects") ? "bg-dark-bg text-brand-400 border border-dark-border" : "text-slate-400 hover:text-white hover:bg-dark-bg"}`}
//               >
//                 <Briefcase className="w-4 h-4" /> Projects
//               </Link>
//               {user?.role === "Admin" && (
//                 <Link
//                   to="/admin"
//                   className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/admin") ? "bg-brand-500/10 text-brand-400 border border-brand-500/20" : "text-slate-400 hover:text-brand-400 hover:bg-dark-bg"}`}
//                 >
//                   <ShieldAlert className="w-4 h-4" /> Admin
//                 </Link>
//               )}
//             </div>
//           </div>

//           {/* User Actions */}
//           <div className="hidden md:flex items-center gap-4">
//             <div className="text-sm">
//               <span className="text-slate-400">Welcome, </span>
//               <span className="text-white font-medium">{user.name}</span>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
//               title="Logout"
//             >
//               <LogOut className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-slate-400 hover:text-white p-2"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-dark-card border-b border-dark-border px-2 pt-2 pb-3 space-y-1">
//           <Link
//             to="/dashboard"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-dark-bg"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/projects"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-dark-bg"
//           >
//             Projects
//           </Link>
//           {user?.role === "Admin" && (
//             <Link
//               to="/admin"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block px-3 py-2 rounded-md text-base font-medium text-brand-400 hover:text-brand-300 hover:bg-dark-bg"
//             >
//               Admin Panel
//             </Link>
//           )}
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-red-400/10"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import {
  LayoutDashboard,
  ShieldAlert,
  LogOut,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname.startsWith(path);

  if (!user) return null;

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-rose-500 hover:text-rose-400 font-bold text-xl tracking-tight transition-colors"
            >
              <Briefcase className="w-6 h-6" />
              <span>SyncSpace</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/dashboard") ? "bg-slate-950 text-rose-400 border border-slate-800" : "text-slate-400 hover:text-white hover:bg-slate-950"}`}
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
              <Link
                to="/projects"
                className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/projects") ? "bg-slate-950 text-rose-400 border border-slate-800" : "text-slate-400 hover:text-white hover:bg-slate-950"}`}
              >
                <Briefcase className="w-4 h-4" /> Projects
              </Link>
              {user?.role === "Admin" && (
                <Link
                  to="/admin"
                  className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${isActive("/admin") ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" : "text-slate-400 hover:text-rose-400 hover:bg-slate-950"}`}
                >
                  <ShieldAlert className="w-4 h-4" /> Admin
                </Link>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-sm">
              <span className="text-white font-medium">{user.name}</span>
            </div>
            {/* NEW FULL LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-rose-600/10 text-rose-500 hover:bg-rose-600 hover:text-white rounded-lg transition-all text-sm font-medium border border-rose-500/20 hover:border-rose-600 shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-950"
          >
            Dashboard
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-950"
          >
            Projects
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
