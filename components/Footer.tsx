
import React from 'react';
import { Feather, Twitter, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 border-t border-sage/5 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-sage rounded-lg shadow-lg shadow-green-900/10">
                <Feather className="text-white h-5 w-5" />
              </div>
              <span className="text-3xl handwritten-brand text-sage pt-1">
                Lauresie
              </span>
            </div>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed mb-8 font-light italic">
              "Penser est s'indigner." <br />
              Explorer les luttes qui façonnent notre futur commun à travers le prisme de l'engagement.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-white border border-sage/10 rounded-xl text-sage hover:bg-sage hover:text-white transition-all shadow-sm">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-black text-sage mb-6 uppercase tracking-[0.2em] text-[10px]">Explorer</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-sage transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-sage transition-colors">Vision</a></li>
              <li><a href="#blogs" className="hover:text-sage transition-colors">Chroniques</a></li>
              <li><a href="#submit" className="hover:text-sage transition-colors">S'exprimer</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-sage mb-6 uppercase tracking-[0.2em] text-[10px]">Contact & News</h4>
            <div className="space-y-4">
              <a href="mailto:contact@lauresie.blog" className="flex items-center text-gray-400 hover:text-sage transition-colors text-sm">
                <Mail className="h-4 w-4 mr-3 text-sand-orange" />
                contact@lauresie.blog
              </a>
              <div className="mt-6 p-6 bg-cream-warm/40 rounded-3xl border border-sage/5">
                <p className="text-sage text-xs font-bold mb-3 uppercase tracking-widest">Newsletter</p>
                <div className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-sage/10 p-1">
                   <input type="email" placeholder="Email" className="bg-transparent border-0 w-full px-3 py-1 text-xs focus:ring-0" />
                   <button className="bg-sage text-white px-4 py-1 rounded-lg font-bold text-xs hover:bg-sage-light transition-colors">S'inscrire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sage/5 flex flex-col md:flex-row justify-between items-center text-gray-300 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© 2026 Lauresie. Created with</span>
            <Heart size={10} className="text-red-300 fill-red-300" />
            <span>and purpose.</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-sage transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-sage transition-colors">Mentions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
