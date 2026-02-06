
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import About from './components/About';
import AddBlogForm from './components/AddBlogForm';
import Footer from './components/Footer';
import { initialBlogs } from './data/initialBlogs';
import { BlogPost, NewBlogPost } from './types';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  const handleAddBlog = (newBlog: NewBlogPost) => {
    const blog: BlogPost = {
      ...newBlog,
      id: Math.random().toString(36).substr(2, 9),
      author: 'Lauresie' 
    };
    setBlogs([blog, ...blogs]);
  };

  return (
    <div className="min-h-screen selection:bg-sand-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        {/* Blogs Grid */}
        <section id="blogs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-[2px] w-10 bg-sand-orange"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sage">Le Journal des Résistances</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-sage mb-6 leading-tight italic">
                Fragments d'Indignation
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                Décryptages et colères constructives pour un futur plus juste.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-10 bg-cream-warm/30 rounded-[2.5rem] border border-sage/5 rotate-2">
              <span className="text-6xl font-black text-sage tracking-tighter mb-1">{blogs.length}</span>
              <span className="uppercase text-[9px] font-black tracking-[0.5em] text-gray-300">Archives</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
        
        <AddBlogForm onAdd={handleAddBlog} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
