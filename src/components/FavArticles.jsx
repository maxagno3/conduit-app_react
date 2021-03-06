import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

class FavArticles extends Component {
  render() {
    let { articles } = this.props;
    if (!articles) {
      return <h1>Nothing to show!</h1>;
    }
    return (
      <>
        <div className="section-flex article-color">
          <div>
            <ul className="section-btn">
              <button
                className="header-btn header-btn_feed"
                onClick={() => this.props.handleArticles("myArticles")}
              >
                My Articles
              </button>
              <li>
                {this.props.filtered !== "myArticles" ? (
                  <button
                    onClick={() =>
                      this.props.handleArticles(this.props.filtered)
                    }
                    className="header-btn header-switch"
                  >
                    Favorited
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>

            {this.props.articles.map((article) => {
              return (
                <Link to={`/articles/${article.slug}`} key={uuid()}>
                  <div className="container">
                    <div className="grid flex">
                      <div className="border text-align">
                        <img
                          src={article.author.image}
                          alt="coming-soon"
                          className="section-img"
                        />
                        <h3 className="section-user">
                          {article.author.username}
                        </h3>
                        <h5 className="section-date">
                          {article.updatedAt.split("T")[0]}
                        </h5>
                        <h3 className="section-head">{article.title}</h3>
                        <p className="section-para">{article.description}</p>
                        <p>{article.tagList.map((tag) => tag)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default FavArticles;
