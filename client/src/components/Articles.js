import React from 'react';

function Article(props) {
    return (
        <article className="article-card">
            <h4>{props.articleType} Articles</h4>
            <ol>
                <a href="#"><li>How to manage you time well?</li></a><br/>
                <a href="#"><li>Top 5 productivity hacks.</li></a><br/>
                <a href="#"><li>How to get rich - Financial Times</li></a><br/>
                <a href="#"><li>Never Look back</li></a><br/>
            </ol>
        </article>
    );
}

export default Article;