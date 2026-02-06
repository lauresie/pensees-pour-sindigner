
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { NewBlogPost } from '../types';
import { THEME_IMAGES } from '../data/blogImages';

interface AddBlogFormProps {
  onAdd: (blog: NewBlogPost) => void;
}

const AddBlogForm: React.FC<AddBlogFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<NewBlogPost>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    tags: [],
    text: '',
    imageUrl: THEME_IMAGES[0]
  });
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.text) {
      onAdd(formData);
      setFormData({
        title: '',
        date: new Date().toISOString().split('T')[0],
        tags: [],
        text: '',
        imageUrl: THEME_IMAGES[0]
      });
      setTagInput('');
      alert('Chronique partagée avec succès !');
    }
  };

  const handleTags = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  return (
    <section id="submit" className="py-24 max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-sage/10 border border-sage/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sage mb-4 italic">Contribuer au débat</h2>
          <p className="text-gray-500 font-light">Partagez votre indignation, éclairez le chemin.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-sage uppercase tracking-[0.2em] ml-2">Titre de l'article</label>
              <input
                type="text" required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-6 py-4 bg-cream-warm/20 border border-sage/10 rounded-2xl focus:ring-2 focus:ring-sand-orange focus:border-transparent outline-none transition-all text-sm"
                placeholder="Un titre fort..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-sage uppercase tracking-[0.2em] ml-2">Date</label>
              <input
                type="date" required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-6 py-4 bg-cream-warm/20 border border-sage/10 rounded-2xl focus:ring-2 focus:ring-sand-orange outline-none text-sm"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-sage uppercase tracking-[0.2em] ml-2">Choisir une thématique visuelle</label>
            <div className="grid grid-cols-5 gap-3">
              {THEME_IMAGES.map((url, idx) => (
                <button
                  key={idx} type="button"
                  onClick={() => setFormData({ ...formData, imageUrl: url })}
                  className={`relative aspect-square rounded-xl overflow-hidden border-4 transition-all ${formData.imageUrl === url ? 'border-sand-orange scale-105' : 'border-transparent opacity-60'}`}
                >
                  <img src={url} className="w-full h-full object-cover" />
                  {formData.imageUrl === url && (
                    <div className="absolute inset-0 bg-sand-orange/20 flex items-center justify-center">
                      <Check className="text-white drop-shadow-md" size={24} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-sage uppercase tracking-[0.2em] ml-2">Votre Message</label>
            <textarea
              required rows={5}
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              className="w-full px-6 py-4 bg-cream-warm/20 border border-sage/10 rounded-2xl focus:ring-2 focus:ring-sand-orange outline-none resize-none text-sm"
              placeholder="Exprimez votre pensée..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-sage text-white font-black rounded-2xl hover:bg-sage-light transition-all flex items-center justify-center space-x-3 shadow-xl shadow-sage/20 uppercase tracking-widest text-xs"
          >
            <span>Publier l'Indignation</span>
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlogForm;
