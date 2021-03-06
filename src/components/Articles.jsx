import React from "react";
import uuid from "react-uuid";
import Tags from "./Tags";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  render() {
    return (
      <>
        <div className="section-flex article-color">
          <div>
            <ul className="section-btn">
              <button
                className="header-btn header-btn_feed"
                onClick={() => this.props.handleTags("all")}
              >
                News Feed
              </button>
              <li>
                {this.props.filtered !== "all" ? (
                  <button
                    onClick={() => this.props.handleTags(this.props.filtered)}
                    className="header-btn header-switch"
                  >
                    #{this.props.filtered}
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>

            {this.props.articles.map((article) => {
              return (
                <div className="container" key={uuid()}>
                  <div className="grid flex">
                    <div className="border text-align">
                      <img
                        src={article.author.image}
                        alt="coming-soon"
                        className="section-img"
                      />
                      <Link to={`/profiles/${article.author.username}`}>
                        <h3 className="section-user">
                          {article.author.username}
                        </h3>
                      </Link>
                      <h5 className="section-date">
                        {article.updatedAt.split("T")[0]}
                      </h5>
                      <Link to={`/articles/${article.slug}`}>
                        <h3 className="section-head">{article.title}</h3>
                        <p className="section-para">{article.description}</p>
                        <p>{article.tagList.map((tag) => tag)}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Tags
            tags={this.props.tags}
            tagChange={(tagName) => this.props.tagChange(tagName)}
          />
        </div>
      </>
    );
  }
}

// asfaerfgw;

export default Articles;
