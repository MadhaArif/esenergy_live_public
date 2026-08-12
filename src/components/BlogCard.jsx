import React from 'react';

const BlogCard = ({ article, onSelect }) => {
  return (
    <div className="blog-card" onClick={onSelect} style={{ cursor: 'pointer' }}>
      <div className="blog-card-meta">
        <span className="blog-card-category">{article.category}</span>
        <span className="blog-card-readtime">{article.readTime}</span>
      </div>
      
      <div className="blog-card-body">
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-excerpt">{article.excerpt}</p>
      </div>

      <div className="blog-card-footer">
        <div className="blog-card-divider"></div>
        <button 
          className="blog-card-cta" 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          aria-label={`Read guide for ${article.title}`}
        >
          <span>Read Guide</span>
          <span className="blog-card-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
