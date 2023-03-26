import React, { Component } from "react";
import WithLocalPersistence from "../HOCs/WithLocalPersistence/WithLocalPersistence";
import SearchBar from "../components/SearchBar/SearchBar";
import { InjectedProps } from "../HOCs/WithLocalPersistence/WithLocalPersistence";
import CardsContainer from "../components/CardsContainer/CardsContainer";

import { products } from "../data.json";

type MainState = {
  value: string;
};

class Main extends Component<InjectedProps, MainState> {
  state: MainState = {
    value: this.props.initialValue,
  };

  componentWillUnmount() {
    this.props.setValue(this.state.value);
  }

  render() {
    return (
      <main className="main">
        <SearchBar
          inputValue={this.state.value}
          placeholder={"What do you want to find"}
          handleInput={(e) => this.setState({ value: e.target.value })}
        ></SearchBar>
        <CardsContainer products={products} />
      </main>
    );
  }
}

const MainWithPersistence = WithLocalPersistence(Main);
export default MainWithPersistence;
