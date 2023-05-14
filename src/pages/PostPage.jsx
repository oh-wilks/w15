import { useState } from "react";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const obtenerPosts = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(resp.data);
  };

  return (
    <>
      <header className="row">
        <article className="col">
          <h1>Posts</h1>
        </article>
      </header>
      <main className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={obtenerPosts}
          >
            Obtener informacion
          </button>
        </article>
      </main>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card h-100 text-bg-dark mb-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsPage;