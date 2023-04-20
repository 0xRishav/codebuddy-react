import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://codebuddy.review/posts');
        if (response.ok) {
          const data = await response.json();
          console.log('Data:', data);
          setPosts(data.data.posts);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
            <div className="card mb-4">
              <img src={post.image} className="card-img-top" alt="Post" />
              <div className="card-body">
                <h5 className="card-title">{`${post.firstName} ${
                  post.lastName ? post.lastName : ''
                }`}</h5>
                <p className="card-text">{post.writeup}</p>
              </div>
              <div className="card-footer">
                <img src={post.avatar} className="rounded-circle" alt="Author" width="50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
