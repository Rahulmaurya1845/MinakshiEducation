// import React from "react";
// import { Link } from "react-router-dom";
// import { blogContent } from "./BlogDetail";
// import "./Blog.css";

// export default function Blog() {
//   return (
//     <section className="blog-section">
//       <h1 className="blog-title">Highlights</h1>

//       <div className="blog-grid">
//         {Object.entries(blogContent).map(([slug, blog]) => (
//           <div key={slug} className="blog-card">
//             <Link to={`/highlights/blog/${slug}`}>
//               <img src={blog.img} className="blog-card-img" alt={blog.title} />
//             </Link>

//             <div className="blog-card-info">
//               <span className="blog-date">{blog.date}</span>
//               <h3 className="blog-card-title">{blog.title}</h3>

//               <Link to={`/highlights/blog/${slug}`} className="read-more-btn">
//                 Read More →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import { blogContent } from "./BlogDetail";
// import "./Blog.css";

// export default function Blog() {
//   return (
//     <section className="blog-section">
//       <h1 className="blog-title">Highlights</h1>

//       <div className="blog-grid">
//         {Object.entries(blogContent).map(([slug, blog]) => (
//           <div key={slug} className="blog-card">
//             <Link to={`/highlights/blog/${slug}`}>
//               <img src={blog.img} className="blog-card-img" alt={blog.title} />
//             </Link>

//             <div className="blog-card-info">
//               <span className="blog-date">{blog.date}</span>
//               <h3 className="blog-card-title">{blog.title}</h3>

//               <Link to={`/highlights/blog/${slug}`} className="read-more-btn">
//                 Read More →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { blogContent } from "./BlogDetail";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="blog-section">
      <h1 className="blog-title">Highlights</h1>

      <div className="blog-grid">
        {Object.entries(blogContent).map(([slug, blog]) => (
          <div key={slug} className="blog-card">
            <Link to={`/highlights/blog/${slug}`}>
              <img src={blog.img} className="blog-card-img" alt={blog.title} />
            </Link>

            <div className="blog-card-info">
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                {blog.time && <span className="blog-time">{blog.time}</span>}
              </div>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <Link to={`/highlights/blog/${slug}`} className="read-more-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
