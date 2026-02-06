
import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-sage/5 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-[-2deg] border-[10px] border-cream-warm">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" 
                alt="Silhouette face à la mer" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 caveat text-4xl text-white font-bold drop-shadow-md">
                La Vision d'une Autrice
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center text-sand-orange mb-6 font-bold text-xs uppercase tracking-widest">
              <Sparkles size={16} className="mr-2" />
              Manifeste Personnel
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sage mb-8 leading-tight italic">
              Pourquoi s'indigner ?
            </h2>
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
              <p>
                Je m'appelle <strong>Lauresie</strong>. Je crois fermement que le silence est une forme de complaisance. Dans un monde saturé d'images éphémères, j'ai choisi de m'arrêter sur ce qui blesse mais ce qui guérit aussi.
              </p>
              <p className="border-l-4 border-sand-orange pl-6 italic font-medium text-sage">
                "Penser est s'Indigner" n'est pas qu'un titre, c'est une boussole. C'est le refus de l'indifférence face aux chiffres, face à l'inertie climatique et aux reculs des droits.
              </p>
              <p>
                Ce blog est un espace de dialogue. Une invitation à regarder la réalité en face, non pas pour s'y résigner, mais pour y puiser la force de la changer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
