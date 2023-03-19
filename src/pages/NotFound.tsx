import React, { Component } from "react";

class NotFound extends Component<string, never> {
  render() {
    return (
      <>
        <div>
          <h1 style={{ color: "yellow", opacity: 0.9 }}>
            Sorry, page not found!
          </h1>
          <img src="404.jpg" className="not-found-img" alt="404 page" />
        </div>
      </>
    );
  }
}

export default NotFound;
