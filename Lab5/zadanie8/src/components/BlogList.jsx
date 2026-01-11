import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList(){
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    setArticles(storedArticles);
  }, []);

  return (
    <div className="card">
      <h2>Lista Artykułów</h2>

      {articles.length === 0 ? (
        <p>Brak artykułów. <Link to="/dodaj">Dodaj pierwszy artykuł!</Link></p>
      ) : 
      (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          
          {articles.map((article) => (
            
            <li key={article.id}>
              
              <span> {article.title} </span>
              
              <Link to={`/article/${article.id}`} className="btn-link" style={{ marginTop: 0 }}>
                Czytaj więcej
              
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;