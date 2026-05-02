import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SyncSpace. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1.5">
            By Aayushi Verma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
