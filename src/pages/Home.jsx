import { useState, useEffect } from "react";
import api from "../config/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1); 

  // Função para buscar dados
  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await api.get(`/posts?_page=${page}&_limit=10`);
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-10">
        Welcome to the Blog!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            key={post.id}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {post.body.substring(0, 100)}...
            </p>
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Ver mais
            </Link>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-blue-500 mt-4">
          Carregando mais posts...
        </div>
      ) : (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Carregar mais
          </button>
        </div>
      )}
    </div>
  );
}
