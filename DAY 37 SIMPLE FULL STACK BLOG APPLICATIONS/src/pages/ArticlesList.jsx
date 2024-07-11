import React from 'react';
import { articles } from './Article-content';

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}....</p>
        </div>
      ))}
    </>
  );
};

export default ArticlesList;
