import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div class="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>
          <p className="blog-card-subtitle devWith">{blog.devWith}</p>

          <div>
            <a href={blog.url} target="_" class="button">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
