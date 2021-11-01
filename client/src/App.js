import { useState, useEffect } from 'react';
import BlogCard from './components/blog-card';
import './App.css';
import CreateBlogModal from './components/create-blog-modal';

function App() {

  const [posts, setPosts] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4242/posts");
        const { data } = await res.json();

        setPosts(data);
      } catch(err) {
        console.error(err);
      }
    }

    fetchData();
  }, [])

  const handleAddNewPost = async(obj) => {
    try {
      const res = await fetch("http://localhost:4242/posts", {
        method: 'POST',
        body: JSON.stringify({post: obj}),
        headers: { 'Content-Type': "application/json" }
      });
        const { data } = await res.json();

        setPosts(data);
  } catch (err) {

  }
  }

  return (
    <div className="App">
      <header>
        <button onClick={() =>setModalOpen(true)}>Lisää postaus</button>
      </header>
      {posts.map((post, index) =>
        <BlogCard headerImg={post.headerImg} title={post.title} body={post.body} key={index} />
      )}
      {modalOpen && <CreateBlogModal createPost={(obj) => handleAddNewPost(obj)} closeModal={() => setModalOpen(false)} />}
    </div>
  );
}

export default App;
