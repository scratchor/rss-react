import React, { Component } from "react";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

type StateProps = {
  count: number;
};
class Home extends Component<{}, StateProps> {
  state: StateProps = {
    count: 0,
  };
  render() {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="nojreferrer noreferrer"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            onClick={() =>
              this.setState((state) => ({
                count: state.count + 1,
              }))
            }
          >
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    );
  }
}

export default Home;
