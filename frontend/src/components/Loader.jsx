// import { Loader2 } from "lucide-react";

// const Loader = () => {
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-dark-bg">
//       <div className="relative">
//         <div className="absolute inset-0 bg-brand-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
//         <Loader2 className="w-10 h-10 text-brand-500 animate-spin relative z-10" />
//       </div>
//       <p className="mt-4 text-slate-400 font-medium tracking-wide animate-pulse">
//         Loading Workspace...
//       </p>
//     </div>
//   );
// };

// export default Loader;
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950">
      <div className="relative">
        <div className="absolute inset-0 bg-rose-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
        <Loader2 className="w-10 h-10 text-rose-500 animate-spin relative z-10" />
      </div>
      <p className="mt-4 text-slate-400 font-medium tracking-wide animate-pulse">
        Loading Workspace...
      </p>
    </div>
  );
};

export default Loader;
