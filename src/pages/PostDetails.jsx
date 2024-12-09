import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/api";

export default function PostDetails() {
  const { id } = useParams(); // Obtendo o ID do post da URL
  const [post, setPost] = useState(null); // Inicializando o estado do post

  // Função para buscar o post da API
  const fetchData = async () => {
    try {
      const response = await api.get(`/posts/${id}`);
      setPost(response.data); // Atualizando o estado com os dados do post
    } catch (error) {
      console.error("Erro ao carregar o post:", error); // Melhor mensagem de erro
    }
  };

  // useEffect para chamar a função fetchData quando o id do post mudar
  useEffect(() => {
    fetchData();
  }, [id]);

  // Exibindo uma mensagem enquanto o post não é carregado
  if (!post)
    return (
      <div className="text-center text-blue-500 mt-4">Carregando o post...</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-6">{post.body}</p>
      <div className="text-gray-500 text-sm">Postado em: 08/12/2023</div>
    </div>
  );
}
