import React, { Component } from "react";

class NotFound extends Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <>
        <div>
          <h1 style={{ color: "whitesmoke", opacity: 0.9 }}>
            Sorry, page not found..
          </h1>
          <img
            src="../../public/404.jpg"
            className="not-found-img"
            alt="not found page"
          />
        </div>
      </>
    );
  }
}

export default NotFound;
