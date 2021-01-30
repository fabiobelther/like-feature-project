import "./App.css"
import React from "react";
import LikeButton from "./components/likeButton/LikeButton";
import Article from "./components/article/Article";

export default function App(props) {
    const articleId = 4;
    return (
        <div className="App"> 
            <Article articleId={articleId} />
            <LikeButton articleId={articleId} />
        </div>
    );
}
