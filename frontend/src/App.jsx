// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { AuthProvider } from "./context/AuthProvider";
// import { ProtectedRoute } from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";
// import PropTypes from "prop-types";

// // Import all the production-ready pages we built
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import AdminPanel from "./pages/AdminPanel";

// // A reusable layout wrapper to ensure consistent spacing and Navbar placement
// const AppLayout = ({ children }) => (
//   <div className="flex flex-col min-h-screen">
//     <Navbar />
//     <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {children}
//     </main>
//   </div>
// );

// AppLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         {/* Global wrapper for dark mode and selection styling */}
//         <div className="min-h-screen bg-dark-bg text-slate-200 selection:bg-brand-500 selection:text-white font-sans">
//           <Routes>
//             {/* Public Authentication Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Protected Routes (Accessible by BOTH Admins and Members) */}
//             <Route element={<ProtectedRoute />}>
//               <Route
//                 path="/dashboard"
//                 element={
//                   <AppLayout>
//                     <Dashboard />
//                   </AppLayout>
//                 }
//               />
//               <Route
//                 path="/projects"
//                 element={
//                   <AppLayout>
//                     <Projects />
//                   </AppLayout>
//                 }
//               />
//               <Route
//                 path="/projects/:id"
//                 element={
//                   <AppLayout>
//                     <ProjectDetail />
//                   </AppLayout>
//                 }
//               />
//             </Route>

//             {/* Strictly Protected Routes (Admins ONLY) */}
//             <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
//               <Route
//                 path="/admin"
//                 element={
//                   <AppLayout>
//                     <AdminPanel />
//                   </AppLayout>
//                 }
//               />
//             </Route>

//             {/* Catch-all redirect for unknown routes */}
//             <Route path="*" element={<Navigate to="/dashboard" replace />} />
//           </Routes>

//           {/* Global Toast Notifications Configuration */}
//           <Toaster
//             position="bottom-right"
//             toastOptions={{
//               duration: 4000,
//               style: {
//                 background: "#1e293b", // dark-card
//                 color: "#f8fafc", // text-slate-50
//                 border: "1px solid #334155", // dark-border
//                 boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
//                 padding: "16px",
//                 borderRadius: "12px",
//               },
//               success: {
//                 iconTheme: { primary: "#10b981", secondary: "#1e293b" },
//               },
//               error: {
//                 iconTheme: { primary: "#ef4444", secondary: "#1e293b" },
//               },
//             }}
//           />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AdminPanel from "./pages/AdminPanel";

// AppLayout now wraps content between Navbar and Footer
const AppLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

AppLayout.propTypes = { children: PropTypes.node.isRequired };

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-rose-500 selection:text-white">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={
                  <AppLayout>
                    <Dashboard />
                  </AppLayout>
                }
              />
              <Route
                path="/projects"
                element={
                  <AppLayout>
                    <Projects />
                  </AppLayout>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <AppLayout>
                    <ProjectDetail />
                  </AppLayout>
                }
              />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
              <Route
                path="/admin"
                element={
                  <AppLayout>
                    <AdminPanel />
                  </AppLayout>
                }
              />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#0f172a",
                color: "#f8fafc",
                border: "1px solid #1e293b",
              },
              success: {
                iconTheme: { primary: "#f43f5e", secondary: "#0f172a" },
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
