import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const article = posts.map((post) => {
        return <Article key={post.id} name={post.title} date={post.date} preview={post.preview}/>
    })
    return (
        <div>
          {article}
        </div>
    )
}


export default ArticleList 