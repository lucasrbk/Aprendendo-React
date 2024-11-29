import React, { useState, useEffect } from 'react';

const Requisicao = () => {
    // Estado para armazenar os posts
    const [posts, setPosts] = useState([]);
    // Estado para controlar o carregamento
    const [loading, setLoading] = useState(false);

    // Função assíncrona para buscar os posts
    const fetchPosts = async () => {
        setLoading(true); // Inicia o carregamento
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            // Simula um atraso de 2 segundos
            await new Promise(resolve => setTimeout(resolve, 2000));
            setPosts(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error('Error fetching posts:', error); // Loga o erro no console
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    // useEffect para buscar os posts quando o componente é montado
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {/* Botão para recarregar os dados */}
            <button onClick={fetchPosts}>Recarregar Dados</button>
            {loading ? (
                <div>
                    <p>Carregando...</p>
                    {/* Barra de progresso */}
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            ) : (
                <ul>
                    {/* Mapeia os posts para uma lista */}
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Requisicao;