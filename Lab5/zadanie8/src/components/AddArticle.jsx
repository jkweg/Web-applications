import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddArticle(){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now().toString(),
      title: title,
      content: content
    };
    const existingArticles = JSON.parse(localStorage.getItem('articles')) || [];
    existingArticles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(existingArticles));

    navigate('/blog');
  };

  return (
    <div className="card">
      <h2>Dodaj nowy artykuł</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tytuł:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            placeholder="Wpisz tytuł artykułu..."
          />
        </div>
        <div className="form-group">
          <label>Treść:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
            placeholder="Wpisz treść artykułu..."
          />
        </div>
        <button type="submit">DODAJ</button>
      </form>
    </div>
  );
};

export default AddArticle;