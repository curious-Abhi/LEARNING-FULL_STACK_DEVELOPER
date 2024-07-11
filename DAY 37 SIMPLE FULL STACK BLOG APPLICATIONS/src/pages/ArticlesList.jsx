import React from 'react';
import { articles } from './Article-content';
import { Link } from 'react-router-dom';


const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map(article => (
          <Link  key={article.title} className="article-list-item" to={`/articles/${articles.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)} ...</p>
          </Link>
      
      ))}
    </>
  );
};

export default ArticlesList;
