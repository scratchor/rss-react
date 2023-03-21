import React, { Component } from "react";

type StateProps = {
  count: number;
};
class Main extends Component<Record<string, never>, StateProps> {
  state: StateProps = {
    count: 0,
  };
  render() {
    return <div className="main"></div>;
  }
}

export default Main;
