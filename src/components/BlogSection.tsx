import React from 'react'
import { ArrowRight } from 'lucide-react'
import { type BlogPost } from '../data'

interface Props {
  data: BlogPost[]
}

const BlogSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-[#111827]">Блог</h2>
          <a 
            href="#" 
            className="group flex items-center text-lg font-medium text-[#111827] hover:text-[#22C55E] transition-colors"
          >
            <span>Показать все</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-[32px] aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay - faqat pastki qismda matn o'qilishi uchun */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium opacity-90">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#22C55E] transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection