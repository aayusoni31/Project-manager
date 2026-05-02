// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
// import toast from "react-hot-toast";
// import { useAuth } from "../context/useAuth";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => {
//       const role = formData.email === "admin@test.com" ? "Admin" : "Member";
//       // Mocked login with the name Yashom as an example!
//       login({ name: "Yashom", email: formData.email, role }, "mock-jwt-token");
//       toast.success("Successfully logged in!");
//       navigate("/dashboard");
//       setIsLoading(false);
//     }, 1200);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative z-10"
//       >
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 mb-4 ring-1 ring-rose-500/20">
//             <LogIn className="w-6 h-6" />
//           </div>
//           <h2 className="text-3xl font-bold text-white tracking-tight">
//             Welcome Back
//           </h2>
//           <p className="text-slate-400 mt-2 text-sm">
//             Sign in to your SyncSpace account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-1.5">
//               Email Address
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
//               <input
//                 type="email"
//                 required
//                 className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-1.5">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-10 py-2.5 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
//               >
//                 {showPassword ? (
//                   <EyeOff className="w-5 h-5" />
//                 ) : (
//                   <Eye className="w-5 h-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
//           >
//             {isLoading ? (
//               <span className="animate-pulse">Authenticating...</span>
//             ) : (
//               "Sign In"
//             )}
//           </button>
//         </form>
//         <p className="text-center text-sm text-slate-400 mt-6">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-rose-400 hover:text-rose-300 font-medium transition-colors"
//           >
//             Create one
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";
import api from "../api/axios"; // IMPORTANT: Import your API!

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // REAL API CALL: Authenticate with your database
      const response = await api.post("/auth/login", formData);

      // Grab the REAL user data from your backend response
      const userData = response.data.user;
      const token = response.data.token;

      // Save the REAL name to context and local storage
      login(userData, token);

      toast.success(`Welcome back, ${userData.name}!`);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 mb-4 ring-1 ring-rose-500/20">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                required
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-rose-500"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-10 py-2.5 focus:outline-none focus:border-rose-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
          >
            {isLoading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-rose-400 hover:text-rose-300 font-medium"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
