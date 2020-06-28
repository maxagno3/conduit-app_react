import React, { Component } from "react";
import MyArticles from "./MyArticles";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount() {
    let { username } = this.props;
    let url = `https://conduit.productionready.io/api/profiles/${username.username}`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      authorization: `Token ${localStorage.authToken}`,
    })
      .then((res) => res.json())
      .then((data) => this.setState({ profile: data }));
  }

  render() {
    let { username } = this.props;

    return (
      <>
        <div className="max-width">
          <div>
            <div className="border">
              <img
                src={username.image}
                alt="coming-soon"
                className="profile-image"
              />
              <div className="margin-left">
                <h3 className="profile-name margin-top margin-left">
                  {username.username}
                </h3>
                <h5 className="section-date">{username.bio}</h5>
              </div>
            </div>
          </div>
          <MyArticles username={username} />
        </div>
      </>
    );
  }
}

export default Profile;