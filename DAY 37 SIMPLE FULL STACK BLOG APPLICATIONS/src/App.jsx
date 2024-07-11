import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
