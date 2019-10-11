import React from "react";

function Article(props) {
  return (
    <article className="article-card">
      <h4>{props.articleType} Articles</h4>
      <ol>
        {props.articleArr.length
          ? props.articleArr.map(art => {
              return (
                <>
                  <a href={`https://`+art.url} target="_blank">
                    <li>{art.about}</li>
                  </a>
                </>
              );
            })
          : <h5>Nothing to read here...</h5>}
      </ol>
    </article>
  );
}

export default Article;
