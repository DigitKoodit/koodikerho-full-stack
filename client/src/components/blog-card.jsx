const BlogCard = ({ headerImg, title, body }) => {
  return (
    <div className="blog-wrapper">
      <div className="header-wrapper">
        <img className="header-img" src={headerImg} alt="header-img" />
        <h1>{title}</h1>
      </div>
      <pre className="blog-body">{body}</pre>
    </div>
  )
}

export default BlogCard;