// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { UserPlus, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
// import toast from "react-hot-toast";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => {
//       toast.success("Account created! Please sign in.");
//       navigate("/login");
//       setIsLoading(false);
//     }, 1200);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
//       <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative z-10"
//       >
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 mb-4 ring-1 ring-rose-500/20">
//             <UserPlus className="w-6 h-6" />
//           </div>
//           <h2 className="text-3xl font-bold text-white tracking-tight">
//             Create Account
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-1.5">
//               Full Name
//             </label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
//               <input
//                 type="text"
//                 required
//                 className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-rose-500"
//                 placeholder="John Doe"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-slate-300 mb-1.5">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
//               <input
//                 type="email"
//                 required
//                 className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-rose-500"
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
//                 className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-10 py-2.5 focus:outline-none focus:border-rose-500"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
//               >
//                 <Eye className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
//           >
//             {isLoading ? "Creating..." : "Sign Up"}
//           </button>
//         </form>
//         <p className="text-center text-sm text-slate-400 mt-6">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-rose-400 hover:text-rose-300 font-medium"
//           >
//             Log in
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/axios"; // IMPORTANT: Import your API!

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // REAL API CALL: Sending the Name, Email, and Password to your database
      await api.post("/auth/register", formData);
      toast.success("Account created! Please log in.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 mb-4 ring-1 ring-rose-500/20">
            <UserPlus className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Create Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                required
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-rose-500"
                placeholder="Aayushi"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>
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
            {isLoading ? "Creating..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-rose-400 hover:text-rose-300 font-medium"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
