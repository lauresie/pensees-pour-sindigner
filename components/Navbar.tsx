
import React from 'react';
import { Feather, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-sage rounded-lg group-hover:rotate-12 transition-transform">
              <Feather className="text-white h-5 w-5" />
            </div>
            <span className="text-3xl handwritten-brand text-sage pt-1">
              Lauresie
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-sage transition-colors">Vision</a>
            <a href="#blogs" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-sage transition-colors">Réflexions</a>
            <a href="#submit" className="px-6 py-2 bg-sand-orange text-white rounded-full hover:bg-sand transition-all shadow-lg shadow-sand-orange/20 text-[10px] font-black uppercase tracking-widest">
              Participer
            </a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-sage" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
