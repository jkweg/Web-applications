import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Article(){
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    
    const foundArticle = storedArticles.find(a => a.id === id);
    setArticle(foundArticle);
  }, [id]);

  if (!article) {
    return (
      <div className="card">
        <h2>Artykuł nie został znaleziony</h2>
        <Link to="/blog" className="btn-link">Wróć do listy</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>{article.title}</h1>
      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {article.content}
      </div>
      <br />
      <Link to="/blog" className="btn-link">← Wróć do listy artykułów</Link>
    </div>
  );
};

export default Article;