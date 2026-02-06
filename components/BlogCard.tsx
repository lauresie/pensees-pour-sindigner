
import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-sage/10 hover:border-sand-orange/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-sage/5 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {blog.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sage text-[10px] font-black rounded-full uppercase tracking-tighter shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-bold">
          <Calendar size={12} className="mr-1 text-sand-orange" />
          {new Date(blog.date).toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>

        <h3 className="blog-title text-xl md:text-2xl font-bold text-sage mb-4 leading-tight group-hover:text-sand-orange transition-colors">
          {blog.title}
        </h3>

        <div className={`text-gray-600 font-light leading-relaxed mb-6 transition-all duration-300 ${isExpanded ? 'block' : 'line-clamp-3'} text-base md:text-lg`}>
          {blog.text}
        </div>

        <div className="pt-6 border-t border-gray-50 mt-auto flex justify-between items-center">
          <span className="caveat text-xl text-sage font-medium opacity-60">par {blog.author}</span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sage font-black text-[10px] uppercase tracking-widest group/btn hover:text-sand-orange transition-colors"
          >
            {isExpanded ? 'Réduire' : 'Lire la suite'}
            {isExpanded ? (
              <ChevronUp size={14} className="ml-1" />
            ) : (
              <ChevronDown size={14} className="ml-1 group-hover/btn:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
