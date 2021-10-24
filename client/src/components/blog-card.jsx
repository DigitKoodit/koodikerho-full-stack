const BlogCard = ({ headerImg, title, body }) => {
  return (
    <div>
      <img className="header-img" src={headerImg} alt="header-img" />
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default BlogCard;